"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Toaster } from "../ui/toaster";
import { scrumAxios } from "@/common/axios";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header";
import Features from "./Features";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Hero from "./Hero";
import PartnersShowcase from "./Partners";
import BlogShowcase from "./BlogShowcase";
import FAQ from "./FAQ";
import VideoShowcase from "./VideoShowcase";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("ideas");
  const [sampleIdeas, setSampleIdeas] = useState({
    ideas: [],
    inProgress: [],
    launched: [],
  });

  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  // Fetch country once at mount

  const transformIdeasData = useCallback((ideas) => {
    return ideas.map((idea) => {
      try {
        let createdAt;
        if (idea.created_at?.$date?.$numberLong) {
          createdAt = new Date(
            Number.parseInt(idea.created_at.$date.$numberLong)
          );
        } else if (idea.created_at) {
          createdAt = new Date(idea.created_at);
        } else {
          createdAt = new Date();
        }

        return {
          id: idea._id.$oid,
          title: idea.title || "",
          description: idea.description || "",
          upvotes: idea.upvotes || 0,
          has_upvoted: idea.has_upvoted || false,
          status: idea.status || "idea",
          createdAt: createdAt.toISOString().split("T")[0],
          username: idea.username || "Anonymous",
        };
      } catch (error) {
        console.error("Error transforming idea data:", error, idea);
        // Return a safe fallback object if transformation fails
        return {
          id: idea._id?.$oid || "unknown",
          title: idea.title || "Untitled",
          description: idea.description || "No description available",
          upvotes: 0,
          has_upvoted: false,
          status: "idea",
          createdAt: new Date().toISOString().split("T")[0],
          username: idea.username || "Anonymous",
        };
      }
    });
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fetchAllIdeas = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await scrumAxios.get("/ideas");
      const data = response.data;

      if (!data || !Array.isArray(data)) {
        throw new Error("Invalid response format from server");
      }

      const transformedData = transformIdeasData(data);

      setSampleIdeas({
        ideas: transformedData.filter((idea) => idea.status === "idea"),
        inProgress: transformedData.filter(
          (idea) => idea.status === "in_progress"
        ),
        launched: transformedData.filter((idea) => idea.status === "launched"),
      });
      return true;
    } catch (error) {
      console.error("Error fetching ideas:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch ideas. Please try again later."
      );
      setSampleIdeas({
        ideas: [],
        inProgress: [],
        launched: [],
      });
      return false; // Indicate failed refresh
    } finally {
      setLoading(false);
    }
  }, [transformIdeasData]);

  // Fetch ideas only once at mount
  useEffect(() => {
    fetchAllIdeas();
  }, [fetchAllIdeas]);

  const handleVote = async (id) => {
    if (!user) {
      window.location.href = `${process.env.NEXT_PUBLIC_SCRUM_API_URL}/auth/google`;
      return;
    }

    try {
      const response = await scrumAxios.post(`/ideas/${id}/upvote`);
      const data = response.data;

      // Update vote locally
      setSampleIdeas((prev) => {
        const updateIdeasArray = (ideas) =>
          ideas.map((idea) =>
            idea.id === id
              ? {
                  ...idea,
                  upvotes: idea.has_upvoted
                    ? idea.upvotes - 1
                    : idea.upvotes + 1,
                  has_upvoted: !idea.has_upvoted,
                }
              : idea
          );

        return {
          ideas: updateIdeasArray(prev.ideas),
          inProgress: updateIdeasArray(prev.inProgress),
          launched: updateIdeasArray(prev.launched),
        };
      });

      toast({
        title: "Success",
        description: data.message,
      });
    } catch (error) {
      console.error("Failed to vote:", error);
      toast({
        title: "Error",
        description: "Failed to update vote",
        variant: "destructive",
      });
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    if (!user?.role === "Admin") {
      toast({
        title: "Error",
        description: "Only administrators can change idea status",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await scrumAxios.put(`/ideas/${id}/status`, {
        status: newStatus,
      });

      // Update status locally
      setSampleIdeas((prev) => {
        const moveIdea = (idea) => ({
          ...idea,
          status: newStatus,
        });

        const ideaInIdeas = prev.ideas.find((i) => i.id === id);
        const ideaInProgress = prev.inProgress.find((i) => i.id === id);
        const ideaInLaunched = prev.launched.find((i) => i.id === id);

        const filteredIdeas = prev.ideas.filter((i) => i.id !== id);
        const filteredInProgress = prev.inProgress.filter((i) => i.id !== id);
        const filteredLaunched = prev.launched.filter((i) => i.id !== id);

        const ideaToMove = ideaInIdeas || ideaInProgress || ideaInLaunched;
        if (!ideaToMove) return prev;

        const updatedIdea = moveIdea(ideaToMove);

        return {
          ideas:
            newStatus === "idea"
              ? [...filteredIdeas, updatedIdea]
              : filteredIdeas,
          inProgress:
            newStatus === "in_progress"
              ? [...filteredInProgress, updatedIdea]
              : filteredInProgress,
          launched:
            newStatus === "launched"
              ? [...filteredLaunched, updatedIdea]
              : filteredLaunched,
        };
      });

      toast({
        title: "Success",
        description: "Idea status updated successfully",
      });
    } catch (error) {
      console.error("Failed to update status:", error);
      toast({
        title: "Error",
        description: "Failed to update idea status",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await scrumAxios.delete(`/ideas/${id}`);

      setSampleIdeas((prev) => ({
        ideas: prev.ideas.filter((idea) => idea.id !== id),
        inProgress: prev.inProgress.filter((idea) => idea.id !== id),
        launched: prev.launched.filter((idea) => idea.id !== id),
      }));

      toast({
        title: "Success",
        description: "Idea deleted successfully",
      });
    } catch (error) {
      console.error("Failed to delete idea:", error);
      toast({
        title: "Error",
        description: "Failed to delete idea",
        variant: "destructive",
      });
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      className="min-h-screen bg-black text-white relative "
    >
      <Header />
      <Hero isLoading={isLoading} router={router} />
      <PartnersShowcase className="-mt-25 z-50" />
      <VideoShowcase />
      <Features
        ideas={sampleIdeas.ideas}
        inProgressIdeas={sampleIdeas.inProgress}
        launchedIdeas={sampleIdeas.launched}
        handleVote={handleVote}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onTabChange={handleTabChange}
        activeTab={activeTab}
        isLoading={loading}
        error={error}
        onFeatureSubmit={fetchAllIdeas}
      />

      <Testimonials />
      <BlogShowcase />
      <FAQ />
      <Footer />
      <Toaster />
    </motion.div>
  );
}

export default LandingPage;

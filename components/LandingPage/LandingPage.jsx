"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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
import Footer from "./Footer";
import Hero from "./Hero";
import PartnersShowcase from "./Partners";
import VideoShowcase from "./VideoShowcase";

// Lazy load below-fold components for better performance
const Testimonials = dynamic(() => import("./Testimonials"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-pulse bg-muted h-64 rounded-xl" />
      </div>
    </div>
  ),
});

const DataInsights = dynamic(() => import("./DataInsights"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-pulse bg-muted h-64 rounded-xl" />
      </div>
    </div>
  ),
});

const BlogShowcase = dynamic(() => import("./BlogShowcase"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-pulse bg-muted h-48 rounded-xl" />
      </div>
    </div>
  ),
});

const FAQ = dynamic(() => import("./FAQ"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-pulse bg-muted h-64 rounded-xl" />
      </div>
    </div>
  ),
});

// FAQ Schema for Landing Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ResumeAI free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, uploading your resume and creating your profile is completely free for candidates. You can build professional, ATS-optimized resumes without any cost using our AI-powered resume builder. Free users get access to all 5 professional templates, real-time preview, and can create up to 5 resumes. Premium features are available for users who need unlimited resumes and advanced AI-powered content suggestions, but the core functionality remains free forever. We believe everyone deserves access to powerful career tools regardless of their financial situation.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my resume after I upload it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your resume is parsed into a structured format using our advanced AI technology and stored securely with industry-standard encryption. Our semantic AI analyzes your skills, experience, and qualifications to understand the true depth of your capabilities—not just keywords. Recruiters using our platform can then search for candidates matching their requirements using semantic search technology, which understands context and meaning. When there's a potential match between your profile and a job opportunity, you'll receive a notification. Your data is never sold to third parties, and you maintain full control over your profile visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats do you accept for resume uploads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept PDF, DOC, and DOCX formats for resume uploads. PDF format typically provides the most consistent parsing results across our AI systems because it preserves formatting reliably. For best results, use a clean, well-formatted resume without complex tables, graphics, or unusual fonts that might confuse parsing algorithms. Avoid putting important information in headers, footers, or text boxes, as these can sometimes be missed by document parsers. If you're unsure about your format, our resume builder can help you create a perfectly optimized document from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update my resume and profile information later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can update your resume, salary expectations, availability, and other profile details anytime through your dashboard. We actually recommend keeping your profile current to improve your visibility to recruiters and receive more relevant job matches. When you update your information, our AI re-analyzes your profile to ensure you're being matched with the most suitable opportunities. There's no limit to how many times you can update your profile, and changes are reflected immediately in our search system.",
      },
    },
    {
      "@type": "Question",
      name: "What information should I include in my profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beyond your resume, we recommend adding your expected salary range (helps filter for roles within your target compensation), availability status (immediate, 2 weeks notice, 1 month notice, etc.), preferred work arrangements (remote, hybrid, on-site), location preferences including willingness to relocate, and any specific requirements you have for your next role. The more complete your profile, the better our semantic AI can match you with suitable opportunities. You can also add links to your portfolio, GitHub, LinkedIn, or other professional profiles to showcase your work.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure and private on ResumeAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, your data is encrypted and stored securely using industry-standard security protocols including AES-256 encryption at rest and TLS 1.3 for data in transit. Only verified recruiters on our platform can access candidate profiles, and they must agree to our terms of service regarding data usage. You have full control over your profile visibility and can choose to hide your profile from search results at any time. We never sell your personal information to third parties or use it for advertising purposes. You can also request a complete deletion of your data at any time through your account settings.",
      },
    },
    {
      "@type": "Question",
      name: "How does semantic search work for job matching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike traditional keyword matching that only finds exact text matches, our semantic search uses advanced AI to understand the meaning and context of skills and experience. For example, it recognizes that 'built REST APIs' relates to 'backend development,' 'microservices architecture,' and 'API design'—even if those exact words don't appear on your resume. This means recruiters find better matches based on actual capabilities rather than keyword stuffing, and candidates get discovered for opportunities they're genuinely qualified for. Our semantic AI also understands skill relationships, so experience with React implies knowledge of JavaScript, component-based architecture, and frontend development.",
      },
    },
  ],
};

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
      className="min-h-screen bg-background text-foreground relative "
    >
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
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

      {/* <Testimonials /> */}
      <DataInsights />
      <BlogShowcase />
      <FAQ />
      <Footer />
      <Toaster />
    </motion.div>
  );
}

export default LandingPage;

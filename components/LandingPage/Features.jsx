import React, { useState, useEffect } from "react";
import { Plus, Sparkles, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import TabSelector from "./TabSelector";
import IdeasGrid from "../ideas/IdeasGrid";
import { useToast } from "@/hooks/use-toast";
import AddFeatureDialog from "../ui/AddFeatureDialog";
import { scrumAxios } from "@/common/axios";
import { FaGoogle } from "react-icons/fa";

const Features = ({
  ideas,
  inProgressIdeas = [],
  launchedIdeas = [],
  handleVote,
  onTabChange,
  onStatusChange,
  onDelete,
  isLoading,
  error,
  onFeatureSubmit,
}) => {
  const { user, handleLogin } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("ideas");
  const [isAdmin, setIsAdmin] = useState(false);
  const [archivedIdeas, setArchivedIdeas] = useState([]);

  useEffect(() => {
    if (user?.role === "Admin") {
      setIsAdmin(true);
    }
  }, [user]);

  const tabdata = [
    {
      label: "Ideas",
      value: "ideas",
    },
    {
      label: "In Progress",
      value: "in-progress",
    },
    {
      label: "Launched",
      value: "launched",
    },
    { label: "Archive", value: "archive" },
  ];
  const handleArchiveDelete = async (id) => {
    try {
      await scrumAxios.delete(`/ideas/archive/${id}`);
      setArchivedIdeas(archivedIdeas.filter((idea) => idea.id !== id));
    } catch (error) {
      console.error("Failed to delete idea:", error);
    }
  };
  const handleArchiveUndo = async (id) => {
    try {
      await scrumAxios.post(`/ideas/archive/${id}/undo`);
      setArchivedIdeas(archivedIdeas.filter((idea) => idea.id !== id));
    } catch (error) {
      console.error("Failed to undo archive:", error);
    }
  };
  const fetchArchivedIdeas = async () => {
    try {
      const response = await scrumAxios.get("/ideas/archive");
      const data = response.data;
      const transformedData = data.map((idea) => ({
        id: idea._id?.$oid || "unknown",
        title: idea.title || "Untitled",
        description: idea.description || "No description available",
        upvotes: idea.upvotes || 0,
        has_upvoted: false,
        status: idea.status || "unknown",
        username: idea.username || "Anonymous",
        email: idea.email || "No email provided",
      }));
      if (response.status === 200) {
        setArchivedIdeas(transformedData);
      }
    } catch (error) {
      console.error("Error fetching archived ideas:", error);
    }
  };

  const handleSubmitFeature = async (featureData) => {
    try {
      const response = await scrumAxios.post("/ideas", featureData);

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Success",
          description: "Feature suggestion submitted successfully!",
        });
        if (onTabChange) {
          onTabChange("ideas");
        }
        if (onFeatureSubmit) {
          await onFeatureSubmit();
        }
      }
    } catch (error) {
      console.error("Error submitting feature:", error);
      toast({
        title: "Error",
        description:
          error.response?.data?.message ||
          "Failed to submit feature suggestion",
        variant: "destructive",
      });
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "archive" && isAdmin && !archivedIdeas.length) {
      fetchArchivedIdeas();
    }
    // Only notify parent of tab change
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const renderActiveContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ff6600]"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      );
    }

    const currentIdeas =
      activeTab === "ideas"
        ? ideas
        : activeTab === "in-progress"
        ? inProgressIdeas
        : activeTab === "archive"
        ? archivedIdeas
        : launchedIdeas;

    return (
      <IdeasGrid
        ideas={currentIdeas}
        handleVote={handleVote}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
        isAuthenticated={!!user}
        isAdmin={isAdmin}
        hasVoted={false}
        onArchiveDelete={handleArchiveDelete}
        onArchiveUndo={handleArchiveUndo}
      />
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 min-h-[80vh] "
      id="features"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none"></div>

      <div className="w-[95vw] lg:w-[80vw] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Feature Roadmap
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Track, vote, and suggest new features for our platform
          </p>
          {!user ? (
            <Button
              style={{color: "white"}}
              onClick={handleLogin}
              className="px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-[#ff6600] to-[#ff8533] hover:opacity-90 transition-opacity duration-300 mb-8 text-white"
            >
              <FaGoogle className="w-4 h-4 mr-2 inline-block" />
              Sign in to Vote & Suggest
            </Button>
          ) : (
            <AddFeatureDialog onSubmit={handleSubmitFeature} />
          )}
        </div>

        <TabSelector
          activeTab={activeTab}
          setActiveTab={handleTabClick}
          tabData={tabdata}
          isAdmin={isAdmin}
        />

        <div className="mt-8">
          <AnimatePresence mode="wait">{renderActiveContent()}</AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;

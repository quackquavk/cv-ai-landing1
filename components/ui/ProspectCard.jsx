import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, Calendar, Trash2, ArchiveIcon, Pencil } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { scrumAxios } from "@/common/axios";

const StatusBadge = ({ status }) => {
  const statusConfig = {
    idea: { color: "bg-blue-500/20 text-blue-400", text: "Idea" },
    in_progress: {
      color: "bg-yellow-500/20 text-yellow-400",
      text: "In Progress",
    },
    launched: { color: "bg-green-500/20 text-green-400", text: "Launched" },
  };
  const config = statusConfig[status] || statusConfig.idea;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}
    >
      {config.text}
    </span>
  );
};
const ProspectCard = ({
  prospect,
  handleVote,
  isAuthenticated,
  isAdmin = false,
  onStatusChange,
  onDelete,
  onArchiveDelete,
  onArchiveUndo,
}) => {
  const { handleLogin } = useAuth();
  const { toast } = useToast();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(prospect.title);
  const [editDescription, setEditDescription] = useState(prospect.description);

  const handleVoteClick = () => {
    if (!isAuthenticated) handleLogin();
    if (prospect.status === "archived") {
      toast({
        title: "Archived",
        description: "This idea is archived and cannot be voted on.",
      });
    } else {
      handleVote(prospect.id);
    }
  };
  const handleStatusChange = (newStatus) => {
    if (onStatusChange) {
      onStatusChange(prospect.id, newStatus);
    }
  };
  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };
  const handleConfirmDelete = () => {
    if (prospect.status === "archived" && onArchiveDelete) {
      onArchiveDelete(prospect.id);
    } else if (onDelete) {
      onDelete(prospect.id);
    }
    setIsDeleteDialogOpen(false);
  };
  const handleArchiveUndo = () => {
    if (onArchiveUndo) {
      onArchiveUndo(prospect.id);
    }
  };
  const handleEditClick = () => {
    setEditTitle(prospect.title);
    setEditDescription(prospect.description);
    setIsEditDialogOpen(true);
  };
  const handleEditSubmit = async () => {
    try {
      const response = await scrumAxios.put(`/ideas/${prospect.id}`, {
        title: editTitle,
        description: editDescription,
      });
      // Update the local prospect state
      if (response.data) {
        // Assuming response.data contains the updated idea
        setEditTitle(response.data.title);
        setEditDescription(response.data.description);
        toast({ title: "Success", description: "Idea updated successfully!" });
      }
      setIsEditDialogOpen(false);
    } catch (error) {
      toast({ title: "Error", description: error.message });
    }
  };
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group bg-card backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
      >
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
              {prospect.title}
            </h3>
            <div className="flex items-center gap-2">
              {isAdmin && (
                <button
                  onClick={handleDeleteClick}
                  className="flex items-center p-1 rounded-md bg-red-500/10 hover:bg-red-500/20 transition-colors"
                  aria-label="Delete idea"
                >
                  {prospect.status === "archived" ? (
                    <Trash2 size={20} className="text-red-500" />
                  ) : (
                    <ArchiveIcon size={20} className="text-red-500" />
                  )}
                </button>
              )}
              {isAdmin && (
                <button
                  onClick={handleEditClick}
                  className="flex items-center p-1 rounded-md bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                  aria-label="Edit idea"
                >
                  <Pencil size={20} className="text-blue-500" />
                </button>
              )}
              {prospect.status !== "archived" && isAdmin ? (
                <Select
                  value={prospect.status}
                  onValueChange={handleStatusChange}
                  className="bg-background border-border text-foreground text-sm"
                >
                  <SelectTrigger className="w-[100px] h-8 bg-background border-border text-foreground text-sm">
                    <SelectValue placeholder="Change status" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border text-popover-foreground">
                    <SelectItem value="idea">Idea</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="launched">Launched</SelectItem>
                  </SelectContent>
                </Select>
              ) : isAdmin && prospect.status === "archived" ? (
                <Button
                  onClick={() => handleArchiveUndo(prospect.id)}
                  variant="outline"
                  className="bg-transparent border border-border text-foreground hover:text-foreground hover:bg-accent/10"
                >
                  Undo Archive
                </Button>
              ) : (
                <StatusBadge status={prospect.status} />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            {prospect.createdAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {format(new Date(prospect.createdAt), "MMM d, yyyy")}
                </span>
              </div>
            )}
          </div>
          <div className="relative">
            <p className="text-muted-foreground mb-4 sm:mb-6 line-clamp-[8] sm:line-clamp-[12] text-sm leading-relaxed">
              {prospect.description}
            </p>
          </div>
        </div>
        <button
          onClick={handleVoteClick}
          className={`group/button w-full mt-4 pt-4 border-t border-border flex items-center justify-between px-4 py-3 rounded-lg
            transition-all duration-300 ${
              prospect.has_upvoted
                ? "bg-accent/10"
                : "bg-muted/50 hover:bg-muted"
            }`}
          aria-label={`Vote for ${prospect.title}`}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <ThumbsUp
                size={20}
                strokeWidth={2.5}
                stroke={prospect.has_upvoted ? "transparent" : "currentColor"}
                fill={
                  prospect.has_upvoted ? "var(--color-accent)" : "transparent"
                }
                className="transition-transform group-hover/button:scale-110 text-muted-foreground group-hover/button:text-foreground"
              />
            </div>
            <span
              className={`font-medium transition-colors ${
                prospect.has_upvoted ? "text-accent" : ""
              }`}
            >
              {prospect.has_upvoted ? "Voted" : "Vote"}
            </span>
          </div>
          <div className="flex items-center">
            <span
              className={`font-medium ${
                prospect.has_upvoted ? "text-accent" : "text-foreground"
              }`}
            >
              {prospect.upvotes}
            </span>
          </div>
        </button>
      </motion.div>
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-background border border-border text-foreground">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              Confirm {prospect.status === "archived" ? "Delete" : "Archive"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Are you sure you want to{" "}
              {prospect.status === "archived" ? "delete" : "archive"} "
              {prospect.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="bg-transparent border border-border text-foreground hover:bg-muted"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {prospect.status === "archived" ? "Delete" : "Archive"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent
          className="sm:max-w-[500px] bg-background border border-border text-foreground"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogHeader>
            <DialogTitle
              id="dialog-title"
              className="text-2xl font-bold text-foreground"
            >
              Edit Idea
            </DialogTitle>
            <DialogDescription
              id="dialog-description"
              className="text-muted-foreground"
            >
              Modify the details of your idea below.
            </DialogDescription>
          </DialogHeader>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditSubmit();
            }}
            className="mt-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-foreground"
              >
                Feature Title
              </label>
              <input
                type="text"
                id="title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                placeholder="Enter feature title"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-foreground"
              >
                Description
              </label>
              <textarea
                id="description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors min-h-[120px] resize-none"
                placeholder="Describe your feature idea in detail..."
                required
              />
            </div>
            <DialogFooter className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
                className="px-4 py-2 border bg-background border-border text-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors"
              >
                Save
              </Button>
            </DialogFooter>
          </motion.form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProspectCard;

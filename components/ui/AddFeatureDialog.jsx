import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AddFeatureDialog = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const MIN_TITLE_LENGTH = 5;
  const MIN_DESCRIPTION_LENGTH = 20;
  const MAX_TITLE_LENGTH = 100;
  const MAX_DESCRIPTION_LENGTH = 1000;

  const validateForm = () => {
    const newErrors = {};
    if (title.trim().length < MIN_TITLE_LENGTH) {
      newErrors.title = `Title must be at least ${MIN_TITLE_LENGTH} characters`;
    }
    if (description.trim().length < MIN_DESCRIPTION_LENGTH) {
      newErrors.description = `Description must be at least ${MIN_DESCRIPTION_LENGTH} characters`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit({ title, description });
      setTitle("");
      setDescription("");
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="group px-8 py-4 text-lg mx-auto font-medium rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-accent to-accent/80"
          aria-label="Add new feature"
        >
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
          Add New Feature
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px] bg-background/95 border border-border text-foreground"
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogHeader>
          <DialogTitle
            id="dialog-title"
            className="text-2xl font-bold text-foreground"
          >
            Suggest a New Feature
          </DialogTitle>
          <DialogDescription
            id="dialog-description"
            className="text-muted-foreground"
          >
            Share your ideas to help us improve the platform
          </DialogDescription>
        </DialogHeader>
        <motion.form
          onSubmit={handleSubmit}
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
            <div className="relative">
              <input
                type="text"
                id="title"
                value={title}
                maxLength={MAX_TITLE_LENGTH}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) setErrors({ ...errors, title: "" });
                }}
                className={cn(
                  "w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none transition-colors pr-16",
                  "text-foreground placeholder-muted-foreground",
                  errors.title
                    ? "border-red-500 focus:border-red-500"
                    : "border-border focus:border-accent",
                )}
                placeholder="Enter feature title"
                aria-invalid={errors.title ? "true" : "false"}
                aria-describedby={errors.title ? "title-error" : undefined}
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                {title.length}/{MAX_TITLE_LENGTH}
              </div>
              {errors.title && (
                <motion.p
                  id="title-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.title}
                </motion.p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-foreground"
            >
              Description
            </label>
            <div className="relative">
              <textarea
                id="description"
                value={description}
                maxLength={MAX_DESCRIPTION_LENGTH}
                onChange={(e) => {
                  setDescription(e.target.value);
                  if (errors.description)
                    setErrors({ ...errors, description: "" });
                }}
                className={cn(
                  "w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none transition-colors pr-16",
                  "text-foreground placeholder-muted-foreground min-h-[120px] resize-none",
                  errors.description
                    ? "border-red-500 focus:border-red-500"
                    : "border-border focus:border-accent",
                )}
                placeholder="Describe your feature idea in detail..."
                aria-invalid={errors.description ? "true" : "false"}
                aria-describedby={
                  errors.description ? "description-error" : undefined
                }
                required
              />
              <div className="absolute right-3 top-3 text-xs text-muted-foreground">
                {description.length}/{MAX_DESCRIPTION_LENGTH}
              </div>
              {errors.description && (
                <motion.p
                  id="description-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.description}
                </motion.p>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border bg-background border-border text-foreground hover:bg-muted hover:text-foreground transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Idea"
              )}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFeatureDialog;

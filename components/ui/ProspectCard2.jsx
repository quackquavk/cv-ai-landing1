import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

const ProspectCard = ({ prospect, onVote, onVoteRemove }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleVote = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      onVote(prospect.id);
    } else {
      onVoteRemove(prospect.id);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group bg-card backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
            {prospect.title}
          </h3>
          <button
            onClick={handleVote}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300"
            aria-label={`Love ${prospect.title}`}
          >
            <Heart
              size={18}
              className={`transition-all duration-300 ${
                isLiked
                  ? "fill-accent stroke-accent"
                  : "stroke-muted-foreground hover:scale-110"
              }`}
            />
            <span
              className={`text-sm font-medium ${isLiked ? "text-accent" : "text-muted-foreground"}`}
            >
              {prospect.votes.toLocaleString()}
            </span>
          </button>
        </div>
        <div className="relative">
          <p className="text-muted-foreground mb-4 sm:mb-6 line-clamp-[8] sm:line-clamp-[12] text-sm leading-relaxed">
            {prospect.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Add prop types for better documentation and type checking
ProspectCard.propTypes = {
  prospect: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
  onVoteRemove: PropTypes.func.isRequired,
};

export default ProspectCard;

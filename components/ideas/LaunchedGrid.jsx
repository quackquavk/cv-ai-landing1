import React from 'react';
import { motion } from 'framer-motion';
import ProspectCard from '../ui/ProspectCard';

const LaunchedGrid = ({ ideas = [], handleVote, onVoteRemove, isAuthenticated, hasVoted }) => {
  if (!ideas || ideas.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center py-8"
      >
        <p className="text-gray-400">No features have been launched yet.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[95vw] lg:max-w-[80vw] mx-auto"
    >
      {ideas.map((prospect, index) => (
        <ProspectCard
          key={prospect.id || index}
          prospect={prospect}
          onVote={handleVote}
          onVoteRemove={onVoteRemove}
          isAuthenticated={isAuthenticated}
          hasVoted={hasVoted}
          status="launched"
        />
      ))}
    </motion.div>
  );
};

export default LaunchedGrid; 
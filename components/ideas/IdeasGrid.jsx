import React from 'react';
import { motion } from 'framer-motion';
import ProspectCard from '../ui/ProspectCard';
import { scrumAxios } from '@/common/axios';

const IdeasGrid = ({
  ideas = [],
  handleVote,
  onStatusChange,
  isAuthenticated,
  isAdmin,
  onDelete,
  onArchiveDelete,
  onArchiveUndo,
}) => {
  if (!ideas || ideas.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='text-center py-8'
      >
        <p className='text-gray-400'>No ideas available at the moment.</p>
      </motion.div>
    );
  }




  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[95vw] lg:max-w-[80vw] mx-auto'
    >
      {ideas.map((prospect, index) => (
        <ProspectCard
          key={prospect.id || index}
          prospect={prospect}
          handleVote={handleVote}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          onArchiveDelete={onArchiveDelete}
          onArchiveUndo={onArchiveUndo}
        />
      ))}
    </motion.div>
  );
};

export default IdeasGrid;
 
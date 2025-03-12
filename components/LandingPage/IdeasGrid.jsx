const IdeasGrid = ({
  ideas,
  handleVote,
  onStatusChange,
  onDelete,
  isAuthenticated,
  isAdmin,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ideas.map((idea) => (
        <ProspectCard
          key={idea.id}
          prospect={idea}
          handleVote={handleVote}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
}; 
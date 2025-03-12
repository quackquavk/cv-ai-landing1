import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.loading?.isLoading);
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;

import React from "react";

interface LoadingProps {
  text?: string;
  style?: React.CSSProperties;
}

const Loading: React.FC<LoadingProps> = ({ text, style }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50 z-50"
      style={style}
    >
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        <div className="ml-4 text-gray-900">{text}</div>
      </div>
    </div>
  );
};

export default Loading;

import React from "react";
import ErrorBoundary from "./ErrorBoundaries";
import ErrorComponent from "./ErrorComponent";

const ErrorLanding: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ErrorComponent />
      </div>
    </ErrorBoundary>
  );
};

export default ErrorLanding;

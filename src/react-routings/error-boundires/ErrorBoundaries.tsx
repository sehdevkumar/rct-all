import React, { ReactNode, useState, useEffect } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}
const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: Error) => {
      setHasError(true);
    };

    window.addEventListener("error", errorHandler as any);
    return () => {
      window.removeEventListener("error", errorHandler as any);
    };
  }, []);

  return hasError;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const hasError = useErrorBoundary();

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong.
        </h1>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;

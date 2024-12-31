import { ReactNode } from "react";

const LazyDump = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-lg font-semibold text-gray-700 mb-4">
        This is the lazy loaded component
      </p>
      {children}
    </div>
  );
};

export default LazyDump;
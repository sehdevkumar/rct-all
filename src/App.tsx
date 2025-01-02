import { forwardRef, memo, useCallback, useRef, useState } from "react";


const CircleObject = memo(forwardRef<HTMLDivElement>((_, ref) => {
   console.log("Did i Re-rendered")
  return (
    <div
      ref={ref}
      className="w-24 h-24 absolute  animate-pulse rounded-full opacity-80 border-green-400 border-[12px] bg-purple-300]"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}));

function App() {
  const objRef = useRef<HTMLDivElement | null>(null);
  const [outer, setOuter] = useState(0);
  const [inner, setInner] = useState(0);

  // We'll update the counter only inside the throttled function
  const handleMouseMove = (event: React.MouseEvent) => {
    setOuter((prev) => prev + 1); // This runs on every mouse move
    throttledMouseMove(event);
  };
  
  const throttleEvent = useCallback((callback: (events: any) => void, limit: number) => {
    let wait = false;
    return (event: any) => {
      if (!wait) {
        callback(event);
        wait = true;
      const timer =   setTimeout(() => {
          wait = false;
          clearTimeout(timer)
        }, limit);
      }
    };
  },[]);



  const throttledMouseMove = throttleEvent((event) => {
    // Counter update is now part of the throttled function
    setInner((prev) => prev + 1);
    if (objRef.current) {
      objRef.current.style.left = `${event.clientX}px`;
      objRef.current.style.top = `${event.clientY}px`;

    }
  }, 10000); // Increased throttle time to make the difference more noticeable

  return (
    <div
      className="w-screen h-screen relative bg-gray-300 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="fixed top-4 left-4 p-6 bg-lime-200 rounded-md shadow-md">
        <p className="mb-2">Without Throttle: {outer}</p>
        <p>With Throttle: {inner}</p>
      </div>

      <CircleObject ref={objRef} />
    </div>
  );
}

export default App;

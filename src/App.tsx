import { forwardRef, memo, useCallback, useRef, useState } from "react";
import HOCExampleCode from "./custom-hooks/useHOC";



function App() {
 

  return (
    <div
      className="w-screen h-screen relative bg-gray-300 overflow-hidden"
     
    >

      <HOCExampleCode/>
    </div>
  );
}

export default App;

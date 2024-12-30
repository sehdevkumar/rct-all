import { useState } from "react";
import "./App.css";

function App() {

  

   const [counter,setCounter] = useState(0);
   

   return (
      <>
        <div>
            {counter}

            <button onClick={()=> setCounter(d=>d+1)} type="button">Change Value</button>
        </div>

      </>
   )
}

export default App;

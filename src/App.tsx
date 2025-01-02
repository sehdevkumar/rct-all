import { useEffect } from "react";
import { useAppSelectors } from "./store/selector";
import { useAppDispatch } from "./store/store";
import { SetMessageAction } from "./store/actions";



function App() {

  const {message,loading} = useAppSelectors()
    const dispatch  = useAppDispatch()
   
  useEffect(()=> {
       
    const timerRef = setTimeout(()=> {
      
      dispatch(SetMessageAction("Hey I am Happ to see u...."))
      
    },5000)
     

      return  ()=> {
        clearTimeout(timerRef)
      }
  },[])


  return (
    <div className="w-screen h-screen relative bg-gray-300 overflow-hidden">
      {message && <>{message}</>}
      {loading && <>{loading}</>}
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useAppSelectors } from "./store/selector";
import { useAppDispatch } from "./store/store";
import { SetMessageAction } from "./store/actions";
import { asyncThunkReducer } from "./store/effect";



function App() {

  const {message,loading} = useAppSelectors()
    const dispatch  = useAppDispatch()
   
  useEffect(()=> {
       
    const timerRef = setTimeout(()=> {
      
      dispatch(SetMessageAction("Hey I am Happ to see u...."))
      dispatch(SetMessageAction("Hi"));
      dispatch(asyncThunkReducer());
      
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

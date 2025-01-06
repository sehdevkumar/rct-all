import { withLoader } from "./design-patterns/withLoader";

const LoadMe = ()=> {
   return (
      <>Load me</>
   )
}


const Comp = withLoader(LoadMe);

function App() {
  
  


  return (
    <div className="w-screen h-screen relative bg-gray-300 overflow-hidden">
      <Comp/>
    </div>
  );
}

export default App;

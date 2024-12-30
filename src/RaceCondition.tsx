import { useEffect, useState } from "react";

const RaceConditionExample = ({ id }: { id: number }) => {
  const [iAmLast, setAmLast] = useState<any>("");
  const abortControl = new AbortController();

  const fetchWithSomeDelay = (id: number) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(abortControl.signal.aborted) {
             reject("Aborted")
        }
        resolve(`Last Updates ${id}`);
      }, Math.random() * 5000);
    });
  };

  useEffect(() => {
    console.log("I should be last", id);

    fetchWithSomeDelay(id).then((d) => {
      console.log("But I am the last", d);
      setAmLast(d);
    });

    return () => {
      abortControl.abort();
      console.log("I cleanup", id);
    };
  }, [id]);

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <p className="text-lg font-semibold text-gray-700">I should last: {id}</p>
      <p className="text-lg font-semibold text-blue-500">
        But I am the Last: {iAmLast}
      </p>
    </div>
  );
};

export default RaceConditionExample;


//  <div className="container p-10 flex justify-center items-center">
//    <button
//      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//      onClick={() => {
//        setId(Math.random() * 2);
//      }}
//    >
//      Click Fast
//    </button>
//    <RaceConditionExample id={id} />
//  </div>;

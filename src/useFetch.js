import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);//loads a message while useState tries to connect to api
    const [error, setError] = useState(null);//saving error to the state

    useEffect(() => {
      const abortConst = new AbortController();
        setTimeout(() => {
          fetch(url, {signal: abortConst.signal})
            .then(res => {
              //if the connection response return false, throw an error message
              if(!res.ok) {
                throw Error ("Could not connect to resource!");
              }
              //else continue
              return res.json();
            })
          .then((data) => {
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null);
          })
          .catch(err => {
            err.name === "AbortError" ? console.log("Fetch Aborted") :setIsPending(false);
            setError(err.message);       
          })
        }, 1000);
        

        return () => abortConst.abort();
    }, [url]);
  

    return {data, isPending, error}
}


export default useFetch;
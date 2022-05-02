import { useEffect, useState } from "react";
import axios from "axios";

const signinPromise = axios.get(`/signin?ajax=true`);

const Index = () => {
  const [resolved, setResolved] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await signinPromise;
        console.log("Here");
        setResolved(true);
        // ... do something with data etc
      } catch (err) {
      } finally {
      }
    })();
  }, []);

  return <>{resolved ? "Resolved" : "Loading"}</>;
};

export default Index;

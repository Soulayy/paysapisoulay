import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pays, setPays] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => setPays(response.data))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {
        pays.map((pays, key) => {
          return(
            <div>
              {pays.name.common}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

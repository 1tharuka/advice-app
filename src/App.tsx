import background from "./assets/background.jpg"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios";
function App() {
  const [advices, setAdvices] = useState<string>("It's unlucky to be superstitious.");

  


  async function data() {
    
    axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      // Set the state with the fetched data
      setAdvices(response.data.slip.advice);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
  }
  const fatuch = () =>{
    data()

  }
 

  return (
    <>
     <div 
     className="app__background"
     style={{
      backgroundImage: `url(${background})`
     }}
     >
      <div className="advice__api">
        <h1>{advices}</h1>
        <div>
        <button onClick={fatuch}>ADVICE</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default App

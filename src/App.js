import { useEffect, useState } from "react";
import "./App.css";

const SuperheroData = (props) => {
 const superhero = props.superhero
  return (
      <div>
        <h2>(superhero.name)</h2>
        <p>Alter Ego:</p>
        <p>{superhero.alterEgo}</p>
        <p>Superpowers:</p>
        <ul>
          {superhero.superpowers.map((superpower) =>{
            return <li>{superpower}</li>;
          })}
          <p>Superhuman strength</p> 
          <p>Invulnerability</p>
          </ul>
          <p>Durability:</p>
          <p>Indestructable</p>
      </div>
);


return (
  <div className="App" >
    <header className= "App-header">
      <h1>Superheroes</h1>
    </header>
      <SuperheroData/>
    </div>
);
}



// function App() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     getTimeFromServer();
//   }, []);

//   const getTimeFromServer = async () => {
//     try {
//       let response = await fetch("/slow");
//       let vals = await response.json();
//       console.log(`vals is:`, vals);
//       return setData(vals.currentTime);
//     } catch (ex) {
//       console.log(ex);
//     }
//   }; 
// }; 

export default App;

import React from 'react';
import {data} from "./mocks/handlers";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const characters = data.map((item,index) => 
<Karakter key= {index} name= {item.name} birthYear={item.birth_year}/>
)
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {characters}
    </div>
  );
}

export default App;

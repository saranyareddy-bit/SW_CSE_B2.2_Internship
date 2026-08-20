import { Welcome } from "./components/p1";
import {ProductCard} from "./components/p2";
import phone from "./assets/Samsung.jpg";
import ButtonDemo, { } from "./components/p3"; 
import Counter from "./components/StateExampleOne";
import ToggleText from "./components/StateExampleTwo";
import NameInput from "./components/StateExampleThree"
import './App.css';

function App() {

  return (
    <> 
    <NameInput />
    <ToggleText />
    <Counter />
   <Welcome name="Saranya" />

      <ButtonDemo />

      <ProductCard
        //  name="Samsung Galaxy M17 5G Mobile (Sapphire Black, 4GB RAM, 128GB Storage)"
        price={17999}
        //  image="https://m.media-amazon.com/images/I/714QJQZszoL._SX679_.jpg"
        image={phone}
      />   
    
    </>
  );
}

export default App;

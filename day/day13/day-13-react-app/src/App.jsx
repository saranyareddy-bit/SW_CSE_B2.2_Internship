import { Welcome } from "./components/p1";
import {ProductCard} from "./components/p2";
import phone from "./assets/Samsung.jpg";
import './App.css'
function App() {
 

  return (
    <> 
    <Welcome name="Saranya"/>
    <ProductCard
    name="Samsung Galaxy M17 5G Mobile"
    price={17999} 
    // image="https://m.media-amazon.com/images/I/714QJQZszoL._AC_UY327_FMwebp_QL65_.jpg" />
    image={phone} />
    </>
  )
}

export default App

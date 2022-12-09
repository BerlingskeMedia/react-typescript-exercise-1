import { useEffect, useState } from "react";
import "./App.css";
import { Basket } from "./Basket";
import { HeaderBar } from "./HeaderBar";
import { Products } from "./Products";
import { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const request = async () => {
      // api call here
    };
    request();
  });

  return (
    <main className="App">
      <HeaderBar />
      <hr />
      <Basket />
      <hr />
      <Products />
    </main>
  );
}

export default App;

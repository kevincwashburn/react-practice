import React from "react";
import Product from "./Product";
import productsData from "./productsData";

function App() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item}></Product>)

  return (
    <div>
    {productComponents}
    </div>
  )
};

export default App;
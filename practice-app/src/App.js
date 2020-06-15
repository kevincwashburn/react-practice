import React from "react";
import Product from "./Product";
import productsData from "./productsData";

function App() {
  const productCompilation = productsData.map(item => <Product key={item.id} product={item}/>);

  return (
    <div>
    {productCompilation}
    </div>
  )
};

export default App;
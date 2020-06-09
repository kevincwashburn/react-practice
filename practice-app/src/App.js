import React from "react";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <nav>
        <h1>Hello World!</h1>
        <ul>
          <li>thing 1</li>
          <li>thing 2</li>
          <li>thing 3</li>
        </ul>
      </nav>
      <main>
        <p>Here is a paragraph in the main section.</p>
      </main>
      <Footer />
    </div>
  )
};

export default App;
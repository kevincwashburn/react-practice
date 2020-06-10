import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  
  if(hours < 12) {
    timeOfDay = "morning"
  } else if (hours > 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div>
      <Header />
      <h3>Good {timeOfDay}!</h3>
      <MainContent />
      <Footer />
    </div>
  )
};

export default App;
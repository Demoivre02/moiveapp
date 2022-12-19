import React from "react";
import Nav from "./components/static/nav";
import Hero from "./components/static/hero";
import Search from "./components/functional/search";
import ActionSliders from "./components/sliders/action";
import DramaSliders from "./components/sliders/drama";

function App() {
  return (
    <div className="App ">
      <Nav/>
      <Hero/>
      <Search/>
      <ActionSliders/>
      <DramaSliders/>
    </div>
  );
}

export default App;

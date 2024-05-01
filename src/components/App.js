import React from "react";
import Article from './Components/Article.jsx'
import Header from './Components/Header.jsx'
//import index from "./index.js"

function App(this, props) {
  return <div className="App">
    learn react!
    <Header/>
    <Article />
  </div>;
}

export default App;

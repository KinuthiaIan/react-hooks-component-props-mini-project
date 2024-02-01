import React from "react";
import blogData from "../data/blog";
import Header from './header'
import About from './about'
import ArticleList from "./articleList";
console.log(blogData);

function App() {
  const source = "/home/the-backend-dev/Development/code/phase-2/react-hooks-component-props-mini-project/images/demo.png"
  const placeholder="https://via.placeholder.com/215"
  const attribute = "blog logo"
  const abtTxt = "This is just a blog"
  const array = [blogData]
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
     <div>
      <Header name="My Blog" />
      <About 
       source ={source}
       placeholder = {placeholder}
       attribute = {attribute}
       abtTxt = {abtTxt}
      />
      <ArticleList array = {array}/>
      
     </div>
    </div>
  );
}

export default App;

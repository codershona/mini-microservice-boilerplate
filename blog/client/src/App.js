import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";


const App = () => {
  return (
    <div className="container">
      <h1>Microservice blog app</h1>
      <h1>Create Post</h1>
      <PostCreate />
      <hr/>
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
export default App;
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="container">
      <h1>Demo with Redux Toolkit</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;

import { Routes, Route} from "react-router-dom";
import './App.css';
import PostList from "./pages/PostList";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <PostList />} />
        <Route path="/posts/new" element={ <NewPost />} />
        <Route path="/posts/:id" element={ <PostDetail />} />
        <Route path="/posts/:id/edit" element={ <UpdatePost />} />
        <Route path="*" element={ <div>Cтраница 404</div> } />

      </Routes>
    </div>
  );
}

export default App;

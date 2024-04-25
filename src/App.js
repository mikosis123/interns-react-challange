import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="bg-gray-200 ">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;

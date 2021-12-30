import "./App.css";
import AllArticles from "./component/AllArticles/AllArticles";
import { Header } from "./component/Header/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;

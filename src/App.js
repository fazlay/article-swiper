import "./App.css";
import AllArticles from "./component/AllArticles/AllArticles";
import Footer from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import HereoSection from "./component/HeroSection/HereoSection";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HereoSection></HereoSection>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;

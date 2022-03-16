import "./App.css";
import Footer from "./Footer";
import Projects from "./components/Projects";
import Me from "./components/Me";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App(props) {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route path="/" exact component={Me} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./Footer";
import Projects from "./Projects";
import Me from "./Me";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Route, Switch } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route path="/" exact component={Me} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;

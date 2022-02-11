import "./App.css";
import Footer from "./Footer";
import Projects from "./Projects";
import Me from "./Me";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="main-container">
      <Link to="/">
        <img alt="site logo" id="logo" src="/logo.png" />
      </Link>
      <Header />
      <Switch>
        <Route path="/" exact component={Me} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="main-container">
//         <div className="App-header">
//           <Header />
//         </div>
//         <div className="App-main">
//           <Me />
//         </div>
//         <div className="App-about">
//           <About />
//         </div>
//         <div className="App-projects">
//           <Projects />
//         </div>
//         <div className="App-footer">
//           <Footer />
//         </div>
//         <div className="App-sidebar">
//           <Sidebar />
//         </div>
//       </div>
//     </Router>
//   );
// }

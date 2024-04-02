import "./App.css";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./assets/scss/custom.scss";
import SiteRouter from "./Components/Route/Router";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <SiteRouter />
      </Router>
    </div>
  );
}

export default App;

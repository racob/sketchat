import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatRoom from "./views/ChatRoom";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId/:username" component={ChatRoom} />
      </Switch>
    </Router>
  );
}

export default App;

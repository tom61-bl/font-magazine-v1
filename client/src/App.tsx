/**
 * 活字标本室：以可操作的标本册承载阅读，路由挂在仓库的 base 路径下。
 */
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Contribute from "./pages/Contribute";
import Glossary from "./pages/Glossary";
import Home from "./pages/Home";
import LatinTypography from "./pages/LatinTypography";
import LearningPath from "./pages/LearningPath";
import NotFound from "./pages/NotFound";
import Pairing from "./pages/Pairing";
import Quiz from "./pages/Quiz";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <ErrorBoundary>
      <Router base={base}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/latin" component={LatinTypography} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/pairing" component={Pairing} />
          <Route path="/learn" component={LearningPath} />
          <Route path="/glossary" component={Glossary} />
          <Route path="/contribute" component={Contribute} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

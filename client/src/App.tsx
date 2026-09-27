/**
 * 活字标本室设计契约：以可操作的标本册而非居中式 SaaS 落地页承载产品体验。
 */
import { Toaster } from "@/components/ui/sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Contribute from "./pages/Contribute";
import Glossary from "./pages/Glossary";
import Home from "./pages/Home";
import LatinTypography from "./pages/LatinTypography";
import LearningPath from "./pages/LearningPath";
import Pairing from "./pages/Pairing";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/latin" component={LatinTypography} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/pairing" component={Pairing} />
        <Route path="/learn" component={LearningPath} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/contribute" component={Contribute} />
        <Route component={Home} />
      </Switch>
      <Toaster position="bottom-right" richColors />
    </ErrorBoundary>
  );
}

export default App;

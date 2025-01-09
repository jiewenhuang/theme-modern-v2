import { LocationProvider, ErrorBoundary, Route, Router } from "preact-iso";
import Home from "@/preact/page/home";
import NotFound from "@/preact/page/error/404";

const AppRouter = () => {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
};

export default AppRouter;

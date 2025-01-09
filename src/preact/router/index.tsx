import { LocationProvider, ErrorBoundary, Route, Router } from "preact-iso";
import Home from "@/preact/page/home";
import Post from "@/preact/page/posts/post.tsx";
import NotFound from "@/preact/page/error/404";

const AppRouter = () => {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
          <Route path="/archives/:slug" component={Post} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
};

export default AppRouter;

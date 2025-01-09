import { LocationProvider, ErrorBoundary, Route, Router, lazy } from "preact-iso";
// import Home from "@/preact/page/home";
// import Post from "@/preact/page/posts/post.tsx";
// import NotFound from "@/preact/page/error/404";

const Home = lazy(() => import("@/preact/page/home/home.tsx"));
const Post = lazy(() => import("@/preact/page/posts/post.tsx"));
const NotFound = lazy(() => import("@/preact/page/error/404.tsx"));

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

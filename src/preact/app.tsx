import { render } from "preact";
import "./index.scss";

import { Layout } from "@/preact/layout";

import { Suspense, lazy } from "preact/compat";

const AppRouter = lazy(() => import("@/preact/router/index.tsx"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </Layout>
  );
};
render(<App />, document.getElementById("app")!);

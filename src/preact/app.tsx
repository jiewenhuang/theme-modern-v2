import { render } from "preact";

import { Layout } from "@/preact/layout";
//可用
// import { Suspense, lazy } from "preact/compat";

import AppRouter from "@/preact/router";

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};
render(<App />, document.getElementById("app")!);

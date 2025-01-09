import { useState } from "preact/hooks";
import preactLogo from "@/preact/assets/preact.svg";
import "@/preact/app.scss";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-center">
        <a href="https://www.halo.run" target="_blank">
          <img
            src="https://www.halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png"
            class="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1 className="text-green-600">Halo + Vite + Preact</h1>
      <div class="card">
        <span className="iconify mdi-light--home !size-10"></span>
        <button className="btn btn-primary btn-active" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>

        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{" "}
        <a href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app" target="_blank">
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">Click on the Vite and Preact logos to learn more</p>
    </>
  );
};
export default Home;

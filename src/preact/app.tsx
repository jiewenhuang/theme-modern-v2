import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";
import { Button } from "@/components/ui/button";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex'>
        <a href="https://www.halo.run" target="_blank">
          <img src='https://www.halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png' class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1 className="text-green-600">Vite + Preact</h1>
      <div class="card">
        <span className="iconify mdi-light--home !size-10"></span>

        <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
          <span className="icon-[icon-park--add-web]"></span>
          count is: {count}
        </Button>
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
}

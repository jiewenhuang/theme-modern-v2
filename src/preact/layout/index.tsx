import React from "preact/compat";
import { useState } from "preact/hooks";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useState("light");
  const changeColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <div className={`w-full font-sans dark:bg-orange-600 ${colorScheme}`}>
      <main className={"mx-auto"}>{children}</main>
      <button className="btn btn-warning" onClick={changeColorScheme}>
        change color scheme
      </button>
    </div>
  );
};
export { Layout };

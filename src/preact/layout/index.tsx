import React from "preact/compat";
import { useState } from "preact/hooks";
import { useColorScheme } from "@/preact/hooks/useColorScheme.ts";

type Props = {
  children: React.ReactNode;
};
type ColorSchemeType = "light" | "dark" | "system";

const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState<ColorSchemeType>();
  const { setColorScheme } = useColorScheme("light", true);
  const changeColorScheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setColorScheme(newTheme);
  };

  return (
    <>
      <div className="fixed -top-1/2 -left-1/2 -z-50 h-[200%] w-[200%] -rotate-1 bg-[#f5f5f7] object-cover dark:bg-[#000]"></div>

      <div className={`flex w-full flex-col items-center overflow-x-hidden font-sans`}>
        <main className={"mx-auto flex flex-col items-center"}>{children}</main>
        <button className="btn btn-warning" onClick={changeColorScheme}>
          change color scheme
        </button>
      </div>
    </>
  );
};
export { Layout };

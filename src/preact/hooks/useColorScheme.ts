import { useEffect, useState } from "preact/hooks";

// 定义类型
type ColorSchemeType = "light" | "dark" | "system";

export function useColorScheme(defaultColorScheme: ColorSchemeType = "light", enableChangeColorScheme: boolean = true) {
  const [colorScheme, setColorSchemeState] = useState<ColorSchemeType>(
    () => (enableChangeColorScheme && (localStorage.getItem("color-scheme") as ColorSchemeType)) || defaultColorScheme,
  );

  // 初始化时设置颜色模式
  useEffect(() => {
    setColorScheme(colorScheme, false);
  }, [colorScheme]);

  // 切换颜色模式
  const setColorScheme = (newColorScheme: ColorSchemeType, store: boolean = true) => {
    if (newColorScheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
      document.documentElement.classList.remove(prefersDark ? "light" : "dark");
    } else {
      document.documentElement.classList.add(newColorScheme);
      document.documentElement.classList.remove(newColorScheme === "dark" ? "light" : "dark");
    }

    if (store) {
      localStorage.setItem("color-scheme", newColorScheme);
    }

    setColorSchemeState(newColorScheme);
  };

  // 监听系统颜色模式的变化
  useEffect(() => {
    if (colorScheme === "system") {
      const handleSystemColorSchemeChange = (e: MediaQueryListEvent) => {
        const prefersDark = e.matches;
        document.documentElement.classList.add(prefersDark ? "dark" : "light");
        document.documentElement.classList.remove(prefersDark ? "light" : "dark");
      };

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", handleSystemColorSchemeChange);

      // 清理事件监听
      return () => mediaQuery.removeEventListener("change", handleSystemColorSchemeChange);
    }
  }, [colorScheme]);

  return {
    colorScheme,
    setColorScheme,
  };
}

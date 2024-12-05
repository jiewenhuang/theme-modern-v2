# Theme Modern v2

一个集成了现代前端技术栈的 Halo 2.0 的主题开发模板。

主题开发文档可查阅：<https://docs.halo.run/2.0.0-SNAPSHOT/developer-guide/theme/prepare>

## 特性

- 使用 [Vite](https://vitejs.dev/) 进行静态资源构建。
- 使用 [Tailwind CSS](https://tailwindcss.com/) 进行样式开发。
- 使用 [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) 作为内容样式。
- 使用 [Iconify](https://iconify.design/) + [@iconify/tailwind](https://iconify.design/docs/usage/css/tailwind/#installation) 作为图标方案。
~~集成了 [Alpine.js](https://alpinejs.dev/)。~~(此项选填)
- 集成了 [Preact](https://preactjs.com/)。
- 集成了 ESLint + Prettier。

## 开发

```bash
git clone git@github.com:jiewenhuang/theme-modern-v2.git ~/halo2-dev/themes/theme-modern-v2
```

```bash
cd ~/halo2-dev/themes/theme-modern-v2
```

```bash
bun install
```

```bash
bun run dev
```
```bash
bun run build
```
### 注
- 本项目使用了`bun`作为脚手架工具，你可以在[这里](https://bun.sh/)查看更多关于`bun`的信息。
- 本地开发可以记得设置开启开发者模式。

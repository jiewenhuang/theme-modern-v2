import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // 应用于所有文件的基础设置
    {
        files: ["./src/**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },

    // Prettier 插件的设置
    {
        files: ["./src/**/*.{ts,tsx,js,jsx}"],
        plugins: { prettier: prettierPlugin },
        rules: {
            "prettier/prettier": "error",
        },
    },

    // eslint-config-prettier 配置
    ...Object.entries(eslintConfigPrettier.rules || {}).map(([rule, value]) => ({
        files: ["./src/**/*.{ts,tsx,js,jsx}"],
        rules: {
            [rule]: value,
        },
    })),
];
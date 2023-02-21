import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [
        laravel.default({
            input: ["resources/scss/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
        svelte(),
    ],
    resolve: {
        alias: {
            "~bootstrap": "bootstrap",
            "../../node_modules/bootstrap": "bootstrap",
        },
    },
});

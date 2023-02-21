import "../scss/app.scss";
import "./bootstrap";
import "@tabler/core/src/js/tabler";
import { createInertiaApp } from "@inertiajs/svelte";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.svelte", { eager: true });
        return pages[`./Pages/${name}.svelte`];
    },
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
});

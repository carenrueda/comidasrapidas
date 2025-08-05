import { createRouter, createWebHistory } from "vue-router";
import presentacion from "../components/presentacion.vue";
import perrossalchi from "../components/perrossalchi.vue";
import hamburguesas from "../components/hamburguesas.vue";
import bebidas from "../components/bebidas.vue";
import comidasextras from "../components/comidasextras.vue";
import Cart from "../components/Cart.vue";

const routes = [
{ path: "/", component: presentacion },
{ path: "/perrossalchi", component: perrossalchi },
{ path: "/hamburguesas", component: hamburguesas },
{ path: "/comidasextras", component: comidasextras },
{ path: "/bebidas", component: bebidas },
{ path: "/cart", component: Cart }
];

export const router = createRouter({
history: createWebHistory(),
routes
});

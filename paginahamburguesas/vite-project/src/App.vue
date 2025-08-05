<template>
  <q-layout view="hHh lpR fFf" style="background: white;">
    <q-header elevated style="background: linear-gradient(90deg, #3498db 0%, #e74c3c 50%, #f1c40f 100%);">
      <q-toolbar style="min-height: 70px;">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        
        <q-space />

        <q-btn 
          fab 
          color="primary" 
          icon="shopping_cart" 
          @click="$router.push('/cart')"
          class="q-mr-md"
        >
          <q-badge color="red" floating>{{ cartTotalItems }}</q-badge>
        </q-btn>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Presentacion" />
        <q-route-tab to="/hamburguesas" label="Hamburguesas" />
        <q-route-tab to="/perrossalchi" label="Perros Salchichas" />
        <q-route-tab to="/bebidas" label="Bebidas" />
        <q-route-tab to="/comidasextras" label="Comidas Extras" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, provide } from 'vue';

export default {
  setup() {
    // Estado global del carrito
    const cart = ref([]);
    const customer = ref({
      name: '',
      phone: '',
      address: ''
    });
    const deliveryOption = ref('local');

    // Proveer el estado a los componentes hijos
    provide('cart', cart);
    provide('customer', customer);
    provide('deliveryOption', deliveryOption);

    // Computar el total de items en el carrito
    const cartTotalItems = computed(() => {
      return cart.value.reduce((sum, item) => sum + item.quantity, 0);
    });

    return {
      cartTotalItems
    };
  }
}
</script>

<style>
body, html, #q-app {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.q-header {
  background: linear-gradient(90deg, #3498db 0%, #e74c3c 50%, #f1c40f 100%) !important;
}

.q-tabs {
  background: transparent !important;
}
</style>

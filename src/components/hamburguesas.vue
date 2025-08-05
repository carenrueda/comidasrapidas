<template>
  <div class="q-pa-md">
    <h2 class="text-h4 text-weight-bold text-center q-mb-lg">NUESTRAS BEBIDAS</h2>
    <q-separator color="primary" inset class="q-mx-auto q-mb-xl" style="width: 120px; height: 3px;" />

    <div class="row justify-center q-col-gutter-lg">
      <div class="col-12 col-sm-6 col-md-4" v-for="(burger, index) in burgers" :key="index">
        <q-card class="burger-card">
          <q-img :src="burger.image" style="height: 220px;" />
          
          <q-card-section>
            <div class="text-h6 text-weight-bold">{{ burger.name }}</div>
            <div class="text-h6 text-primary q-mt-sm">${{ formatPrice(burger.price) }}</div>
            <div class="text-caption text-grey q-mt-sm">{{ burger.description }}</div>
          </q-card-section>

          <q-card-actions class="q-px-md q-pb-md">
            <q-btn 
              color="primary" 
              label="Agregar al pedido" 
              @click="addToCart(burger)"
              class="full-width"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const cart = inject('cart');

const burgers = ref([
  {
    id: 1,
    name: 'Hamburguesa Clásica',
    price: 12000,
    description: 'Carne 100% res, queso, lechuga, tomate y salsas',
    image: 'img/bebida1.png'
  },
  {
    id: 2,
    name: 'Hamburguesa BBQ',
    price: 15000,
    description: 'Carne, queso cheddar, cebolla crispy y salsa BBQ',
    image: 'img/bebida2.png'
  },
  {
    id: 3,
    name: 'Hamburguesa Doble',
    price: 18000,
    description: 'Doble carne, doble queso, tocineta y vegetales',
    image: 'img/bebida3.png'
  },
  {
    id: 4,
    name: 'Hamburguesa Pollo',
    price: 13000,
    description: 'Pechuga de pollo empanizada, lechuga y salsa especial',
    image: 'img/bebida4.png'
  },
  {
    id: 5,
    name: 'Hamburguesa Vegetariana',
    price: 14000,
    description: 'Vegetales frescos, queso y hamburguesa de garbanzos',
    image: 'img/bebida5.png'
  },
  {
    id: 6,
    name: 'Hamburguesa Especial',
    price: 20000,
    description: 'Carne angus, queso azul, hongos y salsa de la casa',
    image: 'img/bebida6.png'
  }
]);

const formatPrice = (price) => {
  return price.toLocaleString('es-CO');
};

const addToCart = (burger) => {
  const existingItem = cart.value.find(item => item.id == burger.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({
      ...burger,
      quantity: 1
    });
  }
  
  $q.notify({
    message: `${burger.name} agregada al pedido`,
    color: 'positive',
    position: 'top'
  });
};
</script>

<style scoped>
.burger-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  max-width: 240px; 
  margin: 0 auto;
}

.burger-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}


.q-card__section {
  padding: 16px;
}


.q-card__actions {
  padding: 0 16px 16px;
}


@media (max-width: 600px) {
  .burger-card {
    max-width: 220px; 
  }
}
</style>







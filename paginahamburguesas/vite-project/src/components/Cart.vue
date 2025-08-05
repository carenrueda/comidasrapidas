<template>
  <div class="q-pa-md">
    <h2 class="text-h4 text-weight-bold text-center q-mb-lg">TU CARRITO DE COMPRAS</h2>
    <q-separator color="primary" inset class="q-mx-auto q-mb-xl" style="width: 120px; height: 3px;" />

    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step name="first" title="Resumen" icon="shopping_cart">
        <q-list bordered separator>
          <q-item v-for="(item, index) in cart" :key="index">
            <q-item-section avatar>
              <q-img :src="item.image" style="width: 50px; height: 50px;" />
            </q-item-section>
            
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
              <q-item-label caption>
                ${{ formatPrice(item.price) }} c/u
              </q-item-label>
            </q-item-section>
            
            <q-item-section side top>
              <div class="row items-center no-wrap">
                <q-btn 
                  round 
                  dense 
                  flat 
                  icon="remove" 
                  @click="updateQuantity(index, -1)"
                  :disable="item.quantity <= 1"
                />
                <div class="q-mx-sm">{{ item.quantity }}</div>
                <q-btn 
                  round 
                  dense 
                  flat 
                  icon="add" 
                  @click="updateQuantity(index, 1)"
                />
              </div>
            </q-item-section>
            
            <q-item-section side>
              <div class="text-h6">${{ formatPrice(item.price * item.quantity) }}</div>
            </q-item-section>
            
            <q-item-section side>
              <q-btn 
                icon="delete" 
                color="negative" 
                flat 
                round 
                @click="removeFromCart(index)"
              />
            </q-item-section>
          </q-item>
        </q-list>

        <div class="text-h6 text-right q-mt-md">
          Total: ${{ formatPrice(total) }}
        </div>

        <div class="row justify-between q-mt-lg">
          <q-btn label="Seguir comprando" color="primary" flat @click="$router.go(-1)" />
          <q-btn label="Continuar" color="primary" @click="step = 'second'" />
        </div>
      </q-step>

      <q-step name="second" title="Datos" icon="person">
        <q-form @submit.prevent="step = 'third'" class="q-gutter-md">
          <q-input
            v-model="customer.name"
            label="Nombre completo*"
            outlined
            lazy-rules
            :rules="[val => !!val || 'Campo obligatorio']"
          />

          <q-input
            v-model="customer.phone"
            label="Teléfono* (10 dígitos)"
            outlined
            mask="##########"
            lazy-rules
            :rules="[
              val => !!val || 'Campo obligatorio',
              val => val.length == 10 || 'Debe tener 10 dígitos'
            ]"
          />

          <div class="q-mb-md">
            <div class="text-caption text-grey q-mb-sm">Tipo de entrega*</div>
            <div class="row q-gutter-sm">
              <q-btn
                :color="deliveryOption == 'local' ? 'primary' : 'grey-4'"
                :text-color="deliveryOption == 'local' ? 'white' : 'dark'"
                label="Comer en el local"
                @click="deliveryOption = 'local'"
                outline
              />
              <q-btn
                :color="deliveryOption == 'domicilio' ? 'primary' : 'grey-4'"
                :text-color="deliveryOption == 'domicilio' ? 'white' : 'dark'"
                label="Envío a domicilio"
                @click="deliveryOption = 'domicilio'"
                outline
              />
            </div>
          </div>

          <q-input
            v-if="deliveryOption == 'domicilio'"
            v-model="customer.address"
            label="Dirección completa*"
            outlined
            type="textarea"
            lazy-rules
            :rules="[
              val => deliveryOption !== 'domicilio' || !!val || 'Dirección requerida para envío'
            ]"
          />

          <div class="row justify-between q-mt-lg">
            <q-btn label="Atrás" color="primary" flat @click="step = 'first'" />
            <q-btn label="Continuar" type="submit" color="primary" />
          </div>
        </q-form>
      </q-step>

      <q-step name="third" title="Confirmación" icon="receipt">
        <div class="text-h6 q-mb-md">Resumen del Pedido</div>
        
        <div class="q-pa-md border rounded-borders">
          <div class="text-subtitle1 text-weight-bold">Datos del Cliente:</div>
          <div>Nombre: {{ customer.name }}</div>
          <div>Teléfono: {{ customer.phone }}</div>
          <div>Tipo de entrega: {{ deliveryOption == 'local' ? 'Comer en el local' : 'Envío a domicilio' }}</div>
          <div v-if="deliveryOption == 'domicilio'">Dirección: {{ customer.address }}</div>
          
          <q-separator class="q-my-md" />
          
          <div class="text-subtitle1 text-weight-bold">Productos:</div>
          <q-list dense>
            <q-item v-for="(item, index) in cart" :key="index">
              <q-item-section>
                {{ item.quantity }} x {{ item.name }}
              </q-item-section>
              <q-item-section side>
                ${{ formatPrice(item.price * item.quantity) }}
              </q-item-section>
            </q-item>
          </q-list>
          
          <q-separator class="q-my-md" />
          
          <div class="row justify-between text-h6">
            <div>Total a pagar:</div>
            <div>${{ formatPrice(total) }}</div>
          </div>
        </div>

        <div class="row justify-between q-mt-lg">
          <q-btn label="Atrás" color="primary" flat @click="step = 'second'" />
          <q-btn 
            label="Confirmar y Generar Factura" 
            color="primary" 
            @click="generateInvoice"
          />
        </div>
      </q-step>
    </q-stepper>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { useQuasar } from 'quasar';
import { jsPDF } from 'jspdf';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

// Inyectar el estado global
const cart = inject('cart');
const customer = inject('customer');
const deliveryOption = inject('deliveryOption');

const step = ref('first');

const formatPrice = (price) => {
  return price.toLocaleString('es-CO');
};

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const updateQuantity = (index, change) => {
  const newQuantity = cart.value[index].quantity + change;
  if (newQuantity > 0) {
    cart.value[index].quantity = newQuantity;
  }
};

const removeFromCart = (index) => {
  cart.value.splice(index, 1);
  $q.notify({
    message: 'Producto eliminado del pedido',
    color: 'info',
    position: 'top'
  });
};

const generateInvoice = () => {
  if (cart.value.length == 0) {
    $q.notify({
      message: 'No hay productos en el pedido',
      color: 'negative'
    });
    return;
  }

  if (!customer.value.name || !customer.value.phone) {
    $q.notify({
      message: 'Complete los datos del cliente',
      color: 'negative'
    });
    step.value = 'second';
    return;
  }

  if (deliveryOption.value == 'domicilio' && !customer.value.address) {
    $q.notify({
      message: 'Por favor ingresa tu dirección para el envío',
      color: 'negative'
    });
    return;
  }

  const doc = new jsPDF();
  
  doc.setFontSize(20);
  doc.setTextColor(40, 40, 40);
  doc.text('LA COCINA DE CARELA', 105, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.text('NIT: 123456789-1', 105, 28, { align: 'center' });
  doc.text('Tel: 311-245-4567', 105, 34, { align: 'center' });
  
  doc.setFontSize(16);
  doc.text('FACTURA DE VENTA', 105, 45, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text(`Cliente: ${customer.value.name}`, 15, 60);
  doc.text(`Teléfono: ${customer.value.phone}`, 15, 68);
  doc.text(`Tipo de entrega: ${deliveryOption.value == 'local' ? 'Comer en el local' : 'Envío a domicilio'}`, 15, 76);
  if (deliveryOption.value == 'domicilio') {
    doc.text(`Dirección: ${customer.value.address}`, 15, 84);
  }
  
  const now = new Date();
  doc.text(`Fecha: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`, 15, 92);
  
  doc.setFontSize(14);
  doc.text('Detalle del Pedido:', 15, 105);
  
  let y = 115;
  doc.setFontSize(12);
  cart.value.forEach(item => {
    doc.text(`${item.quantity} x ${item.name}`, 20, y);
    doc.text(`$${formatPrice(item.price * item.quantity)}`, 180, y, { align: 'right' });
    y += 8;
  });
  
  doc.setFontSize(14);
  doc.text('Total:', 150, y + 10);
  doc.text(`$${formatPrice(total.value)}`, 180, y + 10, { align: 'right' });

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('¡Gracias por su compra!', 105, 280, { align: 'center' });
  
  const fileName = `factura_${customer.value.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  doc.save(fileName);
  
  $q.notify({
    message: 'Factura generada con éxito',
    color: 'positive',
    icon: 'check_circle'
  });

  cart.value = [];
  customer.value = { name: '', phone: '', address: '' };
  deliveryOption.value = 'local';
  router.push('/');
};
</script>

<style scoped>
.border {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.q-stepper {
  box-shadow: none;
}

.q-step {
  min-height: 400px;
}

.q-btn--outline {
  border: 1px solid currentColor;
}
</style>
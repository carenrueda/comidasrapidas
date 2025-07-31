<template>
  <div class="q-pa-md full-width">
    <div class="row no-wrap justify-center q-mb-md" style="width: fit-content; margin: 0 auto;">
      <!-- Card 1 -->
      <div class="col-auto q-mx-md">
        <q-card flat bordered class="clean-card">
          <q-img src="img/hamburguesasen.png" style="height: 220px; width: 320px;" />
          <q-card-section class="q-pt-sm q-pb-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Café Basilico</div>
              <div class="col-auto">
                <q-rating v-model="rating1" :max="5" size="24px" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none q-pb-sm">
            <div class="text-subtitle2 text-weight-medium">$・Italian, Cafe</div>
            <div class="text-caption text-grey q-mt-xs">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Card 2 -->
      <div class="col-auto q-mx-md">
        <q-card flat bordered class="clean-card">
          <q-img src="img/tu_imagen2.jpg" style="height: 220px; width: 320px;" />
          <q-card-section class="q-pt-sm q-pb-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Restaurante 2</div>
              <div class="col-auto">
                <q-rating v-model="rating2" :max="5" size="24px" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none q-pb-sm">
            <div class="text-subtitle2 text-weight-medium">$$・Mexican</div>
            <div class="text-caption text-grey q-mt-xs">
              Authentic Mexican cuisine with fresh ingredients.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-auto q-mx-md">
        <q-card flat bordered class="clean-card">
          <q-img src="img/tu_imagen3.jpg" style="height: 220px; width: 320px;" />
          <q-card-section class="q-pt-sm q-pb-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Restaurante 3</div>
              <div class="col-auto">
                <q-rating v-model="rating3" :max="5" size="24px" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none q-pb-sm">
            <div class="text-subtitle2 text-weight-medium">$$$・Japanese</div>
            <div class="text-caption text-grey q-mt-xs">
              Traditional Japanese dishes prepared by master chefs.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>


    <div class="row no-wrap justify-center" style="width: fit-content; margin: 0 auto;">

      <div class="col-auto q-mx-md">
        <q-card flat bordered class="clean-card">
          <q-img src="img/aguaMinerall.png" style="height: 220px; width: 320px;" />
          <q-card-section class="q-pt-sm q-pb-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Restaurante 4</div>
              <div class="col-auto">
                <q-rating v-model="rating4" :max="5" size="24px" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none q-pb-sm">
            <div class="text-subtitle2 text-weight-medium">$・Fast Food</div>
            <div class="text-caption text-grey q-mt-xs">
              Quick and delicious meals for busy people.
            </div>
          </q-card-section>
        </q-card>
      </div>


      <div class="col-auto q-mx-md">
        <q-card flat bordered class="clean-card">
          <q-img src="img/tu_imagen5.jpg" style="height: 220px; width: 320px;" />
          <q-card-section class="q-pt-sm q-pb-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Restaurante 5</div>
              <div class="col-auto">
                <q-rating v-model="rating5" :max="5" size="24px" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none q-pb-sm">
            <div class="text-subtitle2 text-weight-medium">$$・Vegetarian</div>
            <div class="text-caption text-grey q-mt-xs">
              Healthy and delicious plant-based meals.
            </div>
          </q-card-section>
        </q-card>
      </div>


      <div class="col-auto q-mx-md">
        <q-card flat bordered class="clean-card">
          <q-img src="img/tu_imagen6.jpg" style="height: 220px; width: 320px;" />
          <q-card-section class="q-pt-sm q-pb-xs">
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Restaurante 6</div>
              <div class="col-auto">
                <q-rating v-model="rating6" :max="5" size="24px" />
              </div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none q-pb-sm">
            <div class="text-subtitle2 text-weight-medium">$$$・Seafood</div>
            <div class="text-caption text-grey q-mt-xs">
              Fresh seafood dishes from local fishermen.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rating1 = ref(4)
const rating2 = ref(4)
const rating3 = ref(4)
const rating4 = ref(4)
const rating5 = ref(4)
const rating6 = ref(4)
</script>

<style scoped>
.clean-card {
  width: 320px;
  min-height: 0;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.clean-card .q-img {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.text-subtitle2 {
  font-size: 0.9rem;
}

.full-width {
  width: 100%;
  overflow-x: hidden;
}

.q-mb-md {
  margin-bottom: 24px;
}
</style>
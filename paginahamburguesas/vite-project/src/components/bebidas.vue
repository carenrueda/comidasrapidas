<template>
    <div class="q-pa-md">
        <div class="row q-col-gutter-md justify-center">
            <div class="col-12 col-md-4 flex flex-center" v-for="n in 3" :key="n">
                <q-card flat bordered class="enlarged-card">
                    <q-img src="/img/aguaMineral.png" style="height: 200px;  object-fit: cover;"    />

                    <q-card-section>
                        <q-btn fab mini color="primary" icon="place" class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);" />

                        <div class="row no-wrap items-center">
                            <div class="col text-h6 ellipsis">
                                Cafe Basilico
                            </div>
                            <div class="col-auto text-grey text-caption q-pt-xs row no-wrap items-center">
                                <q-icon name="place" size="18px" />
                                <span class="q-ml-xs">250 ft</span>
                            </div>
                        </div>

                        <q-rating v-model="stars[n - 1]" :max="5" size="22px" />
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="text-caption text-weight-medium text-h7">
                            $・Italian, Cafe
                        </div>
                        <div class="text-caption text-grey">
                            Small plates, salads & sandwiches in an intimate setting with outdoor seating.
                        </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions>
                        <q-btn flat round icon="event" size="md" />
                        <q-btn flat color="primary" size="md">
                            Reserve
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>

        <div class="row q-col-gutter-md justify-center q-mt-md">

            <div class="col-12 col-md-4 flex flex-center" v-for="n in 3" :key="n + 3">
                <q-card flat bordered class="enlarged-card">
                    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" style="height: 200px;" />

                    <q-card-section>
                        <q-btn fab mini color="primary" icon="place" class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);" />

                        <div class="row no-wrap items-center">
                            <div class="col text-h6 ellipsis">
                                Cafe Basilico
                            </div>
                            <div class="col-auto text-grey text-caption q-pt-xs row no-wrap items-center">
                                <q-icon name="place" size="18px" />
                                <span class="q-ml-xs">250 ft</span>
                            </div>
                        </div>

                        <q-rating v-model="stars[n + 2]" :max="5" size="22px" />
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="text-caption text-weight-medium text-h7">
                            $・Italian, Cafe
                        </div>
                        <div class="text-caption text-grey">
                            Small plates, salads & sandwiches in an intimate setting with outdoor seating.
                        </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions>
                        <q-btn flat round icon="event" size="md" />
                        <q-btn flat color="primary" size="md">
                            Reserve
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const stars = ref(Array(6).fill(0))
</script>

<style scoped>
.enlarged-card {
    width: 100%;
    max-width: 500px;
    min-height: 400px;
    border-radius: 12px;

}

.text-h7 {
    font-size: 1.1rem;
}
</style>
<template>
    <q-page class="bg-grey-1">

        <div class="hero-banner row items-center justify-center text-center text-white q-pa-lg"
            style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://cdn.quasar.dev/img/food-bg.jpg') center/cover; height: 40vh;">
            <div class="col-12">
                <h1 class="text-h3 text-weight-bold q-mb-sm">LA COCINA DE CARELA</h1>
                <p class="text-h5">Sabores que enamoran desde 2019</p>
            </div>
        </div>


        <div class="info-section q-pa-xl">
            <div class="row justify-center q-col-gutter-xl">

                <div class="col-12 col-md-5">
                    <q-card flat class="info-card q-pa-md">
                        <div class="row items-center q-mb-md">
                            <q-icon name="schedule" size="md" color="primary" class="q-mr-sm" />
                            <h2 class="text-h5 text-weight-bold q-ma-none">HORARIO</h2>
                        </div>
                        <q-separator class="q-mb-md" />
                        <div class="text-body1 q-mb-xs">
                            <strong>Lunes a Domingo:</strong> 6:00 PM - 11:00 PM
                        </div>
                        <div class="text-body1">
                            <strong>Servicio:</strong> Domicilio y Recoge en local
                        </div>
                    </q-card>
                </div>


                <div class="col-12 col-md-5">
                    <q-card flat class="info-card q-pa-md">
                        <div class="row items-center q-mb-md">
                            <q-icon name="contact_phone" size="md" color="primary" class="q-mr-sm" />
                            <h2 class="text-h5 text-weight-bold q-ma-none">CONTACTO</h2>
                        </div>
                        <q-separator class="q-mb-md" />
                        <div class="text-body1 q-mb-xs">
                            <q-icon name="phone" size="sm" class="q-mr-xs" />
                            <strong>Teléfono:</strong> 311-245-4567
                        </div>
                        <div class="text-body1">
                            <q-icon name="whatsapp" size="sm" color="green" class="q-mr-xs" />
                            <strong>WhatsApp:</strong> 315-987-6543
                        </div>
                    </q-card>
                </div>
            </div>
        </div>


        <div class="categories-section q-px-xl q-pb-xl">
            <h2 class="text-h4 text-weight-bold text-center q-mb-lg">NUESTRAS ESPECIALIDADES</h2>
            <q-separator color="primary" inset class="q-mx-auto q-mb-xl" style="width: 120px; height: 3px;" />

            <div class="row q-col-gutter-lg justify-center">
                <div class="col-12 col-sm-6 col-md-3" v-for="(category, index) in categories" :key="index">
                    <q-card class="category-card" flat bordered @click="$router.push(category.route)">
                        <q-img :src="category.image"
                            style="height: 320px; object-fit: contain; padding: 15px; background-color: white;" />
                        <q-card-section class="text-center">
                            <div class="text-h6 text-weight-bold">{{ category.label }}</div>
                            <q-btn flat color="primary" label="Ver menú" size="15px" no-caps class="q-mt-sm" />
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>


        <div class="cta-section bg-primary text-white text-center q-pa-xl">
            <h2 class="text-h4 text-weight-bold q-mb-md">¿LISTO PARA ORDENAR?</h2>
            <p class="text-h6 q-mb-lg">Disfruta de nuestra deliciosa comida</p>
            <q-btn color="white" text-color="primary" label="Ver menú completo" no-caps size="lg" to="/hamburguesas" />
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                { label: 'Hamburguesas', route: '/hamburguesas', image: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-e50c-61f7-8ff7-f175eb01009e/raw?se=2025-07-31T19%3A46%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=82817f75-b040-5c1c-9132-d6399745a0b5&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-31T00%3A24%3A38Z&ske=2025-08-01T00%3A24%3A38Z&sks=b&skv=2024-08-04&sig=3HORawKOebLY96BEuQtcO6xK2mkDx64RSyLTGv4%2B4CQ%3D' },
                { label: 'Perros & salchipapas', route: '/perrossalchi', image: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f174-61f7-a4ca-54a70242f670/raw?se=2025-07-31T19%3A48%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=492c06e2-a8fd-5073-bd1c-f4b9b2054fb6&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-31T00%3A24%3A41Z&ske=2025-08-01T00%3A24%3A41Z&sks=b&skv=2024-08-04&sig=qeyfnhYhiFWyuhiZvh4qfuFgoOeFMiH3ipy55Hh9js0%3D' },
                { label: 'Bebidas', route: '/bebidas', image: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-d83c-61fd-9f11-7f6cb4b01c25/raw?se=2025-07-31T20%3A00%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=4accbe63-a0bb-547d-8788-49ecffb7a6ec&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-30T23%3A14%3A54Z&ske=2025-07-31T23%3A14%3A54Z&sks=b&skv=2024-08-04&sig=pXuWZrn/BQMvmUP4kpDeOCW6vVLWuwYxyRjHJZ2PAWc%3D' },
                { label: 'comidas extras', route: '/comidasextras', image: 'https://sdmntpreastus.oaiusercontent.com/files/00000000-eac8-61f9-b499-cd94e6d55857/raw?se=2025-07-31T20%3A12%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=2149b0d3-f23b-5c5b-a3d9-c242c9019ab9&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-30T22%3A37%3A29Z&ske=2025-07-31T22%3A37%3A29Z&sks=b&skv=2024-08-04&sig=pIobZ9yg5ZpWh%2BonfJgIs%2BYRRPF5TroxnlVmKtbMPj8%3D' }
            ]
        }
    }
}
</script>

<style scoped>
.hero-banner {
    min-height: 300px;
}

.info-card {
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    height: 100%;
}

.category-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
    cursor: pointer;
}

.category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.cta-section {
    background: linear-gradient(135deg, var(--q-primary) 0%, #c00 100%);
}



</style>
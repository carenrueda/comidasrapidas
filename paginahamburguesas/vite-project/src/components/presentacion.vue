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
                { label: 'Hamburguesas', route: '/hamburguesas', image: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-e50c-61f7-8ff7-f175eb01009e/raw?se=2025-07-31T23%3A07%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=9b782644-d612-58c5-8821-0b3f3c9c7718&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-31T00%3A24%3A45Z&ske=2025-08-01T00%3A24%3A45Z&sks=b&skv=2024-08-04&sig=pIJXPw0GINtiv9iEtTujLX/RfpzTQWFiv/8n5Qdrszo%3D' },
                { label: 'Perros & salchipapas', route: '/perrossalchi', image: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f174-61f7-a4ca-54a70242f670/raw?se=2025-07-31T23%3A07%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=75047872-23ed-5557-9e07-99433e64a5a0&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-30T23%3A15%3A29Z&ske=2025-07-31T23%3A15%3A29Z&sks=b&skv=2024-08-04&sig=MiJTWek1u5C3O5t5PTpvI8TfICJHOdIEkstzMLrsA/0%3D' },
                { label: 'Bebidas', route: '/bebidas', image: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-d83c-61fd-9f11-7f6cb4b01c25/raw?se=2025-07-31T23%3A07%3A47Z&sp=r&sv=2024-08-04&sr=b&scid=530d6a4c-53f0-531e-a5dd-2a13a784ce44&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-30T23%3A14%3A49Z&ske=2025-07-31T23%3A14%3A49Z&sks=b&skv=2024-08-04&sig=plGmZgdOJ2u5IgWCJs1m4D9ikHS7kK90uEio9ITuX6w%3D' },
                { label: 'comidas extras', route: '/comidasextras', image: 'https://sdmntpreastus.oaiusercontent.com/files/00000000-1c80-61f9-919a-e2dbee89c5cb/raw?se=2025-07-31T23%3A30%3A00Z&sp=r&sv=2024-08-04&sr=b&scid=09669764-d5dd-5655-a0af-fe4585f98917&skoid=b64a43d9-3512-45c2-98b4-dea55d094240&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-31T21%3A37%3A34Z&ske=2025-08-01T21%3A37%3A34Z&sks=b&skv=2024-08-04&sig=xAHiUw7i%2BymSh4fQWEVcl/190BMP67OnInB79VSlBJA%3D' }
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
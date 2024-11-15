<template>
  <div>
    <h1>HOME</h1>

    <!-- Si no hay cubos, mostramos un mensaje de carga -->
    <div v-if="cubos.length === 0">Cargando cubos...</div>

    <!-- Usamos el v-for para iterar sobre los cubos y renderizarlos como cartas -->
    <div class="row">
      <div class="col-12 col-md-4" v-for="cubo in cubos" :key="cubo.idCubo">
        <div class="card">
          <img :src="cubo.imagen" class="card-img-top" alt="Imagen del cubo" />
          <div class="card-body">
            <h5 class="card-title">{{ cubo.nombre }}</h5>
            <p class="card-text">Precio: ${{ cubo.precio }}</p>
            <router-link :to="'/detalles/' + cubo.idCubo" class="btn btn-primary mb-3"> Detalles </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "HomeComponent",

    data() {
        return {
            cubos: [],
        }
    },

    mounted() {
        service.getCubos().then((result) => {
            this.cubos = result
        })
    }
}
</script>
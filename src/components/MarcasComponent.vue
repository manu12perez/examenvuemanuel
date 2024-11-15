<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-4" v-for="cubo in cubos" :key="cubo.idCubo">
        <h1>Marcas:{{cubo.marca}}</h1>
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
    name: "MarcasComponent",

    data() {
        return {
            cubos: [],
        }
    },
    
    mounted() {
        let marca = this.$route.params.marca;

        service.findMarca(marca).then(result => {
            console.log(result);
            this.cubos = result;
        })
    },

    watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {

        service.findMarca(nextVal).then((result) => {
          this.cubos = result;
          console.log(result);
        });
      }
    },
  },
}
</script>
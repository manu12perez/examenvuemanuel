<template>
  <div>
    <h1>Detalle del Cubo</h1>

    <!-- Verificamos si el cubo está cargado antes de mostrarlo -->
    <div v-if="cubo.idCubo">
      <div class="card" style="width: 18rem;">
        <img :src="cubo.imagen" class="card-img-top" alt="Imagen del cubo" />
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <p class="card-text"><strong>Modelo:</strong> {{ cubo.modelo }}</p>
          <p class="card-text"><strong>Marca:</strong> {{ cubo.marca }}</p>
          <p class="card-text"><strong>Color:</strong> {{ cubo.color }}</p>
          <p class="card-text"><strong>Valoración:</strong> {{ cubo.valoracion }} estrellas</p>
          <p class="card-text"><strong>Precio:</strong> ${{ cubo.precio }}</p>
          <router-link to="/" class="btn btn-secondary mb-3"> Volver </router-link>
        </div>
      </div>
    </div>

    <!-- Si no hay cubo cargado, mostramos un mensaje de carga -->
    <div v-else>
      Cargando detalles del cubo...
    </div>

    <h2>Comentarios:</h2>
    
    <!-- Mostrar los comentarios si existen -->
    <div v-if="comentarios.length > 0">
      <div v-for="comentario in comentarios" :key="comentario.idComentario" class="comment-card">
        <div class="card mb-3">
          <div class="card-body">
            <p class="card-text">{{ comentario.comentario }}</p>
            <small class="text-muted">Fecha: {{ comentario.fechaComentario }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Si no hay comentarios, mostramos un mensaje -->
    <div v-else>
      <p>No hay comentarios para este cubo.</p>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name: "DetallesComponent",

    data() {
        return {
            cubo: {},
            comentarios: []
        }
    },
    
    mounted() {
        let idCubo = this.$route.params.idCubo;

        service.findCubo(idCubo).then(result => {
            console.log(result);
            this.cubo = result;
        })

        service.getComentarios(idCubo).then(result => {
            console.log(result);
            this.comentarios = result;
        })
    },
}
</script>

<style scoped>
.card {
  margin: 20px auto;
  max-width: 400px;
}

.card-img-top {
  max-height: 300px;
  object-fit: cover;
}
</style>
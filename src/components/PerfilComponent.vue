<template>
  <div>
    <h1>Perfil de Usuario</h1>

    <!-- Mostrar el perfil del usuario en una tabla -->
    <div v-if="usuario.idUsuario">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ usuario.nombre }}</td>
          </tr>
          <tr>
            <td>{{ usuario.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Si no se ha cargado el perfil, mostramos un mensaje -->
    <div v-else>
      Cargando perfil...
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
    nae: "PerfilComponent",

    data() {
        return {
            usuario: {},
        }
    },
    
    mounted() {

        service.getPerfil(this.usuario).then(result => {
            console.log(result);
            this.usuario = result;
        })
    },
}
</script>
<template>
  <div>
    <h1>Registrar Usuario</h1>
    <form v-on:submit.prevent="register()" style="width: 500px; margin: 0 auto">
      <label>Usuario</label>
      <input type="text" v-model="nombre" name="cajausuario" class="form-control" />
      <label>Email</label>
      <input type="text" v-model="email" name="cajaemail" class="form-control" />
      <label>Password</label>
      <input type="text" v-model="pass" name="cajapass" class="form-control" /><br />
      <router-link to="/login" class="btn btn-info mb-3"> Registro </router-link>
    </form>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "RegisterComponent",

    data() {
        return {
            usuario : {}
        }
    },

    methods: {
        register() {
            service.register(this.usuario).then(() => {
                console.log(this.usuario)
            })
        }
    }
}
</script>
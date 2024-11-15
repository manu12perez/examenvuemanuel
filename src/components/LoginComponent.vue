<template>
  <div>
    <h1>Login Usuario</h1>
    <form v-on:submit.prevent="login()" style="width: 500px; margin: 0 auto">
      <label>Email</label>
      <input type="text" v-model="email" name="cajaemail" class="form-control" />
      <label>Password</label>
      <input type="text" v-model="pass" name="cajapass" class="form-control" /><br />
      <button class="btn btn-info"> Login</button>
    </form>
  </div>
</template>

<script>
import Global from '@/Global';
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "LoginComponent",

    data() {
         return {
            usuario: {},
         }
    },

    methods: {
        login() {
            console.log(this.usuario);

            service.login(this.usuario).then(response => {
                Global.token = response.data.response;
                console.log(response.data.response);

                this.$router.push("/perfil" );
            })
        }
    }
}
</script>
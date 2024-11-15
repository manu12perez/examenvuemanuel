<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./../assets/logo.png" style="width:40px; height:40px"/></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/register" class="nav-link"> Registro </router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/login" class="nav-link"> Login </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/marcas/' + marca">{{marca}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "MenuComponent",

    data() {
        return {
            marcas: []
        }
    },

    mounted() {
        service.getMarcas().then(result => {
            console.log(result);
            this.marcas = result;
        })
    }
}
</script>
import { createRouter, createWebHistory } from "vue-router";
import RegisterComponent from '././components/RegisterComponent.vue'
import LoginComponent from '././components/LoginComponent.vue'
import HomeComponent from '././components/HomeComponent.vue'
import DetallesComponent from '././components/DetallesComponent.vue'
import MarcasComponent from '././components/MarcasComponent.vue'
import PerfilComponent from '././components/PerfilComponent.vue'

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/register", component: RegisterComponent },
    { path: "/perfil", component: PerfilComponent },
    { path: "/login", component: LoginComponent },
    { path: "/detalles/:idCubo", component: DetallesComponent },
    { path: "/marcas/:marca", component: MarcasComponent },
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;
import axios from "axios";
import Global from "@/Global";

export default class ServiceCubos {
    register(usuario) {
        return new Promise(function (resolve) {

            let request = "api/Manage/RegistroUsuario";
            let url = Global.urlApiCubos + request;

            axios.post(url, usuario).then(response => {
                console.log(response);
                resolve(response);
            })
        })
    }

    login(usuario) {
        return new Promise(function (resolve) {
            let request = "api/Manage/Login";
            let url = Global.urlApiCubos + request;

            axios.post(url, usuario).then((response) => {
                resolve(response);
            })
        })
    }

    getPerfil(usuario) {
        return new Promise(function (resolve) {
            let request = "api/Manage/PerfilUsuario";
            let url = Global.urlApiCubos + request;

            axios.post(url, usuario).then((response) => {
                resolve(response);
            })
        })
    }

    getCubos() {
        return new Promise(function (resolve) {
            let cubos = [];

            let request = "api/cubos"
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo cubos");
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    findCubo(idCubo) {
        return new Promise(function (resolve) {
            let cubo = {};
            let request = "api/Cubos/" + idCubo;
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo cubos");
                cubo = response.data;
                resolve(cubo);
            })
        })
    }

    getMarcas() {
        return new Promise(function (resolve) {
            let marcas = [];
            let request = "api/Cubos/Marcas";
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo marcas");
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    findMarca(marca) {
        return new Promise(function (resolve) {
            let cubo = {};
            let request = "api/Cubos/CubosMarca/" + marca;
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo marcas");
                cubo = response.data;
                resolve(cubo);
            })
        })
    }

    getComentarios(idCubo) {
        return new Promise(function (resolve) {
            let comentarios = [];
            let request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo comentarios");
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }

    getCompras(){
        return new Promise(function(resolve) {
            let compras = [];
            let request = "api/Compra/ComprasUsuario";
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo compras");
                compras = response.data;
                resolve(compras);
            })

        })
    }
}
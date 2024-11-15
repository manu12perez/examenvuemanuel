<template>
    <div>
        <h1>Compras</h1>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "ComprasComponent",

    data() {
        return {
            compras: [],
        }
    },

    mounted() {
        service.getCompras().then(result => {
            this.compras = result;
        })
    }
}
</script>
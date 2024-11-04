<script setup>
import CardProduct from '@/components/CardProduct.vue';
import LinkReturn from '@/components/LinkReturn.vue';

const props = defineProps(['id']);

const products = {
  1: { name: 'Producto 1', description: 'Descripción del producto 1', price: '$10' },
};

const productData = products[props.id] || { name: 'Que delichus', description: 'plato de comidita', price: '$2.000' };

</script>

<template>
  <div class="container-custom">
    <LinkReturn />
    <CardProduct :product="productData" />
  </div>

</template>
<style scoped>
.container-custom {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

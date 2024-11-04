<script setup>
import CardProduct from '@/components/CardProduct.vue';
import LinkReturn from '@/components/LinkReturn.vue';
</script>

<template>
  <div class="container">
    <LinkReturn />
    <CardProduct />
  </div>

</template>
<style scoped>
.container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script setup>
import CardProduct from '@/components/CardProduct.vue';
import FooterVue from '@/components/FooterVue.vue';
import MediosDePago from '@/components/MediosDePago.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <header>

    <div class="wrapper">
      <NavBar />
      <CardProduct />
      <MediosDePago />
      <FooterVue />
    </div>
  </header>


</template>

<style scoped></style>

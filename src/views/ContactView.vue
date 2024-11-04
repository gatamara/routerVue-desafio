<script setup>
import LinkReturn from '@/components/LinkReturn.vue';
</script>

<template>
  <div class="about">
    <LinkReturn />
    <h1>Contacto</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>

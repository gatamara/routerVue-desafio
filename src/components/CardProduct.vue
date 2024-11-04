<script setup>

defineProps({
  product: {
    type: Object,
    default: () => ({ name: 'Producto no disponible', description: 'plato de comida', price: '$2.000' })
  }
});
</script>

<template>
  <!-- cartas -->
  <section class="container p-4" id="productos">
    <h1 class="text-center">Detalles del Producto</h1>
    <div class="row">
      <div class="col-sm-4 col-12 px-5 mb-4">
        <div class="card">
          <img src="/colaciones.jpg" class="card-img-top" alt="Imagen del producto" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ product.price }}</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

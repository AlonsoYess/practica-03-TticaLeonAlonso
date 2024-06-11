<template>
  <q-page padding>
    <div class="container">
      <h1 class="title">Venta de Productos</h1>

      <div class="search-box">
        <q-input filled v-model="searchTerm" placeholder="Buscar Productos..." class="q-mb-md" />
      </div>

      <div class="row">
        <div v-for="product in filteredProducts" :key="product.id" class="card">
          <q-img :src="product.image" class="card-img-top" :alt="product.name" />
          <q-card-section class="card-body">
            <div class="card-title">{{ product.name }}</div>
            <div class="card-text">{{ product.price }}</div>
          </q-card-section>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      searchTerm: '',
      products: [
        { id: 1, name: 'Product 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
        // Add more products as needed
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.search-box {
  margin-bottom: 20px;
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: calc(33.333% - 20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
  color: #555;
}

.card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .card {
    width: 100%;
  }

  .search-box input {
    width: 80%;
  }
}
</style>

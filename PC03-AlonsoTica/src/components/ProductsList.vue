<template>
  <q-page padding>
    <div class="container">
      <h1 class="title">Los mejores carros de lujo</h1>

      
      <div class="search-box">
        <q-input filled v-model="buscadorProducto" placeholder="Buscar carros..." class="q-mb-md" />
      </div>

      
      <div class="row">
        <div v-for="producto in filtrarProductos" :key="producto.id" class="card" @click="verDetalle(producto)">
          <q-img :src="producto.image" class="card-img-top" :alt="producto.name" />
          <q-card-section class="card-body">
            <div class="card-title">{{ producto.name }}</div>
            <div class="card-text">{{ producto.price }}</div>
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
      buscadorProducto: '', 
      productos: [ 
        { id: 1, name: 'Lamborghini Aventador', price: '$10000.00', image: 'src/assets/imagenes/c1.jpg' },
        { id: 2, name: 'Ferrari 488 GTB', price: '$20000.00', image: 'src/assets/imagenes/c2.jpg' },
        { id: 3, name: 'Rolls-Royce Phantom', price: '$300000.00', image: 'src/assets/imagenes/c3.jpg' },
        { id: 4, name: 'Bugatti Chiron', price: '$952000.00', image: 'src/assets/imagenes/c4.jpg' },
        { id: 5, name: 'McLaren P1', price: '$5550000.00', image: 'src/assets/imagenes/c5.jpg' },
        { id: 6, name: 'Lamborghini Veneno', price: '$9550000.00', image: 'src/assets/imagenes/c6.jpg' },
        { id: 7, name: 'Bentley Continental GT', price: '$120000.00', image: 'src/assets/imagenes/c7.jpg' },
        { id: 8, name: 'Aston Martin DB11', price: '$950000.00', image: 'src/assets/imagenes/c8.jpg' },
        { id: 9, name: 'Porsche 911 Turbo S', price: '$1750000.00', image: 'src/assets/imagenes/c9.jpg' },
        { id: 10, name: 'Mercedes-Benz S-Class Maybach', price: '$9990.00', image: 'src/assets/imagenes/c10.jpg' },
        { id: 11, name: 'Lexus LC 500', price: '$125000.00', image: 'src/assets/imagenes/c11.jpg' },
        { id: 12, name: 'Maserati GranTurismo', price: '$1350000.00', image: 'src/assets/imagenes/c12.jpg' },
        { id: 13, name: 'Jaguar F-Type', price: '$280000.00', image: 'src/assets/imagenes/c13.jpg' },
        { id: 14, name: 'Audi R8', price: '$450000.00', image: 'src/assets/imagenes/c14.jpg' },
      ],
    };
  },
  computed: {
    filtrarProductos() {
      return this.productos.filter(producto =>
        producto.name.toLowerCase().includes(this.buscadorProducto.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
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
  justify-content: center; 
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: calc(33.333% - 20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  margin-bottom: 20px; 
}

.card-img-top {
  width: 100%;
  height: 300px; 
  object-fit: cover;
}

.card-body {
  padding: 15px;
  text-align: center;
  font-weight: bold;
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

@media (max-width: 1024px) {
  .card {
    width: calc(50% - 20px);
  }
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

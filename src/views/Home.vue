<template>
  <div class="home">
    <img src="../assets/logo.png" alt="">
    <div v-if="loading">Cargando...</div>
    <div class="cards">
      <Card
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :titulo="movie.title"
        :director="movie.director"
        :fecha="movie.release_date"
        :score="movie.rt_score"
      />
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState(['movies', 'loading'])
  },
  methods: {
    ...mapActions(['getMovies'])
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<style scoped>
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 10px;
  }
</style>
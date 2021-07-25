<template>
  <div>
    <h1>{{movie.title}}</h1>
    <p>Original Title: {{movie.original_title_romanised}}</p>
    <p>id: {{movie.id}}</p>
    <p>Sinposis: {{movie.description}}</p>
    <p>Director: {{movie.director}}</p>
    <p>Release Date: {{movie.release_date}}</p>
    <p>Duration: {{movie.running_time}}</p>
    <p
      v-if="movie.rt_score > 80"
      class="score--green"
    >
      Score: {{movie.rt_score}}
    </p>
    <p
      v-else
      class="score--yellow"
    >
      Score: {{movie.rt_score}}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Detalle",
  computed: {
    ...mapState(['movie'])
  },
  methods: {
    ...mapActions(['getMovie'])
  },
  created() {
    this.getMovie(this.$route.params.id)
  }
}
</script>

<style scoped>
  .score--green {
    color: green;
  }
  
  .score--yellow {
    color: yellow;
  }
</style>
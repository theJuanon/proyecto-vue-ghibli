<template>
  <div class="details">
    <h1>{{ movie.title }}</h1>
    <p id="original">Original Title: {{ movie.original_title_romanised }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>Release Date: {{ movie.release_date }}</p>
    <p id="sinopsis">Sinposis: {{ movie.description }}</p>
    <p>Duration: {{ movie.running_time }} minutes.</p>
    <p v-if="movie.rt_score > 80" class="score--green">
      Score: {{ movie.rt_score }}
    </p>
    <p v-else class="score--yellow">Score: {{ movie.rt_score }}</p>
    <p>id: {{ movie.id }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Detalle",
  computed: {
    ...mapState(["movie"]),
  },
  methods: {
    ...mapActions(["getMovie"]),
  },
  created() {
    this.getMovie(this.$route.params.id);
  },
};
</script>

<style scoped>
.details {
  margin-top: 71px;
  padding: 10px 300px 0 300px;
  font-size: 18px;
}

h1 {
  color: #623cea;
  font-size: 42px;
  margin-bottom: 0;
}

#original {
  margin-top: 0;
  font-size: 22px;
  font-weight: bold;
  color: #0087B8;
}

#sinopsis {
  font-size: 20px;
}

.score--green {
  color: green;
}

.score--yellow {
  color: yellow;
}
</style>
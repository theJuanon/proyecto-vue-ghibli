<template>
  <div class="details">
    <h1>{{ movie.title }}</h1>
    <p id="original">Original Title: {{ movie.original_title_romanised }}</p>
    <p><span class="prop">Director:</span> {{ movie.director }}</p>
    <p><span class="prop">Release Date:</span> {{ movie.release_date }}</p>
    <h2>Sinopsis:</h2>
    <p id="sinopsis">{{ movie.description }}</p>
    <p><span class="prop">Duration:</span> {{ movie.running_time }} minutes.</p>
    <p v-if="movie.rt_score > 80" class="score--green">
      Score: {{ movie.rt_score }}
    </p>
    <p v-else class="score--yellow">Score: {{ movie.rt_score }}</p>
    <p id="id"><span class="prop">id:</span> {{ movie.id }}</p>
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
  padding: 10px 15% 0 15%;
  font-size: 18px;
}

h1 {
  color: #623cea;
  font-size: 42px;
  margin-bottom: 0;
}

h2 {
  color: #0087B8;
  margin-bottom: 0px;
}

#original {
  margin-top: 0;
  font-size: 22px;
  font-weight: bold;
  color: #0087B8;
}

.prop {
  font-weight: bold;
}

#sinopsis {
  margin-top: 0px;
  font-size: 20px;
}

.score--green {
  color: green;
}

.score--yellow {
  color: yellow;
}

#id {
  margin-top: 40px;
}
</style>
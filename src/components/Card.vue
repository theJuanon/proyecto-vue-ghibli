<template>
  <router-link class="link" :to="`/pelicula/detalle/${id}`">
    <div class="card">
      <h4 class="card__title">
        {{ titulo }}<span class="card__title--date">({{ fecha }})</span>
      </h4>
      <p class="card__director">Directed by: {{ director }}</p>
      <p v-if="score > 80">Score: {{ score }}</p>
      <p>id: {{ id }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
.card {
  border: 1px black solid;
  border-radius: 10px;
  transition: 0.5s;
  background-size: 200% auto;
  background-color: #ff3cea;
  color: white;
}

.card:hover {
  background-color: #3377ff;
  color: #ffffff;
  text-decoration: none;
}

.card__title {
  color: #05f140;
  font-size: 24px;
}

.card__title--date {
  color: #706979;
  font-weight: lighter;
  font-size: 16px;
}
</style>
<template>
  <div class="card">
    <router-link class="link" :to="`/pelicula/detalle/${id}`">
      <h4>{{titulo}}<span>({{fecha}})</span></h4>
    </router-link>
    <p class="card__director">Directed by: {{director}}</p>
    <p
      v-if="score > 80"
    >
      Score: {{score}}
    </p>
    <p>{{id}}</p>
  </div>
</template>

<script>
  export default {
    name: "Tarjeta",
    props: {
      id: {
        type: String,
        required: true
      },
      titulo: {
        type: String,
        required: true
      },
      director: {
        type: String,
        required: true
      },
      fecha: {
        type: String,
        required: true
      },
      score: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .card {
    border: 1px black solid;
    border-radius: 5px;
  }

  .link {
    text-decoration: none;
    font-size: 24px;
  }

  .link span {
    color: gray;
    font-weight: lighter;
    font-size: 16px;
  }
</style>
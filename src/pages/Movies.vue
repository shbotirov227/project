<template>
  <div class="movie-card" v-for="(item, index) in result" :key="index">
    <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" alt="" />
    <h3 class="title">{{ item.title }}</h3>
    <h4 class="overview">{{ item.overview }}</h4>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      token: "8c6b435d72ceead1a7aa11e193fde748",
      result: [],
    };
  },

  methods: {
    fetched() {
      fetch(`https://api.themoviedb.org/4/list/1?api_key=${this.token}`)
        .then((res) => res.json())
        .then((data) => {
          this.result = data.results;
          console.log(this.result);
        });
    },
  },

  created() {
    this.fetched();
  },
};
</script>

<style></style>

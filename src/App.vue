<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="./assets/icon.png" alt="" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #3eecac;
  background-image: linear-gradient(315deg, #3eecac 0%, #ee74e1 100%);
  background-repeat: no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fa8bff;
  background-image: linear-gradient(
    135deg,
    #fa8bff 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
  border-bottom: 1px #fa8bff solid;
}

#nav img {
  width: 70px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#about {
  background: #fbf5f3;
  border: 0px black solid;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
}
</style>

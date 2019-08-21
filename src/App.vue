<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Roomdetail">Roomdetail</router-link>
    </div>-->
    <router-view/>
    <ft/>
  </div>
</template>
<script>
import ft from '@/components/footer.vue'
export default {
    components: {
    ft
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<template>
<!--  <HelloWorld/>-->
  <div class="container">
    <NavBar/>
<!--      <keep-alive>-->
        <router-view></router-view>
<!--      </keep-alive>-->

  </div>
  <app-footer></app-footer>

</template>


<script setup>
import NavBar from "./components/NavBar.vue";
import appFooter from "./components/app-footer.vue";
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>

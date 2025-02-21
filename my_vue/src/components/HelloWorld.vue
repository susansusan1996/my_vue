<template>
  <b-container fluid="xl">
    <!-- 設定 navbar 在畫面正上方 -->
    <b-row>
      <b-col cols="12">
<!--        <NavBar/>-->
      </b-col>
    </b-row>

    <!-- 其他內容 -->
    <b-row>
      <div>
        <BButton variant="dark" @click="show">Click me</BButton>
      </div>
    </b-row>
  </b-container>
</template>

<script setup>
import NavBar from './NavBar.vue'
import { ref } from 'vue'
import axios from 'axios'

defineProps({
  msg: String,
})

const count = ref(0)

function show() {
  console.log("xxxxxx")
  axios.get('http://localhost:8080/iisi/api/login').then((res) => {
    console.log("哈哈:", res)
  })
}
</script>

<style scoped>
/* 讓 Navbar 固定在上方 */
b-row:first-child {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050; /* 確保 NavBar 在最上層 */
  width: 100%; /* 確保 NavBar 寬度覆蓋整個頁面 */
}
</style>

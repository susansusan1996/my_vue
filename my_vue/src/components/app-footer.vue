<template>
  <footer id="footer" class="footer bg-light mt-4 p-1 small text-center">
    版權所有 &copy; 中華民國 {{ currentMinguoYear }} 年
  </footer>
</template>

<script setup>
    const currentMinguoYear = new Date().getFullYear() - 1911;
</script>

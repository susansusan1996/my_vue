<template>
  <div v-if="node" class="tree-node">
    <!-- 顯示當前節點 -->
    <div class="node">{{ node.value }}</div>

    <!-- 子節點 (左右子樹) -->
    <div class="tree-children" v-if="node.left || node.right">
      <TreeNode v-if="node.left" :node="node.left" class="left-child" />
      <TreeNode v-if="node.right" :node="node.right" class="right-child" />
    </div>
  </div>
</template>


<script setup>
defineProps({
  node: Object, // 父組件傳入的節點物件
});
</script>

<style scoped>
.tree-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}


/* 節點樣式 */
.node {
  display: inline-block;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  text-align: center;
  min-width: 30px;
}

.tree-children {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tree-children::before {
  content: "";
  position: absolute;
  top: -10px; /* 控制連接線的高度 */
  left: 50%;
  width: 15px;  /* 控制線條長度 */
  height: 15px; /* 控制線條長度 */
  border-top: 2px solid black;   /* 水平線 */
  border-left: 2px solid black;  /* 左上斜線 */
  transform: translateX(-50%) rotate(45deg); /* 旋轉讓線條變成斜線 */
}

</style>

<template>
  <div class="code-container">
<!--    <div class="code-section">-->
<!--      <h2>Binary Search Tree 演算法</h2>-->
<!--      <pre><code class="javascript">{{ bstCode }}</code></pre>-->
<!--    </div>-->

    <div class="visualization-section">
      <h2>Binary Search Tree 圖示</h2>
      <div class="tree-container">
        <TreeNode :node="tree" />
      </div>

      <div class="button-container">
        <button @click="insertNode">Insert</button>
        <input v-model="deleteValue" type="number" placeholder="Enter value to delete">
        <button @click="deleteNode(deleteValue)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TreeNode from './TreeNode.vue'; // 樹狀節點組件

const bstCode = `

`;

const tree = ref(null);
const deleteValue = ref(""); // 用於輸入要刪除的值

const bst = new class {
  root = null;
  insert(value) {
    this.root = this._insertNode(this.root, value);
    tree.value = { ...this.root };
  }

  _insertNode(node, value) {
    if (!node) return { value, left: null, right: null };
    if (value < node.value) node.left = this._insertNode(node.left, value);
    else node.right = this._insertNode(node.right, value);
    return node;
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
    tree.value = { ...this.root };
  }

  _deleteNode(node, value) {
    if (!node) return null;
    if (value < node.value) node.left = this._deleteNode(node.left, value);
    else if (value > node.value) node.right = this._deleteNode(node.right, value);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let minLargerNode = this._findMin(node.right);
      node.value = minLargerNode.value;
      node.right = this._deleteNode(node.right, minLargerNode.value);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }
};

const insertNode = () => {
  const value = Math.floor(Math.random() * 100);
  bst.insert(value);
};

const deleteNode = (value) => {
  const num = parseInt(value);
  if (!isNaN(num)) {
    bst.delete(num);
    deleteValue.value = ""; // 清空輸入框
  }
};
</script>

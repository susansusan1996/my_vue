<template>
  <div class="code-container">
    <div class="code-section">
      <h2>Stack 演算法</h2>
      <pre><code class="javascript">{{ stackCode }}</code></pre>
    </div>

    <div class="visualization-section">
      <h2>Stack 圖示</h2>
      <div class="stack-visual">
        <div v-for="(item, index) in stack" :key="index" class="stack-item">
          {{ item }}
        </div>
      </div>
      <div class="button-container">
        <button @click="push">Push</button>
        <button @click="pop">Pop</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Stack 演算法程式碼
const stackCode =
    class Stack {
      constructor() {
        this.items = [];
      }
      push(element) {
        this.items.push(element);
      }
      pop() {
        if (this.isEmpty()) {
          return 'Stack is empty';
        }
        return this.items.pop();
      }
      peek() {
        return this.items[this.items.length - 1];
      }
      isEmpty() {
        return this.items.length === 0;
      }
      size() {
        return this.items.length;
      }
    }

const stack = ref([]);
const stackInstance = new class {
  items = [];
  push(element) {
    this.items.push(element);
    stack.value = [...this.items];
  }
  pop() {
    this.items.pop();
    stack.value = [...this.items];
  }
};

const push = () => {
  const value = Math.floor(Math.random() * 100);
  stackInstance.push(value);
};

const pop = () => {
  stackInstance.pop();
};

</script>

<style scoped>
.code-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}





</style>
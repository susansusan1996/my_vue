<template>
  <div class="stack-container">
    <div class="code-section">
      <h2>Stack 演算法實作</h2>
      <pre><code class="javascript">{{ stackCode }}</code></pre>
    </div>

    <div class="visualization-section">
      <h2>Stack 圖示</h2>
      <div class="stack-visual">
        <div v-for="(item, index) in stack" :key="index" class="stack-item">
          {{ item }}
        </div>
      </div>
      <button @click="push">Push</button>
      <button @click="pop">Pop</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Stack 演算法程式碼
const stackCode = `
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

let stack = new Stack();
`;

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
.stack-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.code-section {
  width: 45%;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
}

.visualization-section {
  width: 45%;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.stack-visual {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.stack-item {
  background-color: #4CAF50;
  color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
}


pre {
  text-align: left;  /* 使整個程式碼區域左對齊 */
  overflow-x: auto;
}

</style>

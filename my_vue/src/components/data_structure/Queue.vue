<template>
  <div class="code-container">
    <div class="code-section">
      <h2>Queue 演算法</h2>
      <pre><code class="javascript">{{ queueCode }}</code></pre>
    </div>

    <div class="visualization-section">
      <h2>Queue 圖示</h2>
      <div class="demo-visual">
        <div v-for="(item, index) in queue" :key="index" class="queue-item">
          {{ item }}
        </div>
      </div>
      <div class="button-container">
        <button @click="enqueue">Enqueue</button>
        <button @click="dequeue">Dequeue</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Queue 演算法程式碼
const queueCode = `
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty!';
    }
    return this.items.shift(); // 先進先出 (FIFO)
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

let queue = new Queue();
`;

const queue = ref([]);
const queueInstance = new class {
  items = [];
  enqueue(element) {
    if(this.items.length == 11){
      alert("Queue is full!")
      return
    }
    this.items.push(element);
    queue.value = [...this.items];
  }
  dequeue() {
    if(this.items.length == 0){
      alert("Queue is empty!")
      return
    }
    this.items.shift();
    queue.value = [...this.items];
  }
};

const enqueue = () => {
  const value = Math.floor(Math.random() * 100);
  queueInstance.enqueue(value);
};

const dequeue = () => {
  queueInstance.dequeue();
};

</script>

<style scoped>

</style>

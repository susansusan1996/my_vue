<template>
  <div>
    <h1>貪吃蛇遊戲</h1>
    <div class="game-container">
      <div class="game-board">
        <div v-for="(cell, index) in gameBoard" :key="index" :class="['cell', cell]"></div>
      </div>
      <div class="score">Score: {{ score }}</div>
      <button @click="restartGame">重新開始</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardSize: 10,  // 遊戲區域大小（10x10格）
      gameBoard: [],  // 儲存遊戲狀態
      snake: [],      // 蛇的位置
      food: {},       // 食物位置
      direction: "RIGHT",  // 蛇的移動方向
      score: 0,       // 分數
      gameInterval: null, // 控制遊戲循環
    };
  },
  mounted() {
    this.initGame();
    document.addEventListener('keydown', this.handleKeyPress);
  },
  methods: {
    initGame() {
      this.gameBoard = Array(this.boardSize * this.boardSize).fill('empty');
      this.snake = [{x: 2, y: 2}, {x: 1, y: 2}, {x: 0, y: 2}]; // 初始蛇的位置
      this.food = this.generateFood(); // 生成食物
      this.score = 0;
      this.gameInterval = setInterval(this.gameLoop, 200); // 每200毫秒更新一次遊戲狀態
    },

    restartGame() {
      clearInterval(this.gameInterval);  // 清除舊的遊戲循環
      this.initGame();  // 初始化遊戲
    },

    gameLoop() {
      this.moveSnake();
      this.checkCollision();
      this.updateBoard();
    },

    moveSnake() {
      const head = { ...this.snake[0] };
      switch (this.direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
      }
      this.snake.unshift(head); // 新的頭部加入蛇的前端

      if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
        this.food = this.generateFood(); // 吃到食物後生成新食物
        this.score += 10; // 增加分數
      } else {
        this.snake.pop(); // 沒有吃到食物時去掉蛇的尾部
      }
    },

    checkCollision() {
      const head = this.snake[0];
      // 撞牆
      if (head.x < 0 || head.x >= this.boardSize || head.y < 0 || head.y >= this.boardSize) {
        this.gameOver();
      }
      // 撞到自己
      for (let i = 1; i < this.snake.length; i++) {
        if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
          this.gameOver();
        }
      }
    },

    generateFood() {
      let foodPosition;
      do {
        foodPosition = {
          x: Math.floor(Math.random() * this.boardSize),
          y: Math.floor(Math.random() * this.boardSize),
        };
      } while (this.snake.some(segment => segment.x === foodPosition.x && segment.y === foodPosition.y));
      return foodPosition;
    },

    updateBoard() {
      this.gameBoard.fill('empty');
      this.snake.forEach(segment => {
        const index = segment.y * this.boardSize + segment.x;
        this.gameBoard[index] = 'snake';
      });
      const foodIndex = this.food.y * this.boardSize + this.food.x;
      this.gameBoard[foodIndex] = 'food';
    },

    handleKeyPress(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.direction !== "DOWN") this.direction = "UP";
          break;
        case 'ArrowDown':
          if (this.direction !== "UP") this.direction = "DOWN";
          break;
        case 'ArrowLeft':
          if (this.direction !== "RIGHT") this.direction = "LEFT";
          break;
        case 'ArrowRight':
          if (this.direction !== "LEFT") this.direction = "RIGHT";
          break;
      }
    },

    gameOver() {
      clearInterval(this.gameInterval);
      alert("遊戲結束！得分：" + this.score);
    },
  },
};
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  gap: 1px;
}

.cell {
  width: 30px;
  height: 30px;
  background-color: lightgray;
}

.snake {
  background-color: green;
}

.food {
  background-color: red;
}

.score {
  margin-top: 10px;
  font-size: 20px;
}

.restart-button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>

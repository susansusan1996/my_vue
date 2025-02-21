<template>
  <div>
    <h1>射擊遊戲</h1>
    <div class="game-container">
      <div class="game-board">
        <!-- 玩家 -->
        <div class="player" :style="{ left: player.x + 'px' }"></div>
        <!-- 顯示所有子彈 -->
        <div v-for="(bullet, index) in bullets" :key="'bullet-' + index" class="bullet" :style="{ left: bullet.x + 'px', top: bullet.y + 'px' }"></div>
        <!-- 顯示所有敵人 -->
        <div v-for="(enemy, index) in enemies" :key="'enemy-' + index" class="enemy" :style="{ left: enemy.x + 'px', top: enemy.y + 'px' }"></div>
      </div>
      <div class="score">Score: {{ score }}</div>
      <button @click="startGame" class="restart-button">重新開始</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: { x: 200, y: 550 },  // 玩家初始位置
      bullets: [],                  // 子彈數組
      enemies: [],                  // 敵人數組
      score: 0,                     // 分數
      gameInterval: null,           // 遊戲循環
      enemyInterval: null,          // 敵人生成循環
      gameActive: false,            // 遊戲是否開始
    };
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyPress);
  },
  methods: {
    startGame() {
      // 如果遊戲已經在進行中，就不重新開始
      if (this.gameActive) return;

      this.score = 0;
      this.bullets = [];
      this.enemies = [];
      this.gameActive = true;
      this.player.x = 200;  // 重置玩家位置
      this.gameInterval = setInterval(this.gameLoop, 50); // 遊戲主循環
      this.enemyInterval = setInterval(this.spawnEnemy, 1000); // 每秒生成敵人
    },

    gameLoop() {
      if (!this.gameActive) return;

      // 移動子彈
      this.moveBullets();
      // 移動敵人
      this.moveEnemies();
      // 檢查碰撞
      this.checkCollisions();
    },

    moveBullets() {
      for (let i = 0; i < this.bullets.length; i++) {
        this.bullets[i].y -= 5;  // 子彈向上移動
        if (this.bullets[i].y <= 0) {
          this.bullets.splice(i, 1);  // 刪除出畫面的子彈
          i--;  // 防止跳過下一個子彈
        }
      }
    },

    moveEnemies() {
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].y += 3;  // 敵人向下移動
        if (this.enemies[i].y >= 600) {
          this.gameOver(); // 敵人掉落到底部，遊戲結束
        }
      }
    },

    spawnEnemy() {
      const x = Math.random() * 350;  // 隨機生成敵人的水平位置
      this.enemies.push({ x, y: 0 });  // 敵人從屏幕上方掉落
    },

    handleKeyPress(event) {
      if (event.key === 'ArrowLeft' && this.player.x > 0) {
        this.player.x -= 10;  // 玩家向左移動
      } else if (event.key === 'ArrowRight' && this.player.x < 350) {
        this.player.x += 10;  // 玩家向右移動
      } else if (event.key === ' ') {
        this.fireBullet();  // 按下空格鍵發射子彈
      }
    },

    fireBullet() {
      if (!this.gameActive) return;  // 確保遊戲正在進行時才發射子彈
      const bullet = { x: this.player.x + 20, y: this.player.y };  // 子彈的初始位置
      this.bullets.push(bullet);  // 添加子彈到子彈數組
    },

    checkCollisions() {
      for (let i = 0; i < this.enemies.length; i++) {
        for (let j = 0; j < this.bullets.length; j++) {
          if (this.checkCollision(this.enemies[i], this.bullets[j])) {
            this.enemies.splice(i, 1);  // 刪除敵人
            this.bullets.splice(j, 1);  // 刪除子彈
            this.score += 10;  // 增加分數
            i--; // 防止跳過下一個敵人
            j--; // 防止跳過下一個子彈
          }
        }
        if (this.checkCollision(this.enemies[i], this.player)) {
          this.gameOver(); // 玩家與敵人碰撞，遊戲結束
        }
      }
    },

    checkCollision(enemy, bullet) {
      // 簡單的碰撞檢測
      return bullet.x < enemy.x + 50 &&
          bullet.x + 10 > enemy.x &&
          bullet.y < enemy.y + 50 &&
          bullet.y + 10 > enemy.y;
    },

    gameOver() {
      clearInterval(this.gameInterval);
      clearInterval(this.enemyInterval);
      alert('遊戲結束！得分：' + this.score);
      this.gameActive = false;
    }
  }
};
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-board {
  position: relative;
  width: 400px;
  height: 600px;
  background-color: black;
  overflow: hidden;
}

.player {
  position: absolute;
  bottom: 0;
  left: 200px;
  width: 50px;
  height: 50px;
  background-color: green;
}

.bullet {
  position: absolute;
  width: 10px;
  height: 20px;
  background-color: red;
}

.enemy {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
}

.score {
  margin-top: 10px;
  font-size: 20px;
}

.restart-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


</style>

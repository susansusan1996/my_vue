<template>
  <div>
    <h1>馬力歐遊戲</h1>
    <canvas ref="gameCanvas" width="800" height="600"></canvas>
    <div class="score">Score: {{ score }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      player: { x: 50, y: 500, width: 50, height: 50, speed: 5, dx: 0, dy: 0, onGround: true },
      gravity: 0.8, // 重力
      jumpStrength: -15, // 跳躍力量
      friction: 0.9, // 摩擦力
      jumpCount: 2, // 最大跳躍次數
      platforms: [
        { x: 0, y: 550, width: 800, height: 50 }, // 地面平台
        { x: 200, y: 400, width: 100, height: 20 }, // 浮動平台
        { x: 400, y: 300, width: 100, height: 20 },
        { x: 600, y: 200, width: 100, height: 20 },
      ],
      score: 0,
    };
  },
  mounted() {
    this.canvas = this.$refs.gameCanvas;
    this.ctx = this.canvas.getContext('2d');
    this.startGame();
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  },
  methods: {
    startGame() {
      this.player.y = 500; // 初始位置
      this.player.onGround = true; // 設定角色在地面上
      this.gameLoop();
    },

    gameLoop() {
      this.clearCanvas();
      this.updatePlayer();
      this.detectCollisions();
      this.drawPlayer();
      this.drawPlatforms();
      requestAnimationFrame(this.gameLoop);
    },

    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    updatePlayer() {
      // 水平移動
      this.player.x += this.player.dx;
      this.player.y += this.player.dy;

      // 如果角色不在地面，應用重力
      if (!this.player.onGround) {
        this.player.dy += this.gravity; // 當角色在空中，重力逐漸作用
      }

      // 水平摩擦力
      this.player.dx *= this.friction;

      // 如果角色接觸到地面或平台，停止下落
      if (this.player.y + this.player.height > this.canvas.height) {
        this.player.y = this.canvas.height - this.player.height;
        this.player.dy = 0;
        this.player.onGround = true;
        this.jumpCount = 2; // 站在地面時，重置跳躍次數
      }
    },

    jump() {
      if (this.jumpCount > 0) { // 檢查是否還有跳躍次數
        this.player.dy = this.jumpStrength; // 設定跳躍力量
        this.player.onGround = false; // 設定為不在地面
        this.jumpCount--; // 跳躍次數減少
      }
    },

    moveLeft() {
      this.player.dx = -this.player.speed; // 向左移動
    },

    moveRight() {
      this.player.dx = this.player.speed; // 向右移動
    },

    stopMoving() {
      this.player.dx = 0; // 停止水平方向移動
    },

    handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        this.moveLeft();
      } else if (event.key === 'ArrowRight') {
        this.moveRight();
      } else if (event.key === 'ArrowUp') {
        this.jump();
      }
    },

    handleKeyUp(event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        this.stopMoving();
      }
    },

    detectCollisions() {
      this.player.onGround = false; // 假設角色不在地面上

      for (let i = 0; i < this.platforms.length; i++) {
        const platform = this.platforms[i];

        // 檢查角色是否與平台發生碰撞
        if (
            this.player.x < platform.x + platform.width &&
            this.player.x + this.player.width > platform.x &&
            this.player.y + this.player.height <= platform.y + this.gravity &&
            this.player.y + this.player.height + this.player.dy >= platform.y
        ) {
          // 角色跳到平台上
          this.player.y = platform.y - this.player.height;
          this.player.dy = 0; // 停止垂直移動
          this.player.onGround = true; // 設定為在地面上
          this.jumpCount = 2; // 站在平台上時，重置跳躍次數
        }
      }
    },

    drawPlayer() {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    },

    drawPlatforms() {
      this.ctx.fillStyle = 'green';
      this.platforms.forEach(platform => {
        this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
      });
    },
  },
};

</script>

<style scoped>
canvas {
  border: 2px solid black;
}

.score {
  font-size: 20px;
  margin-top: 10px;
}
</style>

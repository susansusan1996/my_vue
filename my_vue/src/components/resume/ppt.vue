<script>
import { ref } from 'vue';
import img1 from '../../assets/image/001.jpg';
import img2 from '../../assets/image/highschool.png';
import img3 from '../../assets/image/shakespear.jpg';
import img4 from '../../assets/image/eva2.jpg';
import img5 from '../../assets/image/nanshan.jpg';
import img6 from '../../assets/image/java_class_1.jpg';
import img7 from '../../assets/image/iisi_1.jpg';
import img8 from '../../assets/image/iisi_2.jpg';
import img9 from '../../assets/image/cat.jpg';

export default {
  setup() {
    const pages = ref([
      { title: '我是鐘凰喜', content: '叫我阿喜就好啦~', image: img1 },
      { title: '學歷(高中時期)', content: '台中女中畢業。<br>對自己的評價就是努力型人格，高一數學曾經在指數對數那個章節只拿了12分，全班最低分。但卻被幸運之神眷顧，在指考的時候考太好，以至於誤打誤撞讀了自己好沒興趣的外文系TT', image: img2 },
      { title: '學歷(大學時期)', content: '畢業於台大外文系<br>(我不要再讀莎士比亞了啦~)', image: img3 },
      { title: '職涯起點 - 長榮航空（國際客服)', content: '1. 與全球客戶溝通，處理航班與服務問題<br>2. 培養跨文化溝通能力與客戶服務經驗', image: img4 },
      { title: '轉職 - 南山人壽（保戶服務專員）', content: '負責契約變更業務，剛好遇到公司導入新的ERP系統，導致業務處理流程極度不順利@@ 因為常需要與工程師們回報問題，因此接觸到了軟體開發領域', image: img5 },
      { title: '北科大JAVA轉職專班', content: '後來，因緣際會下，我得知了全端轉值班的資訊，我利用半年時間修讀轉職專班，學習全端開發技術，並成功轉職至資拓宏宇擔任全端工程師。', image: img6 },
      { title: '資拓宏宇', content: '<b> 專案一：財政部資訊中心系統開發與維運 </b><br>1. 內部搭建 Docker，匯入不敏感資料進行開發<br>2. 與中華電信合作，透過 Azure 整合程式碼<br>3. 進行系統上線、維運及弱點掃描處理', image: img7 },
      { title: '資拓宏宇', content: '<b> 專案二：內政部地址辨識系統 </b><br> 負責將原本儲存在etl工具的地址辨識邏輯轉為 Java 程式，提供即時查詢，減少對批次處理的依賴，提高查詢效率', image: img8 },
      { title: '謝謝願意停下腳步、認識阿喜的 每個你，啾咪 ><', content: '', image: img9 }
    ]);

    const currentPage = ref(0);

    const nextPage = () => {
      if (currentPage.value < pages.value.length - 1) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 0) {
        currentPage.value--;
      }
    };

    return { pages, currentPage, nextPage, prevPage };
  }
};
</script>

<template>
  <div class="container">
    <transition name="page" mode="out-in">
      <div :key="currentPage" class="page">
        <h2>{{ pages[currentPage].title }}</h2>
        <img :src="pages[currentPage].image" alt="Page Image" class="page-image" />
        <p v-html="pages[currentPage].content"></p>
      </div>
    </transition>
    <div class="buttons">
      <button @click="prevPage" :disabled="currentPage === 0">上一頁</button>
      <button @click="nextPage" :disabled="currentPage === pages.length - 1">下一頁</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 70%; /* 將寬度調整為 70%，使卡片更寬 */
  margin: auto;
  text-align: center;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.page {
  padding: 20px;
  font-size: 18px;
  line-height: 1.6;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.page-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.buttons {
  margin-top: 20px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  background: #333;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>

const swiper = new Swiper(".mySwiper", {
  allowTouchMove: false, // 避免駛使用者移動到
  slidesPerView: 'auto', // 自動調整 slide 呈現數量
  loop: true, // 重複播放
  speed: 10000, // 速度
  autoplay: {
    delay: 0, // 延遲時間
    disableOnInteraction: false, // 避免點擊造成跑馬燈失效
  },
});
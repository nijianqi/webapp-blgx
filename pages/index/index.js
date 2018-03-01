//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'image/1.jpg',
      'image/1.jpg',
      'image/1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  }
})

// pages/index/home.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  startquest: function (event) {
    tt.showLoading({
      title: "loading...",
      success(res) {
        console.log(`${res}`);
      },
      fail(res) {
        console.log(`showLoading调用失败`);
      },
    });
    tt.navigateTo({
      url: `/pages/index/index`,
      success(res) {
        console.log(`${res}`);
        tt.hideLoading({
          success(res) {
            console.log(res);
          },
          fail(err) {
            console.log(`hideLoading 调用失败`, err);
          },
        });
      },
      fail(res) {
        console.log(`navigateTo调用失败`);
      },
    });
  }
})
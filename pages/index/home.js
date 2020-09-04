// pages/index/home.js
Page({
  data: {

  },
  onLoad: function (options) {
    tt.showShareMenu({
      success(res) {
        console.log("已成功显示转发按钮");
      },
      fail(err) {
        console.log("showShareMenu 调用失败", err.errMsg);
      },
      complete(res) {
        console.log("showShareMenu 调用完成");
      },
    });
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
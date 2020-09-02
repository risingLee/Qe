// page.js
Page({

  onLoad: function () {
    this.showCount = 0;
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

    this.style1 = "background-color: #73d13d"
    this.style2 = "background-color: #13c2c2"
    this.style3 = "background-color: #40a9ff"
    this.style4 = "background-color: #82a911"
    this.style5 = "background-color: #32a899"
    this.tmptotalScore = 0
    this.querstions = [{
      title: "1. 选出不同的一项",
      url: "",
      staffA: { anser: "蛇", score: 0, style: this.style1 },
      staffB: { anser: "大树", score: 8, style: this.style2 },
      staffC: { anser: "老鼠", score: 0, style: this.style3 },

    }, {
      title: "2. 下列分数中找出不同类的一项",
      url: "",
      staffA: { anser: "3/5", score: 0, style: this.style1 },
      staffB: { anser: "3/7", score: 0, style: this.style2 },
      staffC: { anser: "3/9", score: 8, style: this.style3 },
    }, {
      title: "3. 男孩对男子，正如女孩对",
      url: "",
      staffA: { anser: "青年", score: 0, style: this.style1 },
      staffB: { anser: "孩子", score: 0, style: this.style2 },
      staffC: { anser: "夫人", score: 0, style: this.style3 },
      staffD: { anser: "姑娘", score: 0, style: this.style4 },
      staffE: { anser: "妇女", score: 8, style: this.style5 },
    }, {
      title: "4. 如果笔相对于写字，那么书相对于",
      url: "",
      staffA: { anser: "娱乐", score: 0, style: this.style1 },
      staffB: { anser: "阅读", score: 8, style: this.style2 },
      staffC: { anser: "学文化", score: 0, style: this.style3 },
      staffD: { anser: "解除疲劳", score: 0, style: this.style4 },
    }, {
      title: "5. 马之于马厩，正如人于",
      url: "",
      staffA: { anser: "牛棚", score: 0, style: this.style1 },
      staffB: { anser: "马车", score: 0, style: this.style2 },
      staffC: { anser: "房屋", score: 8, style: this.style3 },
      staffD: { anser: "农场", score: 0, style: this.style4 },
      staffE: { anser: "楼房", score: 0, style: this.style5 },
    }, {
      title: "6. 2 8 14 20 ( ) 请选出“( )”处的数字",
      url: "",
      staffA: { anser: "22", score: 0, style: this.style1 },
      staffB: { anser: "24", score: 0, style: this.style2 },
      staffC: { anser: "26", score: 8, style: this.style3 },
      staffD: { anser: "28", score: 0, style: this.style4 },
    }, {
      title: "7. 下列四个词是否可以组成一个正确的句子\n 生活 水里 鱼 在",
      url: "",
      staffA: { anser: "是", score: 8, style: this.style1 },
      staffB: { anser: "否", score: 0, style: this.style2 },
    }, {
      title: "8. 下列六个词是否可以组成一个正确的句子 球棒 的 用来 是 棒球 打",
      url: "",
      staffA: { anser: "是", score: 0, style: this.style1 },
      staffB: { anser: "否", score: 8, style: this.style2 },
    }, {
      title: "9. 动物学家与社会学家相对应，正如动物与( )相对",
      url: "",
      staffA: { anser: "人类", score: 8, style: this.style1 },
      staffB: { anser: "问题", score: 0, style: this.style2 },
      staffC: { anser: "社会", score: 0, style: this.style3 },
      staffD: { anser: "社会学", score: 0, style: this.style4 },
    }, {
      title: "10. 如果所有的妇女都有大衣，那么漂亮的妇女会有",
      url: "",
      staffA: { anser: "更多的大衣", score: 0, style: this.style1 },
      staffB: { anser: "时髦的大衣", score: 0, style: this.style2 },
      staffC: { anser: "大衣", score: 8, style: this.style3 },
      staffD: { anser: "昂贵的大衣", score: 0, style: this.style4 },
    }, {
      title: "11. 1 3 2 6 5 7 ( ) 请写出 ( )处的数字",
      url: "",
      staffA: { anser: "9", score: 8, style: this.style1 },
      staffB: { anser: "10", score: 0, style: this.style2 },
      staffC: { anser: "11", score: 0, style: this.style3 },
      staffD: { anser: "12", score: 0, style: this.style4 },
    }, {
      title: "12. 南之于西北，正如西之于",
      url: "",
      staffA: { anser: "西北", score: 0, style: this.style1 },
      staffB: { anser: "东北", score: 8, style: this.style2 },
      staffC: { anser: "西南", score: 0, style: this.style3 },
      staffD: { anser: "东南", score: 0, style: this.style4 },
    }, {
      title: "13. 找出不同类的一项",
      url: "",
      staffA: { anser: "铁锅", score: 0, style: this.style1 },
      staffB: { anser: "小勺", score: 0, style: this.style2 },
      staffC: { anser: "米饭", score: 8, style: this.style3 },
      staffD: { anser: "碟子", score: 0, style: this.style4 },
    }, {
      title: "14. 9 7 8 6 7 5 ( ) 请写出( )处的数字",
      url: "",
      staffA: { anser: "6", score: 8, style: this.style1 },
      staffB: { anser: "7", score: 0, style: this.style2 },
      staffC: { anser: "8", score: 0, style: this.style3 },
      staffD: { anser: "9", score: 0, style: this.style4 },
    }, {
      title: "15. 找出不同类的一项",
      url: "",
      staffA: { anser: "写字台", score: 0, style: this.style1 },
      staffB: { anser: "沙发", score: 0, style: this.style2 },
      staffC: { anser: "电视", score: 0, style: this.style3 },
      staffD: { anser: "桌布", score: 8, style: this.style4 },
    }, {
      title: "16. 961 (25) 432 932 ( ) 731请写出( )内的数字",
      url: "",
      staffA: { anser: "16", score: 0, style: this.style1 },
      staffB: { anser: "25", score: 0, style: this.style2 },
      staffC: { anser: "38", score: 8, style: this.style3 },
      staffD: { anser: "47", score: 0, style: this.style4 },
    }, {
      title: "17. 哪一个应该填在“XOOOOXXOOOXXX”后面",
      url: "",
      staffA: { anser: "XOO", score: 0, style: this.style1 },
      staffB: { anser: "OO", score: 8, style: this.style2 },
      staffC: { anser: "OOX", score: 0, style: this.style3 },
      staffD: { anser: "OXX", score: 0, style: this.style4 },
    }, {
      title: "18. 望子成龙的家长往往( )苗助长 ",
      url: "",
      staffA: { anser: "揠", score: 8, style: this.style1 },
      staffB: { anser: "堰", score: 0, style: this.style2 },
      staffC: { anser: "偃", score: 0, style: this.style3 },
    }, {
      title: "19. 填上空缺的词:\n金黄的头发(黄山)刀山火海\n赞美人生( )卫国战争",
      url: "",
      staffA: { anser: "泰山", score: 0, style: this.style1 },
      staffB: { anser: "美国", score: 8, style: this.style2 },
      staffC: { anser: "黄金", score: 0, style: this.style3 },
      staffD: { anser: "火山", score: 0, style: this.style4 },
    }, {
      title: "20. 选出不同类的一项",
      url: "",
      staffA: { anser: "地板", score: 0, style: this.style1 },
      staffB: { anser: "壁橱", score: 0, style: this.style2 },
      staffC: { anser: "窗户", score: 0, style: this.style3 },
      staffD: { anser: "窗帘", score: 8, style: this.style4 },
    }];
    this.currentIndex = 0

    this.setData({ quersition: this.querstions[this.currentIndex] })

  },

  data: {
    ishidewatch: true,
    totalScore: 0,
    te: "下一题",
    currentNo: 1 * 5,
    hideQuersition: false,
    quersition: {}
  },
  modalTap: function (e) {

  },
  watchresult: function (event) {
    this.setData({ ishidewatch: true })
    var _this = this
    _this.showCount = 0;
    const info = tt.getSystemInfoSync();
    if (info.appName.toUpperCase() === 'DOUYIN') {
      tt.showLoading({
        title: "loading...",
        success(res) {
          console.log(`${res}`);
        },
        fail(res) {
          console.log(`showLoading调用失败`);
        },
      });
      var videoAd = tt.createRewardedVideoAd({
        adUnitId: "240k89lf988l24w8sq",
      });
      videoAd.onClose((res) => {
        if (res.isEnded) {
          if (_this.showCount == 0) {

            tt.showModal({
              title: "您的智商为" + this.tmptotalScore,
              content: "恭喜您成功碾压了全国 " + (this.tmptotalScore > 100 ? "99%" : this.tmptotalScore > 80 && this.tmptotalScore < 100 ? "90%" : "30%") + " 的用户",
              showCancel: false,
              confirmText: "重新测试",
              cancelText: '关闭',
              success({ confirm, cancel }) {
                if (confirm) {
                  _this.currentIndex = 0;
                  _this.setData({ currentNo: 5, quersition: _this.querstions[_this.currentIndex] })
                }
                if (cancel) {

                }
              }
            })
            _this.showCount = 1;
          }
        }
        else {
          this.setData({ ishidewatch: false })

        }
      });
      videoAd.show()
        .then(() => {
          console.log("广告显示成功");
          tt.hideLoading({
            success(res) {
              console.log(res);
            },
            fail(err) {
              console.log(`hideLoading 调用失败`, err);
            },
          });
        })
        .catch((err) => {
          console.log("广告组件出现问题", err);
          tt.hideLoading({
            success(res) {
              console.log(res);
            },
            fail(err) {
              console.log(`hideLoading 调用失败`, err);
            },
          });
          // 可以手动加载一次
          videoAd.load().then(() => {
            console.log("手动加载成功");
            // 加载成功后需要再显示广告
            return videoAd.show();
          });
        });

    }
    else {
      tt.showModal({
        title: "您的智商为" + this.tmptotalScore,
        content: "恭喜您成功碾压了全国 " + (this.tmptotalScore > 100 ? "99%" : this.tmptotalScore > 80 && this.tmptotalScore < 100 ? "90%" : "30%") + " 的用户",

        showCancel: false,
        confirmText: "再测一次",

        cancelText: '关闭',
        success({ confirm, cancel }) {
          if (confirm) {
            _this.currentIndex = 0
            _this.setData({ currentNo: 5, quersition: _this.querstions[_this.currentIndex] })
          }
          if (cancel) {

          }
        }
      })
    }
    this.setData({ totalScore: this.tmptotalScore })
    return;
  },
  querstionChange: function (event) {
    this.tmptotalScore += event.currentTarget.dataset.score
    this.setData({ currentNo: (this.currentIndex + 1) * 5 })
    if (this.currentIndex == this.querstions.length - 1) {
      this.setData({ ishidewatch: false })
    }
    else {
      this.currentIndex++
      this.setData({ quersition: this.querstions[this.currentIndex] })
    }
  },
});
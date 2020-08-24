// page.js
Page({

  onLoad: function () {
    this.style1 = "background-color: #73d13d"
    this.style2 = "background-color: #13c2c2"
    this.style3 = "background-color: #40a9ff"
    this.style4 = "background-color: #82a911"
    this.style5 = "background-color: #32a899"

    this.querstions = [{
      title: "选出不同的一项",
      url: "",
      staffA: { anser: "蛇", score: 0, style: this.style1 },
      staffB: { anser: "大树", score: 5, style: this.style2 },
      staffC: { anser: "老鼠", score: 0, style: this.style3 },

    }, {
      title: "下列分数中找出不同类的一项",
      url: "",
      staffA: { anser: "3/5", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "3/7", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "3/9", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "男孩对男子，正如女孩对",
      url: "",
      staffA: { anser: "青年", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "孩子", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "夫人", score: 0, style: "background-color: #40a9ff" },
      staffD: { anser: "姑娘", score: 0, style: "background-color: #13c2c2" },
      staffE: { anser: "妇女", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "如果笔相对于写字，那么书相对于",
      url: "",
      staffA: { anser: "娱乐", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "阅读", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "学文化", score: 0, style: "background-color: #40a9ff" },
      staffD: { anser: "解除疲劳", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "马之于马厩，正如人于",
      url: "",
      staffA: { anser: "牛棚", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "马车", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "房屋", score: 0, style: "background-color: #40a9ff" },
      staffD: { anser: "农场", score: 0, style: "background-color: #40a9ff" },
      staffE: { anser: "楼房", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "2 8 14 20 () 请选出“()”处的数字",
      url: "",
      staffA: { anser: "22", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "24", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "28", score: 0, style: "background-color: #40a9ff" },
      staffD: { anser: "30", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }, {
      title: "",
      url: "",
      staffA: { anser: "", score: 0, style: "background-color: #73d13d" },
      staffB: { anser: "", score: 0, style: "background-color: #13c2c2" },
      staffC: { anser: "", score: 0, style: "background-color: #40a9ff" },
    }];
    this.currentIndex = 0

    // for (var i = 0; i < 3; i++) {
    //   this.querstions.push(
    //     {
    //       title:"问题" + i,
    //       staffA: { anser: "A"+i, score: 0, style: this.style1 },
    //       staffB: { anser: "B"+i, score: 1, style:this.style2 },
    //       staffC: { anser: "C"+i, score: 2,style:this.style3 },
    //       staffD: { anser: "D"+i, score: 3,style:this.style4 }
    //     }
    //   );
    // }

    this.setData({ quersition: this.querstions[this.currentIndex] })

  },

  data: {
    te: "下一题",
    hideQuersition: false,
    quersition: {}
  },
  querstionChange: function (event) {
    this.currentIndex++
    if (this.currentIndex == this.querstions.length) {
      this.setData({ hideQuersition: true, te: "点击视频查看得分", quersition: {} })
      return;
    }

    this.setData({ quersition: this.querstions[this.currentIndex] })
    console.log(this.currentIndex)

  },
});
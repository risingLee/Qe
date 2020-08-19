// page.js
Page({

  onLoad: function()
  {
    this.currentIndex = 0
    this.querstions = []
    for (var i = 0; i < 3; i++) {
      this.querstions.push(
        {
          title:"问题" + i,
          staffA: { anser: "A"+i+". xxxxxxx", score: 0, style: "background-color: #73d13d" },
          staffB: { anser: "B"+i+". xxxxxxx", score: 1, style:"background-color: #13c2c2" },
          staffC: { anser: "C"+i+". xxxxxxx", score: 2,style:"background-color: #40a9ff" },
          staffD: { anser: "D"+i+". xxxxxxx", score: 3,style:"background-color: #82a911" }
        }
      );
    }
  },

  data: {
    te: "下一题",
    showQuersition: true,
    quersition:{title:"问题1",
    staffA: { anser: "A1 xxxxxxx", score: 0, style: "background-color: #73d13d" },
    staffB: { anser: "B1 xxxxxxx", score: 1, style:"background-color: #13c2c2" },
    staffC: { anser: "C1 xxxxxxx", score: 2,style:"background-color: #40a9ff" },
    staffD: { anser: "D1 xxxxxxx", score: 3,style:"background-color: #82a911" }}
  },
  querstionChange: function(event){
      if (this.currentIndex== 3)
      {
        this.setData({showQuersition: false, te:"点击视频查看得分",quersition:{} })
        return;
      }

      this.setData({showQuersition: true, te:"下一题",quersition:this.querstions[this.currentIndex] })
      console.log(this.currentIndex)
      this.currentIndex++
  },
});
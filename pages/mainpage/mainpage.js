var Bmob = require('../../utils/Bmob-1.6.7.min.js')
// pages/mainpage/mainpage.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (option) {
    const query = Bmob.Query("Fields");
    query.include("sport_id")
    query.find().then(res => {
    });  
    const query3 = Bmob.Query('Sports');
    let page = this;
    query3.get(option.id).then(res => {
      page.setData({clickSport:res});
      console.log(page.data)
    }).catch(err => {
      console.log(err)
    })

    
  },

  bookingdetail: function (e) {
    wx.navigateTo({
      url: '../confirmation/confirmation',
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
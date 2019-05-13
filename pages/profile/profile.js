var Bmob = require('../../utils/Bmob-1.6.7.min.js')
// pages/homepage/homepage.js
Page({


  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function (options) {
    let page = this
    const query = Bmob.Query("Users");
    query.get('5Q0pJJJG').then(res => {
      console.log(res)
      page.setData({
        user_info: res
      })
    });
    const bookings = Bmob.Query('Booking_slots');
    bookings.include('booking_id','field_id','field_id.sport_id')
    bookings.statTo("where", '{"booking_id":{"$inQuery":{"where":{"user_id":"5Q0pJJJG"},"className":"Bookings"}}}');
    bookings.order('-createdAt')
    bookings.find().then(res => {
      console.log('bookings',res)
      page.setData({
        bookings: res
      })
    })
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
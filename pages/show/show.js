var Bmob = require('../../utils/Bmob-1.6.7.min.js')
// pages/show/show.js
let app = getApp();
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
    let page = this;
    const sport_id = "Ey0b3334";
    const query = Bmob.Query('Sports')
    query.equalTo('objectId','==',sport_id)
    query.find().then(res => {
      console.log(1,res);
      page.setData({
        sport: res[0]
      })
    });
    let bookings = [];
    let reviews = [];
    const query_fields = Bmob.Query('Fields')
    query_fields.equalTo('sport_id','==',sport_id)
    query_fields.find().then(res => {
      console.log(2,res)
      res.forEach(field => {
        const query_slots = Bmob.Query('Booking_slots')
        query_slots.equalTo('field_id','==',field.objectId)
        query_slots.select('booking_id')
        query_slots.find().then(res => {
          console.log(3,res)
          res.forEach(booking => {
            if(bookings.includes(booking.booking_id.objectId)){

            }else {
            bookings.push(booking.booking_id.objectId);
            }
          })
        })
      })
    })
    page.setData({
      bookings: bookings
    })
    page.data.bookings.forEach(booking => {
      const query_reviews = Bmob.Query('Reviews')
      query_reviews.equalTo('booking_id', '==', booking)
      console.log(booking)
      query_reviews.find().then(res => {
        console.log(4, booking, res)
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
// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
      code:233,
      name:"name",
      
    },
    list:[
      {
        id:1,
        code:'01',
        name:'name01'
      },
      {
        id:2,
        code:'02',
        name:'name02'
      }
    ],
    num:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleInput(e){
    console.log(e)
    // console.log(typeof(this.handleInput)) // function
    this.setData({
      num:e.detail.value
    })
  },
  handleTap:function(e){
    console.log(e)
    var data = e.currentTarget.dataset
    this.setData({
      num:this.data.num + data.op
    })
  },
})
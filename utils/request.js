import config from './config.js';

const request = (url = '', method = 'GET', data = {}, header = {   //这里这样封装是为了后续具体组件中使用时可以直接传参,需按此顺序传参；而不需要写url：xxx等键值对传参
  //具体的header和后端商同后再编写，这里以常见的token为例
  'token': uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.api() + url, //接口地址：前缀+方法中传入的地址
      method: method, //请求方法
      data: data, //传递参数
      header: header, //自定义头部，和后端商同后编写
      success: (res) => {
        if (res.data.code == 400) {
          uni.$u.toast("请求参数有误，检查后再次请求");
        }
        if (res.data.code == 401 && uni.getStorageSync('token')) {
          uni.$u.toast("401");
        }
        if (res.data.code == 403) {
          uni.$u.toast("403");
        }
        if (res.data.code == 404) {
          uni.$u.toast("未找到数据")
        }
        if (res.data.code == 500) {
          const str = res.data.error.message;
          var pattern = new RegExp("[\u4E00-\u9FA5]+");
          if (pattern.test(str)) {
            uni.$u.toast(str);
          } else {
            uni.$u.toast("系统异常，请联系管理员");
          }
        }
        resolve(res.data) //成功
      },
      // 这里的接口请求，如果出现问题就输出接口请求失败的msg；
      //注：因为这里对于请求失败的设置统一抛错提示了，所以后续具体组件中使用接口请求的catch中不需要再写抛错提示
      fail: (err) => {
        uni.$u.toast(err)
        reject(err)
      }
    })
  })
}
export default request;
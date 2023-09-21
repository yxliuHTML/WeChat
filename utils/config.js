export default {
  //接口请求域名配置
  api: function () {
    let curVersion = uni.getAccountInfoSync().miniProgram.envVersion;
    switch (curVersion) {
      case "develop": //开发版
        return "https://qianguxuanyu.cn";
      case 'trial': //体验版
        return "https://qianguxuanyu.cn"
      case 'release': //正式版
        return "https://qianguxuanyu.cn"
      default: //其他,默认调用正式版
        return "https://qianguxuanyu.cn"
    }
  }
}

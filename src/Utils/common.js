// import axios from 'axios';

export default class ajax {
  static goto() {
    console.log(this)
    return this.$router.push('/a');
  }

  /**
   *  设置cookie
   * @param {string} key
   * @param {any} value
   * @param {any} time 0秒表示删除这条cookie(可不填)
   */
  static setCookie(key, value, time) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (time || 2678400) * 1000);
    document.cookie =
      key +
      '=' +
      escape(encodeURIComponent(value)) +
      ';expires=' +
      expires.toGMTString() +
      ';path=' +
      escape('/');
  }
  /**
   * 获取cookie的值
   * @param {string} key
   * @returns {string}
   */
  static getCookie(key) {
    let myCookie = document.cookie;
    let data = myCookie.split('; ');
    for (let i = 0; i < data.length; i++) {
      let co = data[i].split('=');
      if (co[0] === key) {
        return decodeURIComponent(co[1]);
      }
    }
    return '';
  }
  /**
   * 同计时器的调用方式只是做了Promise的封装
   * @param {any} time 秒
   * @param {function} hander 时间到了后的回调
   */
  static setTimeOut(hander, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        hander();
        resolve();
      }, time);
    });
  }
  /**
   * 判断是否是微信打开
   */
  static isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') !== -1;
    if (isWeixin) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 设置用户cookie
   * @param {string} key
   * @param {string} token
   */
  static setToken(key, token) {
    this.setCookie('key', key);
    this.setCookie('token', token);
  }
  // const formData = () => {
  //   let formData = new FormData();
  //   formData.append('name', this.name);
  //   formData.append('age', this.age);
  //   formData.append('file', event.target.files[0]);
  // }
}

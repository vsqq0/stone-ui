export default function IsPC() {
    //判断是否是pc端
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) != -1) {
        flag = false;
        break;
      }
    }
    return flag;
  }

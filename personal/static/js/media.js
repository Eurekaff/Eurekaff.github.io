// 检测用户设备类型
function detectDeviceType() {
    var userAgent = navigator.userAgent;
  
    if (/Android/i.test(userAgent)) {
      return "Android";
    }
  
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return "iOS";
    }
  
    if (/Windows/i.test(userAgent)) {
      return "Windows";
    }
  
    if (/Mac/i.test(userAgent)) {
      return "Mac";
    }
  
    return "Unknown";
  }
  
  // 判断设备类型
  var deviceType = detectDeviceType();
  
  // 如果是手机端，则输出提示信息
  if (deviceType === "Android" || deviceType === "iOS") {
    document.write("请在电脑端打开该页面。");
  }
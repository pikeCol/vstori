
function checkPhone(phone){
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }
}

function checkPassword(pwd) {
  var reg=/[\w|\-]{6,12}/
  if (pwd.length>12 || pwd.length<6) {
    return '请输入长度为6-12位的密码'
  }
  if (reg.test(pwd)) {
    return true
  }
  return "密码支持数字,字母和 '-' '_' "
}

function checkRepeatPassword(oldval,newval) {
  if (oldval!=newval) {
    return "请输入相同的密码"
  }
  return true
}
function checkUsername(val) {
   var han = /^[\u4e00-\u9fa5\w]{2,15}$/;
   if (val.length>15||val.length<2) {
     return '用户名必须为2-15位'
   }
   if (han.test(val)) {
     return true
   }
   return "用户名仅支持汉字、数字、字母"
}

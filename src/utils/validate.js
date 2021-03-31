/*
 * @Description: 校验
 * @Version:
 * @Autor: Huiting Xiao
 * @Date: 2020-12-02 17:50:56
 * @LastEditors: Huiting Xiao
 * @LastEditTime: 2020-12-03 15:32:57
 */

/**
 * @description: 特殊字符过滤
 * @param {*}
 * @return {*}
 * @author: Huiting Xiao
 */
export const stripscript = function(s) {
  let pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！%-+@#￥……&*（）——|{}【】‘；：”“'。，、？↵]"
  );
  let rs = "";
  for (let i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, "");
  }
  return rs;
};

/**
 * @description: 验证用户名为邮箱
 * @param {*}
 * @return {*}
 * @author: Huiting Xiao
 */
export const validateEmail = function(value) {
  let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  if (reg.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description: 验证验证码
 * @param {*}
 * @return {*}
 * @author: Huiting Xiao
 */
export const validateCode = function(value) {
  let reg = /^[a-z0-9]{6}$/;
  if (reg.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description: 验证密码
 * @param {*}
 * @return {*}
 * @author: Huiting Xiao
 */
// 验证密码
export const validatePwd = function(value) {
  let reg = /^[a-z0-9A-Z]{6,16}$/;
  if (reg.test(value)) {
    return false;
  }
  return true;
};

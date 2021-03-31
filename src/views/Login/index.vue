<template>
  <div class="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ active: menu.active }"
          v-for="menu in menuTab"
          :key="menu.txt"
          @click="toggleMenu(menu)"
        >
          {{ menu.txt }}
        </li>
      </ul>

      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="login-form"
        size="medium"
        ref="ruleForm"
      >
        <el-form-item label="邮箱" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="16"
          ></el-input>
        </el-form-item>

        <el-form-item
          v-if="model === 'register'"
          label="确认密码"
          prop="checkPass"
        >
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            minlength="6"
            maxlength="16"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input
                v-model.number="ruleForm.code"
                minlength="6"
                maxlength="6"
              ></el-input>
            </el-col>
            <el-col :span="9">
              <el-button class="btn" type="success">
                获取验证码
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button class="btn" type="danger" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validateEmail, validateCode, validatePwd } from "@/utils/validate";
export default {
  name: "login",
  data() {
    var validateUsername = function(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validateEmail(value)) {
        callback(new Error("用户名格式错误"));
      } else {
        callback();
      }
    };
    var checkCode = function(rule, value, callback) {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (validateCode(value)) {
        callback(new Error("验证码必须为6位数字"));
      } else {
        callback();
      }
    };
    var validatePassword = function(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePwd(value)) {
        callback(new Error("密码为6-16为数字加字母!"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        {
          txt: "登录",
          active: true,
          type: "login"
        },
        {
          txt: "注册",
          active: false,
          type: "register"
        }
      ],
      model: "login",
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        code: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    toggleMenu(data) {
      this.menuTab.forEach(elem => {
        elem.active = false;
      });
      data.active = true;
      this.model = data.type;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-color: #344a5f;
  display: flex;
  flex-flow: column;
  &-wrap {
    width: 330px;
    margin: auto;

    .menu-tab {
      text-align: center;
      margin-bottom: 20px;
      li {
        display: inline-block;
        width: 88px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
        color: #fff;
        &.active {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }

    .login-form {
      display: block;
      font-size: 14px;
      color: #fff;
      .btn {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>

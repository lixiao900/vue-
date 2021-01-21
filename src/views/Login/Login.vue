<template>
  <div class="login_container">
    <div class="login_box">
      <div class="message">
        <h3>登录页面</h3>
      </div>

      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="65px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item label="账号：" prop="username">
          <el-input
            autocomplete="on"
            type="text"
            v-model="loginForm.username"
            clearable
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码：" prop="password">
          <el-input
            autocomplete="on"
            v-model="loginForm.password"
            type="password"
            clearable
          />
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info"@click='register'>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { xxx } from "@/api/user";
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456"
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          {
            required: true,
            message: "请输入登录名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        // 验证密码是否合法
        password: [
          {
            required: true,
            message: "请输入登录密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        // 登录接口
        this.$message.success("登录成功");
        this.$router.push("/home");
      });
    },
    register(){
      this.$router.push("/register"); 
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  position: absolute;
  background-repeat: no-repeat;
  background-image: linear-gradient(to top, #330867 0%, #30cfd0 100%);
  height: 100%;
  width: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #000;
  border-radius: 10px;
  opacity: 0.9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  .message{
    h3{
      text-align: center;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
  opacity: 1;
}
</style>

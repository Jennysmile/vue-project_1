<template>
  <div>
    <h3>element表单</h3>
    <el-form :model="ruleForm" :rules="rules" ref="loginForm">
      <!-- prop用于校验 -->
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入名称" },
          { min: 6, max: 10, message: "请输入6~10位用户名" }
        ],
        pwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
      submitForm() {
          
      }
  },
};
</script>

<style lang="scss" scoped>
</style>
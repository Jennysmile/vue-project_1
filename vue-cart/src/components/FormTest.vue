<template>
  <div>
    <k-form :model="ruleForm" :rules="rules" ref="loginForm2">
      <k-form-item label="用户名" prop="name">
        <k-input v-model="ruleForm.name"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="pwd">
        <k-input v-model="ruleForm.pwd" type="password"></k-input>
      </k-form-item>
      <k-form-item>
        <el-button type="primary" @click="submitForm2()">登录</el-button>
      </k-form-item>
    </k-form>
    {{ruleForm}}
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
import KInput from "./Input.vue";
import KFormItem from "./FormItem.vue";
import KForm from "./Form.vue";
export default {
  components: { KInput, KFormItem, KForm },
  data() {
    return {
      someValue: "some value",
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
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert("提交成功！");
        } else {
          console.log("校验失败！");
          return false;
        }
      });
    },
    submitForm2() {
      this.$refs.loginForm2.validate(valid => {
        if (valid) {
          alert("提交成功！");
        } else {
          console.log("校验失败！");
          return false;
        }
      });
    }
  }
};
</script>

<style  scoped>
</style>
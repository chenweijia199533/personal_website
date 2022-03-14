<template>
  <div>
      <h3 class="title">登录界面</h3>
      <div class="login">
        <el-form 
        :model="ruleForm" 
        status-icon 
        :rules="rules" 
        ref="ruleForm" 
        label-width="100px" 
        class="demo-ruleForm">
            <el-form-item label="请输入账户名" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
//解析token
import jwt from 'jwt-decode'
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账户名'));
        } else {
          callback();
        }
      };
      
      return {
        ruleForm: {
          username: '',
          password: '', 
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validatename, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.getLogin({
                user: this.ruleForm.username,
                pwd:this.ruleForm.password
            }).then(res => {
                let obj = {
                    token:res.data.token,
                    username:jwt(res.data.token).user
                }
                this.$store.commit('LoginModle/setUser',obj)
                localStorage.setItem('userinfo',JSON.stringify(obj))
                this.$router.push('/')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped lang="less">
 .title {
     text-align: center;
     margin-top: 100px;
     margin-bottom: -90px;
 }
 .login {
     width: 400px;
     height: 200px;
     margin: 100px auto;
     border: 1px solid #eee;
     box-shadow: 0 0 5px 2px rgba(3, 3, 3, 0.3);
     padding: 30px 10px 10px;
 }
</style>
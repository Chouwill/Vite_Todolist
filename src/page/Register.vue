<script setup>
import { ref } from "vue";
import axios from "axios";
const TodoAPI = "https://todolist-api.hexschool.io";
const email = ref("");
const password = ref("");
const nickname = ref("");

const register = async () => {
  try {
    const res = await axios.post(`${TodoAPI}/users/sign_up`, {
      email: email.value,
      password: password.value,
      nickname: nickname.value,
    });
    alert("你成功了");
    console.log(res);
    console.log(email.value, password.value);
    
  } catch (e) {
    alert("註冊錯誤");
    console.log(e.response.data);
    console.log(email.value, password.value);
  }
};
</script>

<template>
  <div class="register_box">
    <router-link to="/"> 登入 </router-link>
    <h2>註冊</h2>
    <ul>
      <li>
        <label for="">帳號:</label>
        <input type="email" v-model="email" />
      </li>
      <li>
        <label for="">密碼:</label>
        <input type="password" v-model="password" />
      </li>
      <li>
        <label for="">暱稱:</label>
        <input type="text" v-model="nickname" />
      </li>
    </ul>
    <button @click="register">註冊</button>
  </div>
</template>

<style lang="scss" scoped>
.register_box {
  width: 70%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: #000;
    padding: 10px 30px;
    background-color: #5ba3e7;
    border-radius: 20px;
  }
  h2 {
    font-size: 35px;
    text-align: center;
  }
  ul {
    width: 100%;
    // border: 1px solid greenyellow;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      
      margin-right: 30px;
      margin-bottom: 30px;
      label {
        font-size: 25px;
        margin: 5px 0;
      }
      input {
        width: 100%;
        padding: 5px 0;
      }
    }
  }
  button {
    padding: 20px;
    background-color: gray;
  }
}
</style>

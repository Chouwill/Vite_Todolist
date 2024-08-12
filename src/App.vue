<script setup></script>

<template>
  <div class="todo_box">
    <h2>Todo API登入系統</h2>
    
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
}
.todo_box {
  border: 1px solid green;
  width: 60vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    background-color: #3c91e0;
    padding: 30px 40px;
  }
.link_box{
  display: flex;
  width: 200px;
  height: 50px;
  background-color: red;
  li{
    a{
      background-color: orange;
      padding: 20px;
      &:nth-child(0){
        background-color: orangered;
      }
      &:nth-child(1){
        background-color: greenyellow;
      }
    }
  }
}
}
</style>

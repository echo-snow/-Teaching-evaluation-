<template>
  <div id="teacher_evaluation">
    <el-container style="height:500px">
      <el-aside width="200px" style="background-color: #2b3a4d">
        <el-header style="background-color: #2c3a4d" height="32px">
          <img src="../Teacher/head.png" class="head">
          <span style="color:#ffffff;font-size: large">教学质量评估</span>
        </el-header>
        <el-header style="background-color: #2c3a4d" height="29px">
          <span style="color:#ffffff;font-size: large">管理系统</span>
        </el-header>
        <el-header style="background-color: #2c3a4d" height="35px">
          <span style="color:#ffffff;font-size: x-small">Teaching quality evaluation management system</span>
        </el-header>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#2c3a4d"
          text-color="#fff"
          active-text-color="#07a896"
          router
        >
          <el-menu-item style="font-size: small" @click="teacher_evaluation">教师教学质量评价</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="background-color: #07a896;text-align: left" height="96px">
            <span class="box" style="color:#ffffff">
              <img src="../Teacher/id.png" class="png" @click="information_view">
              教师档案管理
            </span>
          <span class="box" style="margin-left: 30px;color:#ffffff">
              <img src="../Teacher/file-text.png" class="png" @click="mark_view">
              教学情况管理
            </span>
          <span class="box" style="margin-left: 30px;color:#ffffff">
              <img src="../Teacher/supervisio.png" class="png" @click="teacher_evaluation">
              教学监督管理
            </span>
          <span class="box" style="margin-left: 100px;color:#ffffff">
              当前用户：{{user}}
            </span>
          <span class="box" style="margin-left: 30px;color:#ffffff">
              权限：{{limits}}
            </span>
          <span class="box" style="margin-left:30px;color:#ffffff" @click="new_home">
              退出
              <img src="../Teacher/exit.png" class="exit">
            </span>
        </el-header>
        <el-container>
          <el-aside width="20px" style="background-color: #d7d7d7"></el-aside>
          <el-main style="margin-left:80px;margin-top:180px;font-size: larger">欢迎登陆！！！</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "teacher_evaluation",
    data(){
      return{
        user: "teacher",
        limits: 'system'
      }
    },
    methods:{
      information_view(){
        this.$router.push('/information_view')
      },
      information_update(){
        this.$router.push('/information_update')
      },
      new_home(){
        this.$router.push('/new_home')
      },
      mark_view(){
        this.$router.push('/mark_view')
      },
      evaluation_update(){
        this.$router.push('/information_update')
      },
      teacher_evaluation(){
        this.$router.push('/teacher_evaluation')
      }
    }
  }
</script>

<style>
  .head{
    width:32px;
    height: 32px
  }
  .id{
    width:30px;
    height:30px;
  }
  .png{
    width:60px;
    height:60px;
  }
  .box{
    width:96px;
    text-align:center
  }
  .exit{
    width:30px;
    height:30px
  }

</style>

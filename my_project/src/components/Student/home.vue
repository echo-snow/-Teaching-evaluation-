<template>
  <div id="home">
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
          <el-menu-item style="font-size: small" @click="home">任课教师信息</el-menu-item>
          <el-menu-item style="font-size: small">填写调查问卷</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="background-color: #07a896;text-align: left" height="96px">
            <span class="box" style="margin-left: 30px;color:#ffffff">
              <img src="../Teacher/file-text.png" class="png">
              填写调查问卷
            </span>
          <span class="box" style="margin-left: 450px;color:#ffffff">
              当前用户：{{name}}
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
          <el-table
            :data="List"
            border
            style="width: 100%;overflow-x:hidden">
            <el-table-column
              label="序号"
              type="index"
              align="center"
              show-overflow-tooltip width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="teacher_name"
              label="教师"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="course_name"
              label="课程"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="class_num"
              label="班级">
            </el-table-column>
            <el-table-column label="教学情况调查" align="center">
              <template slot-scope="scope">
                <el-button
                  style="height:30px;width:70px"
                  @click="questionnaire">填写</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        name: '张三',
        limits: 'system',
        List:[]
      }
    },
    created() {
      this.getTableList();//获取列表数据
    },
    methods:{
      home(){
        this.$router.push('/home');
      },
      questionnaire(){
        this.$router.push('/questionnaire');
      },
      new_home(){
        this.$router.push('/new_home');
      },
      getTableList(){
        this.$axios({
          type:'post',
          url:"http://localhost:3000/xuesheng"
        }).then((res) =>{
          console.log(res.data);
          this.List = res.data;
          console.log(this.List)
        }).catch(function(error){
          console.log(error);
        })
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

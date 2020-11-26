<template>
  <div id="information_view">
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
          <el-menu-item style="font-size: small" @click="information_view">查看教师档案信息</el-menu-item>
          <el-menu-item style="font-size: small" @click="information_update">修改教师档案信息</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="background-color: #07a896;text-align: left" height="96px">
            <span class="box" style="color:#ffffff">
              <img src="../Teacher/id.png" class="png">
              教师档案管理
            </span>
          <span class="box" style="margin-left: 30px;color:#ffffff">
              <img src="../Teacher/file-text.png" class="png">
              教学情况管理
            </span>
          <span class="box" style="margin-left: 30px;color:#ffffff">
              <img src="../Teacher/supervisio.png" class="png">
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
          <table class="mailTable" :style="styleObject" v-if="s_showByRow" border="1" cellspacing="0" cellpadding="0" >
            <tr ><th colspan="4">教师档案信息</th></tr>
            <tr v-for="(item,index) in List" :key="index">
              <td >{{item.key}}</td>
              <td colspan="3">{{item.value}}</td>
            </tr>
          </table>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "information_view",
    data(){
      return{
        user: "teacher",
        limits: 'system',
        styleObject: {},
        s_showByRow: true,
        List: [
          {key: 'teacher_name', value: ''},
          {key: 'sex', value: ''},
          {key: 'education', value: ''},
          {key: 'title', value: ''},
          {key:'birthdate',value:''},
        ]
      }
    },
    computed: {
      rowCount: function() {
        return Math.ceil(this.List.length/2);
      },
    },
    created() {
      this.getTableList();//获取列表数据
      this.styleObject = this.tableStyle;
      if(this.showByRow !== undefined){
        this.s_showByRow = this.showByRow;
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
      getTableList(){
        this.$axios({
          type:'post',
          url:"http://localhost:3000/teacher-file"
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
  td{
    width: 500px;
    height: 30px;
    background:white;
    text-align:left;
  }
  tr{
    height: 30px;
    background: #F0F8FA;
  }

  table{
    margin: 0 auto;
    border-collapse:collapse;
  }
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
    width:20px;
    height:20px
  }

</style>

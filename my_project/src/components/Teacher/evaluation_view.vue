<template>
  <div id="evaluation_view">

    <!--上部导航-->
    <div class="container">
      <!--左边标题部份-->
      <div class="item" style="background: #2b3a4d;">
        <div style="display: flex">
          <div>
            <img src="../Teacher/head.png" id="file">
          </div>
          <div>
            <p style="color:#ffffff">教学质量评估</p>
            <p style="margin-top: -15px;color:#ffffff;">管理系统</p>
          </div>
        </div>
        <div style="margin-top: -15px">
          <p style="color:#ffffff">Teaching quality evaluation management system</p>
        </div>
        <div style="margin-top: -10px;color:#ffffff" class="chioce-user1">{{ teacher_message }}</div>
        <div class="chioce-user" style="color:#ffffff">{{mark_check}}</div>
        <div class="chioce-user" style="color:#ffffff">{{evaluation_check}}</div>
      </div>

      <!--右边头部 -->
      <div class="ritem" style="background: #07a896;">
        <div>
          <div>
            <img src="../Teacher/id.png" class="icon" style="margin-left: 30px; ">
            <div class="font" style="margin-left: 35px; margin-top: -5px;color:#ffffff">{{ message }}</div>
          </div>
          <div>
            <img src= "../Teacher/file-text.png" class="icon" style="margin-left: 180px; margin-top: -80px">
            <div class="font" style="margin-left: 180px; margin-top: -5px;color:#ffffff">{{ teaching_situation}}</div>
          </div>
          <div>
            <img src= "../Teacher/supervisio.png" class="icon" style="margin-left: 330px; margin-top: -80px">
            <div class="font" style="margin-left: 325px; margin-top: -5px;color:#ffffff">{{ teaching_supervisio}}</div>
          </div>
          <div>
            <div class="font" style="margin-left: 700px; margin-top: -40px;color:#ffffff">当前用户：{{ user }}</div>
            <div class="font" style="margin-left: 700px; margin-top: -15px;color:#ffffff">权限：{{ limits }}</div>
          </div>
          <div>
            <img src="../Teacher/exit.png" class="icon-exit">
            <div class="font" style="margin-left: 925px; margin-top: -24px;color:#ffffff">退出</div>
          </div>
        </div>
        <div style="margin-top: 35px; border: 1px solid #ffffff; height: 30px;background:#d7d7d7;">
          <p style="position: relative;margin-top: 4px;color:#000000">查看教学建议</p>
        </div>
        <div class="ritem-below">
          <el-table
            :data="List"
            border
            style="width: 100%;overflow-x:hidden">
            <el-table-column
              align="center"
              prop="teacher"
              label="教师"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="course"
              label="课程"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="class"
              label="班级">
            </el-table-column>
            <el-table-column
              align="center"
              prop="evaluation"
              label="教学建议">
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>

    <div class="item-below">

    </div>

    <!--下部选择-->
    <div class="container-below" style="overflow-x:hidden">
      <!--左边选择栏-->
      <div class="item-below">

      </div>

    </div>

  </div>

</template>



<script>
  export default {
    name: 'evaluation_view',
    data(){
      return {
        message: "教师档案管理",
        user: "teacher",
        limits: 'system',
        teacher_message: '教学情况管理',//左边头部
        teaching_situation: '教学情况管理',
        mark_check: '查看教师教学成绩',
        evaluation_check: '查看教师教学评价',
        teaching_supervisio: '教学监督管理',
        List:[]
      }
    },
    created() {
      this.getTableList();//获取列表数据
    },
    methods:{
      getTableList(){
        this.$axios({
          type:'post',
          url:"http://localhost:3000/teacher"
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
  .container{
    width: 100%;
    display: flex;
    height: 100vh;
  }
  .container-below{
    display: flex;
    width: 100%;
    overflow-x:hidden;
  }

  .item{
    flex: 18;
    border: 1px solid #ffffff;
    height: 100%;
  }
  .ritem{
    flex: 82;
    border: 1px solid #ffffff;
    height: 120px;
  }
  .item-below{
    flex: 18;
    border: 1px solid #ffffff;
  }
  .ritem-below{
    flex: 82;
    border: 1px solid #ffffff;
    overflow-x:hidden;
  }
  #file{
    width: 50px;
    height: 50px;
    margin-top: 10px ;
    margin-left: 25px ;
    display: block;
  }
  .icon{
    width: 80px;
    height: 80px;
    display: block;
    margin-top: 15px;
  }
  .font{
    display: block;
    position: absolute;
    font-size: large;
  }

  .icon-exit{
    width: 20px;
    height: 20px;
    display: block;
    margin-left: 975px;
    margin-top: -30px;
  }
  .chioce-user{
    border: 1px solid #ffffff;
    background: #2b3a4d;
  }
  .chioce-user1{
    border: 1px solid #ffffff;
    background: #07a896;
  }
</style>

<template>
    <div id="index">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="5" ><div class="grid-content bg-purple">广州大学华软软件学院高校医疗信息管理系统</div></el-col>
                    <el-col :span="3" :offset="15"><div class="grid-content">王校医</div></el-col>
                    <el-col :span="1" ><div class="grid-content">退出</div></el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row :gutter="20">  
                    <el-col :span="3" :offset="5"><div class="grid-content box">学生就诊</div></el-col>
                    <el-col :span="3" :offset="5"><div class="grid-content box">药品管理</div></el-col>
                </el-row>
                <el-row :gutter="20">  
                    <el-col :span="3" :offset="5"><div class="grid-content box">就诊信息管理</div></el-col>
                    <el-col :span="3" :offset="5"><div class="grid-content box">请假管理</div></el-col>
                </el-row>
            </el-main>
            <el-footer>Copyright © 2017 - 2018 DespairXC,shokora.All Rights Reserved.</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  }
};
</script>

<style>
body > #app {
  margin: 0;
}

body, html{
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.box{
    width: 400px;
    height: 300px;
    background: #ebb647;
    font-size: 3em;
    text-align: center;
    cursor: pointer;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
  font-size: 1em;
}

.el-header, .el-footer {
    background-color: #409EFF;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
}

.el-header {
    margin-bottom: 60px;
}

.el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    overflow: hidden;
}

.el-container {
    height: 100%;
    width: 100%;
    position: fixed;
}

.el-row{
    margin-bottom: 80px;
}

body > .el-container {
    margin-bottom: 40px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purple-dark {
  background: #d3dce6;
}
</style>



<template>
  <div>
     <div style="height:80px;"></div> 
      <el-footer class="clearfix">
        <el-row style="padding-top:20px;">
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <span><i class="el-icon-phone"></i>0966-666-666</span>
          </el-col>
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <span><i class="el-icon-location"></i>No.9453, COZY Rd, Cozy City, 6666</span>
          </el-col>
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <span><i class="el-icon-postcard"></i>cozyRoom@gmail.com</span>
          </el-col>
        </el-row>
      </el-footer>
  </div>
</template>
<style scoped>
.el-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top:rgb(212, 212, 212) solid 1px;
  background-color: #fff;
  color: #999;
  text-align: center;
  font-size: 8px;
}
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
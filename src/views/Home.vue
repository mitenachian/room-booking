<template>
  <div class="home clearfix">
    <h3 class="homeTitle">COZY ROOM</h3>
    <div>
      <el-row>
        <el-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4"  v-for="(index, o) in 6" :key="o">
          <div class="grid-content">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <div style="height:350px;overflow:hidden;text-align:center;">
                <el-image
                class="image"
                :preview-src-list="srcList"
                src="https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"></el-image>
              </div>
              <div style="padding: 14px;">
                <span>豪華雙人房</span>
                <div class="bottom clearfix">
                  <span class="price"> 平日: $ 9999 /</span>
                  <span class="price"> 假日: $ 9999</span>
                   <el-link type="info" class="button">View<i class="el-icon-view el-icon--right"></i> </el-link>
                </div>
              </div>
            </el-card>          
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      srcList: [
        'https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        'https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
      ]
    }
  }
}
</script>
<style scoped>
.homeTitle {
  font-family:  'Amatic SC', cursive;
  font-size: 100px;
}
  .el-col {
    border:none;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .el-card {
    text-align: left;
  }
  .price {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-card {
    border-radius: 0px;
  }
</style>
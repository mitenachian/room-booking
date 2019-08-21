<template>
  <div class="home clearfix">
    <h3 class="homeTitle">COZY ROOM</h3>
    <div>
      <el-row>
        <el-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4"  v-for="item in rooms" :key="item.index">
          <div class="grid-content">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <div style="height:350px;overflow:hidden;text-align:center;">
                <el-image
                class="image"
                :src="item.imageUrl"></el-image>
              </div>
              <div style="padding: 14px;">
                <span>{{ item.name }}</span>
                <div class="bottom clearfix">
                  <span class="price"> 平日: $ {{ item.normalDayPrice }} /</span>
                  <span class="price"> 假日: $ {{ item.holidayPrice }}</span>
                  <router-link to="/Roomdetail"><el-link type="info" class="button">View<i class="el-icon-view el-icon--right"></i> </el-link></router-link>
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
import { getRoomsList } from "../RoomApi"
export default {
  name: 'home',
  data() {
    return {
      rooms: [],
    }
  },
  mounted() {
    console.log('執行getRoomsList')
    getRoomsList()
    .then(res=> {
      // console.log(res.data);
      this.rooms = res.data.items;
      console.log(this.rooms)
    })
    .catch(err=> {
      console.log(err);
    })
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
  height: 100%;
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

<template>
  <el-container>
  <el-header class="header">
      <h3>COZY ROOM</h3>
  </el-header>
  <el-main class="content">
      <div class="roomdeatil">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div class="grid-content bg-purple">
                      <el-carousel height="680px"  trigger="click" direction="vertical" :autoplay="false" >
                        <el-carousel-item v-for="item in srcList" :key="item">
                            <el-image
                            :src="item"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
                <div class="grid-content bg-purple">
                    <div class="room_titleBox">
                        Deluxe Single Room
                    </div>
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="Roominfo">
                                <div class="roomDesc justify">
                                    Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
                                </div>
                                <div class="roomDesc alignLeft">
                                    <ul>
                                        <li>Limited： 1 person</li>
                                        <li>Bed Type：single bed</li>
                                        <li>Private Bathroom: 1 </li>
                                        <li>Room size： 18 (square feet)</li>
                                        <li>Earliest checkIn time：15:00</li>
                                        <li>Last checkIn time：21:00</li>
                                        <li>CheckOut time：10:00</li>
                                    </ul>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="Roominfo">
                                <div class="bookingForm">
                                    <el-form>
                                        <el-form-item>
                                            <el-input  prefix-icon="el-icon-user-solid" placeholder="your Name" v-model="bookingName"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-input  prefix-icon="el-icon-phone" placeholder="your phone" v-model="bookingPhone"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-date-picker
                                            v-model="bookingdate"
                                            style="width:100%"
                                            suffix-icon="el-icon-date"
                                            type="daterange"
                                            range-separator="-"
                                            start-placeholder="From"
                                            end-placeholder="To">
                                            </el-date-picker>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button style="width:100%" type="info" plain @click="booking()">BOOKING ROOM</el-button>
                                        </el-form-item>
                                    </el-form>                                  
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-divider content-position="left">Amenities</el-divider>
                     <div class="amenitiesBox">
                        <el-row>
                            <el-col :sm="12" :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>Wifi</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                 <div class="alignLeft opty"><i class="el-icon-circle-close"></i>Breakfast</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft opty"><i class="el-icon-circle-close"></i>Mini Bar</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>Room Service</div>
                            </el-col>
                        </el-row>
                        <el-row  class="margin-top10">
                            <el-col :sm="12"  :lg="6">
                                 <div class="alignLeft opty"><i class="el-icon-circle-close"></i>telephone</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>air-conditioning</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>fridge</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>sofa</div>
                            </el-col>
                        </el-row>
                        <el-row  class="margin-top10">
                            <el-col :sm="12"  :lg="6">
                                 <div class="alignLeft opty"><i class="el-icon-circle-close"></i>Nice view</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>smoking areas</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>child friendly</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft"><i class="el-icon-success"></i>pets friendly</div>
                            </el-col>
                        </el-row>
                     </div>
                </div>
            </el-col>
        </el-row>
      </div>
  </el-main>
</el-container>

</template>

<script>

export default {
  name: 'roomdetail',
  data() {
    return {
    bookingName: '',
    bookingPhone: '',
    bookingdate: '',
      srcList: [
        'https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        'https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
      ]
    }
  },
  methods: {
      booking() {
          alert('還沒寫喔喔喔')
      }
  }
}
</script>
<style scoped>
.header {
    border-bottom: 1px rgb(211, 211, 211) solid;
}
.header h3 {
    font-family:  'Amatic SC', cursive;
}
.content{
  display: flex;
  justify-content: center;

}
.roomdeatil{
  width: 1200px;
  margin: 10px;
  text-align: center;
  line-height: 100%;
}
.el-image {
    width:100%;
    height: 100%;
}
.el-main {
    padding: 0;
}
.bg-purple {
    background: rgb(247, 247, 247);
}

.grid-content {
    min-height: 680px;
}
.room_titleBox {
    text-align: left;
    font-family: 'Noto Sans TC', sans-serif;
    font-size:20px;
    color: #2c3e50;
    padding-top:20px;
    padding-left:20px;
}
.Roominfo {
     min-height: 300px;
}
.bookingForm{
    min-height: 300px;
    padding: 20px;
}
.roomDesc{
    color: #6f7780;
    padding:20px;
    line-height: 28px;
}
.alignLeft {
    text-align: left;
}
.justify {
    text-align:justify;
}
.amenitiesBox {
    padding: 10px 20px;
    color: #6f7780;
}
.margin-top10 {
    margin-top:10px;
}
.opty {
    opacity: 0.3;
}
</style>

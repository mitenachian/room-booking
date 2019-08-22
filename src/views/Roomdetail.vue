<template>
  <el-container>
  <el-header class="header">
      <h3>COZY ROOM</h3>
  </el-header>
  <el-main class="content">
      <div class="roomdeatil" v-if="room">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div class="grid-content bg-purple">
                      <el-carousel height="680px"  trigger="click" direction="vertical" :autoplay="false" >
                        <el-carousel-item v-for="item in room.imageUrl" :key="item">
                            <el-image
                            :src="item"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
                <div class="grid-content bg-purple">
                    <div class="room_titleBox">
                        {{ room.name }}
                    </div>
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="Roominfo">
                                <div class="roomDesc justify">
                                   {{ room.description }}
                                </div>
                                <div class="roomDesc alignLeft">
                                    <ul v-if="room.descriptionShort">
                                        <li>Limited：{{ room.descriptionShort['GuestMin'] }} ~ {{ room.descriptionShort['GuestMax'] }} <i class="el-icon-user-solid"></i></li>
                                        <li>Bed：<span v-for="(item ,index) in  room.descriptionShort.Bed" :key="index"> {{ item }}</span></li>
                                        <li>Private Bathroom: {{ room.descriptionShort['Private-Bath']}} </li>
                                        <li>Room size： {{ room.descriptionShort['Footage'] }} (square feet)</li>
                                        <li>Earliest checkIn time：{{ room.checkInAndOut['checkInEarly'] }}</li>
                                        <li>Last checkIn time：{{ room.checkInAndOut['checkInLate'] }}</li>
                                        <li>CheckOut time：{{ room.checkInAndOut['checkOut'] }}</li>
                                    </ul>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="Roominfo">
                                <div class="bookingForm">
                                    <el-form ref="bookingForm" :model="bookingForm" >
                                        <el-form-item>
                                            <el-input  prefix-icon="el-icon-user-solid" placeholder="your Name" v-model="bookingForm.name"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-input  prefix-icon="el-icon-phone" placeholder="your phone" v-model="bookingForm.tel"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-date-picker
                                            v-model="bookingForm.date"
                                            style="width:100%"
                                            suffix-icon="el-icon-date"
                                            type="daterange"
                                            range-separator="-"
                                            start-placeholder="From"
                                            end-placeholder="To">
                                            </el-date-picker>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button style="width:100%" type="info" plain @click="booking(room.id)">BOOKING ROOM</el-button>
                                        </el-form-item>
                                    </el-form>
                                <div class="roomDesc alignLeft">
                                    <ul>
                                        <li>weekday: ${{ room.normalDayPrice }} / per Night</li>
                                        <li>weekend: ${{ room.holidayPrice }} / per Night</li>
                                    </ul>
                                </div>                               
                                </div>
                            </div>
                        </el-col>
                        
                    </el-row>
                    <el-divider content-position="left">Amenities</el-divider>
                     <div class="amenitiesBox" v-if="room.amenities">
                        <el-row>
                            <el-col :sm="12" :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Wi-Fi']}"><i :class="{'el-icon-success': room.amenities['Wi-Fi'] ,'el-icon-circle-close': !room.amenities['Wi-Fi']}"></i>Wifi</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                 <div class="alignLeft" :class="{'opty':!room.amenities['Breakfast']}"><i :class="{'el-icon-success': room.amenities['Breakfast'] ,'el-icon-circle-close': !room.amenities['Breakfast']}"></i>Breakfast</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Mini-Bar']}"><i :class="{'el-icon-success': room.amenities['Mini-Bar'] ,'el-icon-circle-close': !room.amenities['Mini-Bar']}"></i>Mini-Bar</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Room-Service']}"><i :class="{'el-icon-success': room.amenities['Room-Service'] ,'el-icon-circle-close': !room.amenities['Room-Service']}"></i>Room-Service</div>
                            </el-col>
                        </el-row>
                        <el-row  class="margin-top10">
                            <el-col :sm="12"  :lg="6">
                                 <div class="alignLeft" :class="{'opty':!room.amenities['Television']}"><i :class="{'el-icon-success': room.amenities['Television'] ,'el-icon-circle-close': !room.amenities['Television']}"></i>Television</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Air-Conditioner']}"><i :class="{'el-icon-success': room.amenities['Air-Conditioner'] ,'el-icon-circle-close': !room.amenities['Air-Conditioner']}"></i>Air-Conditioner</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Refrigerator']}"><i :class="{'el-icon-success': room.amenities['Refrigerator'] ,'el-icon-circle-close': !room.amenities['Refrigerator']}"></i>Refrigerator</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Sofa']}"><i :class="{'el-icon-success': room.amenities['Sofa'] ,'el-icon-circle-close': !room.amenities['Sofa']}"></i>Sofa</div>
                            </el-col>
                        </el-row>
                        <el-row  class="margin-top10">
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Smoke-Free']}"><i :class="{'el-icon-success': room.amenities['Smoke-Free'] ,'el-icon-circle-close': !room.amenities['Smoke-Free']}"></i>Smoke-Free</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Pet-Friendly']}"><i :class="{'el-icon-success': room.amenities['Pet-Friendly'] ,'el-icon-circle-close': !room.amenities['Pet-Friendly']}"></i>Pet-Friendly</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Child-Friendly']}"><i :class="{'el-icon-success': room.amenities['Child-Friendly'] ,'el-icon-circle-close': !room.amenities['Child-Friendly']}"></i>Child-Friendly</div>
                            </el-col>
                            <el-col :sm="12"  :lg="6">
                                <div class="alignLeft" :class="{'opty':!room.amenities['Great-View']}"><i :class="{'el-icon-success': room.amenities['Great-View'] ,'el-icon-circle-close': !room.amenities['Great-View']}"></i>Great-View</div>
                            </el-col>
                        </el-row>
                     </div>
                </div>
            </el-col>
        </el-row>
      </div>
  </el-main>
		<!-- dataFormForm -->
		<bookingDialog
			:roomId="roomId"
			:dialogVisible="dialogVisible"
            :bookingForm="bookingForm"
			@closeDialog="closeDialog"
		/>
</el-container>

</template>

<script>
import { getRoomsDetail } from "../RoomApi"
import bookingDialog from '@/components/bookingDialog.vue';
export default {
  components: { bookingDialog },
  name: 'roomdetail',
  data() {
    return {
    dialogVisible: false,
    room: [],
    roomId: '',
    bookingForm: {
        name: '',
        tel: '',
        date: '',
    },
      srcList: [
        'https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        'https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
      ]
    }
  },  
  watch: { 
     '$route.name': {
        handler: function() {
           this.roomId = this.$route.params.id;
           this.checkRouterName();
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
        // 訂房
        booking() {
            this.dialogVisible = true;
        },
        // 取得單一房型資料
        getDetail(newValue, oldValue) {
            if (this.$route.params.id){
                getRoomsDetail(this.$route.params.id)
                    .then(res => {
                        this.room = res.data.room[0];
                         console.log(this.room);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        },
        // Router
        checkRouterName() {
            if ((this.$route.name).indexOf('roomdetail') >= 0) {
                this.getDetail(this.$route.name);
                this.dataId = this.$route.params.id;
            }
        },
        closeDialog() {
            this.dialogVisible = false;
        }
    },

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

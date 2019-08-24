<template>
  <el-container>
  <el-header class="header">
      <router-link to="/"><h2><i class="material-icons">face</i></h2></router-link>
  </el-header>
  <el-main class="content">
      <div class="roomdeatil" v-if="room">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div class="grid-content bg-purple">
                      <el-carousel height="680px"  trigger="click" direction="vertical" :autoplay="true" >
                        <el-carousel-item v-for="item in room.imageUrl" :key="item">
                            <div class="imgBox">
                                <img class="image" :src="item"></img>
                            </div>
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
                                <div class="bookingForm">
                                    <el-form :model="bookingForm" :rules="rules" ref="bookingForm">
                                        <el-form-item  prop="name">
                                            <el-input  prefix-icon="el-icon-user-solid" placeholder="your Name" v-model="bookingForm.name"></el-input>
                                        </el-form-item>
                                        <el-form-item  prop="tel">
                                            <el-input  prefix-icon="el-icon-phone" placeholder="your phone" v-model="bookingForm.tel"></el-input>
                                        </el-form-item>
                                        <el-form-item prop="date">
                                            <HotelDatePicker
                                             :startDate="new Date( starDay )"
                                             :endDate="new Date( endDay )"
                                             :disabledDates="bookedDate"
                                             @check-out-changed="checkOutChanged"
                                             @check-in-changed="checkInChanged"
                                             >
                                            </HotelDatePicker>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button 
                                            style="width:100%" 
                                            type="info" 
                                            plain 
                                            @click="booking(room.id)"
                                            v-loading.fullscreen.lock="fullscreenLoading"
                                            >
                                                BOOKING ROOM
                                            </el-button>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button 
                                            style="width:100%" 
                                            type="danger" 
                                            plain 
                                            @click="delBooking()"
                                            v-loading.fullscreen.lock="fullscreenLoading"
                                            >
                                                DELETE DATA
                                            </el-button>
                                        </el-form-item>
                                    </el-form>
                                    <div class="roomDesc alignLeft">
                                        <ul>
                                            <li>weekday: {{ room.normalDayPrice | toCurrency }} / per Night</li>
                                            <li>weekend: {{ room.holidayPrice | toCurrency }} / per Night</li>
                                        </ul>
                                    </div>                               
                                </div>
                            </div>
                        </el-col>
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
            :holidays="holidays"
            :weekdays="weekdays"
            :holiayPrice="holiDayPrice" 
            :weekdayPrice="weekdayPrice" 
			@closeDialog="closeDialog"
		/>
</el-container>

</template>

<script>
import { getRoomsDetail, bookingDel } from "../RoomApi"
import bookingDialog from '@/components/bookingDialog.vue';
import HotelDatePicker from 'vue-hotel-datepicker';
import { homedir } from 'os';
export default {
  components: { bookingDialog, HotelDatePicker },
  name: 'roomdetail',
  data() {
    return {
        fullscreenLoading: false,
        dialogVisible: false,
        room: [],
        roomId: '',
        bookingForm: {
            name: '',
            tel: '',
            day: [],
            start: '',
            end:'',
        },
        rules: { // 表單驗證
          name: [
            { required: true, message: '請輸入訂房大名', trigger: 'blur' },
            { min: 1, max: 20, message: '1~20 words', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '請輸入連絡電話', trigger: 'blur' },
            { min: 5, max: 10, message: '號碼必須5~10碼', trigger: 'blur' }
          ],
          date: [
            { validator: this.checkDatePick, trigger: 'blur' }
          ],
        },
        starDay: '',
        endDay: '', // 只能訂90內的日期設定
        bookedDate: [], // 存放已經被預定的日期
        bookedList: [],
        holidays: 0, // 計算預定假日幾晚
        weekdays: 0, // 計算預定平日幾晚
        holiDayPrice: 0,
        weekdayPrice: 0,
    }
  },
  created() {
      this.endDay = this.addDaysSet(90);
      this.starDay = this.addDaysSet(1);
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
        booking(roomId) {
            this.$refs['bookingForm'].validate((valid) => {
                if (valid) {
                    // 處理訂房的東西
                    this.calDate(this.bookingForm.start, this.bookingForm.end);
                    this.dialogVisible = true;

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 取得單一房型資料
        getDetail(newValue, oldValue) {
            this.fullscreenLoading = true;
            if (this.$route.params.id){
                getRoomsDetail(this.$route.params.id)
                    .then(res => {
                        this.room = res.data.room[0];
                        this.weekdayPrice = this.room.normalDayPrice;
                        this.holiDayPrice = this.room.holidayPrice;
                        // 只要已被預訂的日期
                        this.bookedList = res.data.booking 
                        const dateList = Object.values(this.bookedList).map(item => item.date);
                        this.bookedDate = dateList
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            this.fullscreenLoading = false;
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
            this.$router.push({
              name: 'bookingFinish',
            }); 
        },
        // 日期+幾天後
        addDaysSet(AddDayCount) {
            var dd = new Date();  
            dd.setDate(dd.getDate()+AddDayCount);//獲得AddDayCount天後的日期  
            var y = dd.getFullYear();   
            var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//獲得目前月份的日期，不足10補0  
            var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//獲得當前日期，不足10補0  
            return y+"-"+m+"-"+d; 
        },
        // 處理預約時間~計算住的平/假日共幾天
        calDate (start, end) {
            this.bookingForm.date = [];
            let holidays = 0;
            let weekdays = 0;
            let from = start ? new Date(start) : this.bookingForm.start,
                to = end ? new Date(end): this.bookingForm.end;
            while (from < to) {
                let day = from.getDay();
                if((day === 6) || (day ===0)) {
                    holidays++;
                }
                else {
                    weekdays++;
                }
                this.dateFormat(from);
                this.bookingForm.day.push(this.dateFormat(from));
                from.setDate(from.getDate() +1);
            }
            this.holidays = holidays;
            this.weekdays = weekdays;
        },
        dateFormat(date) {
            let y = date.getFullYear().toString(),
                m = (date.getMonth() +1 ).toString(),
                d = date.getDate().toString();
            // add zero
            m = (m.length === 1) ? '0' + m : m;
            d = (d.length === 1) ? '0' + d : d;
            //this.bookingForm.day.push(y + '-' + m + '-' + d)
            return y + '-' + m + '-' + d;
        },
        checkOutChanged (val) {
            this.bookingForm.end = val;
        },
        checkInChanged (val) {
            this.bookingForm.start = val;
        },
        checkDatePick(rule, value, callback) {
            if (this.bookingForm.start && this.bookingForm.end) {
                if (this.bookedDate.indexOf(this.dateFormat(this.bookingForm.start)) < 0) {
                    callback();
                } else {
                    callback('黃道吉日已被訂走囉!請重選日期啦');
                }
            } else {
                callback('請選入住&退房日期唷!');
            }
        },
        // 清除所有預約
        delBooking() {
            this.fullscreenLoading = true;
            bookingDel()
                .then(res => {
                    console.log(res.data);
                        this.$notify({
                          title: '完成',
                          message: 'Booking資料已清空',
                          type: 'success',
                        });
                    this.fullscreenLoading = false
                })
                .catch(err => {
                    console.log(err);
            })
        },
    }
}
</script>
<style scoped>
.header {
    border-bottom: 1px rgb(211, 211, 211) solid;
    min-height: 80px;
}
.header h2 {
    padding-top: 10px;
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
    padding:10px 20px;
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
a {
    text-decoration: none;
    color:#2c3e50;
}
.imgBox {
  width:100%;
  height:680px;
  overflow: hidden;
}
.imgBox .image {
  object-fit: cover;
  height: 680px;
}
</style>

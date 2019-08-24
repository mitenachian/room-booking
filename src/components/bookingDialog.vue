<template>
  <div class="bookingDialog">
      <el-dialog
        title="您的訂房資訊"
        :visible.sync="visible" :show="visible"
        @close="closeDialog()">
        <div>
          <span> 訂房大名: {{bookingForm.name}} | 聯絡電話:{{bookingForm.tel}}</span>
          <el-divider></el-divider>
          <span>入住日期: {{ dayFormat(bookingForm.start) }} / </span> 
          <span>退房日期: {{ dayFormat(bookingForm.end) }}</span>
          <el-divider></el-divider>
          <span>假日:{{weekdays}} 晚 * {{weekdayPrice | toCurrency}} / </span>
          <span>平日:{{holidays}} 晚 * {{holiayPrice | toCurrency}}</span>
          <el-divider></el-divider>
          <span>總額: {{total | toCurrency}} (已含手續費: {{ fee | toCurrency}})</span>
        </div>
        
        <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="closeDialog()">取消</el-button>
            <el-button type="info" @click="sendBooking()" v-loading.fullscreen.lock="loading">確定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import { roomBooking } from "../RoomApi"
export default {
  name:'bookingDialog',
  props: {
    dialogVisible: Boolean,
    bookingForm: Object,
    roomId: String,
    holidays: Number,
    weekdays: Number,
    holiayPrice: Number,
    weekdayPrice: Number,
  },
  data() {
      return {
          loading: false,
          visible : false,
          fee: 500,
          bookedForm: {
            name: this.bookingForm.name,
            tel: this.bookingForm.tel,
            'date': this.bookingForm.day,
          },
      }
  },
  methods: {
	closeDialog() {
		  this.$emit('closeDialog');
  },
    changeVisible() {
		  this.visible = this.dialogVisible;
  },
  sendBooking() {
      this.bookedForm = {
        name: this.bookingForm.name,
        tel: this.bookingForm.tel,
        'date': this.bookingForm.day,
      },
      console.log(this.bookedForm);
      this.loading = true;
      roomBooking( this.roomId, this.bookedForm)
      .then(res => {
        console.log(res.data);
        this.visible = false;
        // this.$notify({
        //   title: '訂房完成',
        //   message: 'COZY ROOM 期待與您的相見!',
        //   type: 'success',
        //   position: 'bottom-right'
        // });
        this.$alert('COZY ROOM 期待與您的相見!', '訂房完成', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$router.go()  
          }
        });
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.$alert('欠修理中ˊ<_ˋ', '訂房失敗', {
          confirmButtonText: 'CLOSE',
          callback: action => {
            this.$router.go()  
          }
        });
      })
  },
  // 時間字串處理
  dayFormat(date) {
      if(date) {
            return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
          }
      },
  
  },
  computed: {
    total() {
      return ( (this.holidays * this.holiayPrice) + (this.weekdays * this.weekdayPrice) ) + 500;
    }
  },
  watch: {
     'dialogVisible': {
        handler: function() {
            this.changeVisible();
        },
        immediate: true
      }
    }
}
</script>
<style scoped>
.bookingDialog {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>

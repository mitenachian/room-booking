<template>
  <div class="bookingDialog">
      <el-dialog
        title="訂房資訊"
        :visible.sync="visible" :show="visible"
        width="30%"
        @close="closeDialog()">
        <span>傳送過來房型資料  平日住幾天 / 假日住幾天 / 應付金額</span>
        <span v-for="(item, index) in bookingForm" :key="index">{{item}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="danger" @click="closeDialog()">取消</el-button>
            <el-button type="info" @click="closeDialog()">確定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name:'bookingDialog',
  props: {
    dialogVisible: Boolean,
    bookingForm: Object,
    roomId: String,
  },
  data() {
      return {
          visible : false,
      }
  },
  methods: {
	closeDialog() {
		this.$emit('closeDialog');
    },
    changeVisible() {
		this.visible = this.dialogVisible;
	}
  },
  watch: {
     'dialogVisible': {
        handler: function() {
            this.changeVisible();
        },
        immediate: true
      }
    },
}
</script>
<style scoped>
.bookingDialog {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>

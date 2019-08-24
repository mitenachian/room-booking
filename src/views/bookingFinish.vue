<template>
  <el-container>
  <el-header class="header">
      <router-link to="/"><h2><i class="material-icons">face</i></h2></router-link>
  </el-header>
    <h3 class="title">BOOKING SUCCESSED</h3>
    <div>
      <h2>COZY ROOM 期待與您相見, 若有任何問題歡迎來信詢問</h2>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'bookingFinish',
}
</script>
<style scoped>
.title {
  font-family:  'Amatic SC', cursive;
  font-size: 100px;
}
.header {
    border-bottom: 1px rgb(211, 211, 211) solid;
    min-height: 80px;
}
.header h2 {
    padding-top: 10px;
    font-family:  'Amatic SC', cursive;
}
a{
    text-decoration: none;
    color:#2c3e50;
}

</style>

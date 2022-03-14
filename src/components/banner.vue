<template>
  <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in banner" :key="item.title">
        <div class="content">
            {{item.content}}
        </div>
        <img :src="item.img" alt="">
      </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    props: {
        banner:{
            type:Array,
            default:function() {
                return []
            }
        }
    }
}
</script>

<style scoped lang="less">
 .el-carousel {
     position: relative;
     .content {
         position: absolute;
         top: 30%;
         left: 20%;
         width: 350px;
         padding: 10px;
         background: rgba(0, 0, 0, .3);
         color: #fff
     }
 }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img {
      width: 100%;
      height: 500px;
  }
</style>
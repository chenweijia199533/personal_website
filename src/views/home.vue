<template>
    <div class="home">
      <Banner :banner="swiper"/>
      <Lanmei/>
    </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import Lanmei from '@/components/Blueberries.vue'
export default {
  data () {
    return {
      swiper:[]
    }
  },
  components: {
    Banner,
    Lanmei
  },
  created () {
    this.$api.getSwiper().then(
      res => {
        if(res.status ===200) {
          let banner = res.data.banner
          for(let i=0;i<banner.length;i++) {
            banner[i].img = banner[i].img.replace('http://www.wwtliu.com/sxtstu','http://iwenwiki.com/api')
          }
          this.swiper = banner
        }
      }
    )
  }
}
</script>

<style scoped lang="less">
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
</style>
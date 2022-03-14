<template>
  <div class="lanmei">
    <h2 style="text-align: center">蓝莓</h2>
    <ul class="list">
      <li v-for="(obj, index) in list" :key="index">
        <div class="item">
          <img :src="obj.img" alt="" />
          <span>{{ obj.title }}</span>
        </div>
      </li>
    </ul>
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      @handleCurrentChange="getPage"
    />
  </div>
</template>

<script>
import MyPagination from "./MyPagination.vue";
export default {
  data() {
    return {
      list: [],
      total: 1,
      pageSize: 10,
      page: 0,
    };
  },
  created() {
    this.getLmdata(1);
  },
  components: {
    MyPagination,
  },
  methods: {
    //获取蓝莓接口数据
    getLmdata(page) {
      this.$api.getLanmei({ blueBerryjam_id: page }).then((res) => {
        console.log(res.data);
        let imgdata = res.data.blueBerryJam;
        for (let i = 0; i < imgdata.length; i++) {
          imgdata[i].img = imgdata[i].img.replace(
            "http://iwen.wiki/sxtstu",
            "http://iwenwiki.com/api"
          );
        }
        this.list = imgdata;
        this.total = res.data.maxPage;
        this.pageSize = 1;
      });
    },
    //蓝莓分页展示
    getPage(num) {
      this.getLmdata(num);
      console.log(num);
      document.scrollingElement.scrollTop = 560;
    },
  },
};
</script>

<style scoped lang="less">
.lanmei {
  width: 1200px;
  margin: 0 auto;
}
.list {
  display: flex;
  flex-wrap: wrap;
  li {
    position: relative;
    box-sizing: border-box;
    width: 20%;
    height: 220px;
    padding: 10px;
    margin-bottom: 20px;
    .item {
      background: #eee;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        right: 20px;
        bottom: 5px;
        background: #fff;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
        padding: 4px;
        border-radius: 4px;
      }
    }
  }
}
</style>
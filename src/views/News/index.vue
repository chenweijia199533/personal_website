<template>
  <div class="news">
    <el-tabs
      v-model="activeName"
      type="border-card"
      @tab-click="handleClick"
      style="width: 700px"
    >
      <el-tab-pane label="要闻" name="first" stretch="true">
        <ul class="newslist">
          <li v-for="item in yaowenlist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <p class="title">{{ item.title }}</p>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getPage"
        />
      </el-tab-pane>
      <el-tab-pane label="国内" name="second">
        <ul class="newslist">
          <li v-for="item in guoneilist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <a class="title" :href="item.url" target="_blank">{{
                item.title
              }}</a>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getGuonei"
        />
      </el-tab-pane>
      <el-tab-pane label="军事" name="third">
        <ul class="newslist">
          <li v-for="item in juishilist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <a class="title" :href="item.url" target="_blank">{{
                item.title
              }}</a>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getJunshi"
        />
      </el-tab-pane>
      <el-tab-pane label="国际" name="fourth">
        <ul class="newslist">
          <li v-for="item in guojilist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <a class="title" :href="item.url" target="_blank">{{
                item.title
              }}</a>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getGuoji"
        />
      </el-tab-pane>
      <el-tab-pane label="财经" name="fifth">
        <ul class="newslist">
          <li v-for="item in caijinglist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <a class="title" :href="item.url" target="_blank">{{
                item.title
              }}</a>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getCaijing"
        />
      </el-tab-pane>
      <el-tab-pane label="科技" name="sixth">
        <ul class="newslist">
          <li v-for="item in kejilist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <a class="title" :href="item.url" target="_blank">{{
                item.title
              }}</a>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getKeji"
        />
      </el-tab-pane>
      <el-tab-pane label="娱乐" name="seventh">
        <ul class="newslist">
          <li v-for="item in yulelist" :key="item.docid">
            <img :src="item.imgsrc" alt="" />
            <div class="right">
              <a class="title" :href="item.url" target="_blank">{{
                item.title
              }}</a>
              <div class="buttom">
                <p class="source">来源：{{ item.source }}</p>
                <p class="time">时间：{{ item.ptime }}</p>
                <p class="read">阅读：{{ item.commentCount }}</p>
              </div>
            </div>
          </li>
        </ul>
        <MyPagination
          :total="total"
          :pageSize="pageSize"
          @handleCurrentChange="getYule"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MyPagination from "@/components/MyPagination.vue";
import { yaowen, guonei, junshi, guoji, caijing, keji, yule } from "@/api/typr";
export default {
  data() {
    return {
      activeName: "first",
      yaowenlist: [],
      guoneilist: [],
      juishilist: [],
      guojilist: [],
      caijinglist: [],
      kejilist: [],
      yulelist: [],
      total: 31,
      pageSize: 1,
    };
  },
  components: {
    MyPagination,
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab);
    },
    open(url) {
      // window.location.href = url;
    },
    getPage(num) {
      this.$api.getNews(yaowen, num).then((res) => {
        this.yaowenlist = res;
      });
    },
    getGuonei(num) {
      this.$api.getNews(guonei, num).then((res) => {
        this.guoneilist = res;
      });
    },
    getJunshi(num) {
      this.$api.getNews(junshi, num).then((res) => {
        this.juishilist = res;
      });
    },
    getGuoji(num) {
      this.$api.getNews(guoji, num).then((res) => {
        this.guojilist = res;
      });
    },
    getCaijing(num) {
      this.$api.getNews(guoji, num).then((res) => {
        this.caijinglist = res;
      });
    },
    getKeji(num) {
      this.$api.getNews(guoji, num).then((res) => {
        this.kejilist = res;
      });
    },
    getYule(num) {
      this.$api.getNews(guoji, num).then((res) => {
        this.guojilist = res;
      });
    },
  },
  created() {
    this.$api.getNews(yaowen, 1).then((res) => {
      this.yaowenlist = res;
    });
    this.$api.getNews(guonei, 1).then((res) => {
      this.guoneilist = res;
      console.log("this.guoneilist", this.guoneilist);
    });
    this.$api.getNews(junshi, 1).then((res) => {
      this.juishilist = res;
      for (let i = 0; i < this.juishilist.length; i++) {
        this.juishilist[i].url;
      }
    });
    this.$api.getNews(guoji, 1).then((res) => {
      this.guojilist = res;
    });
    this.$api.getNews(caijing, 1).then((res) => {
      this.caijinglist = res;
    });
    this.$api.getNews(keji, 1).then((res) => {
      this.kejilist = res;
    });
    this.$api.getNews(yule, 1).then((res) => {
      this.yulelist = res;
    });
    this.$api.getNews(caijing, 1).then((res) => {
      this.caijinglist = res;
    });
  },
};
</script>

<style scoped lang='less'>
.news {
  width: 1200px;
  margin: 20px auto;
  background-color: #eee;
  .el-tabs {
    margin: 0 auto;
  }
}
.newslist {
  li {
    display: flex;
    margin-bottom: 5px;
    img {
      width: 140px;
      height: 88px;
    }
    .right {
      flex: 1;
      position: relative;
      margin-left: 10px;
      a:hover {
        color: red;
      }
      .buttom {
        position: absolute;
        display: flex;
        bottom: 5px;
        .source {
          color: #bbb;
          font-size: 10px;
          margin-right: 5px;
        }
        .time,
        .read {
          font-size: 8px;
          color: #bbb;
          margin-top: 1px;
        }
        .read {
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
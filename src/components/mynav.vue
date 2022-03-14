<template>
  <div class="nav">
    <div class="search_song">
      <input type="text" v-model="inpVal" />
      <button @click="search(inpVal)">搜索歌曲</button>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="selectindex"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
      <el-menu-item index="/music">音乐</el-menu-item>
      <el-menu-item index="/atricles">乐章</el-menu-item>
      <!-- <el-menu-item index="/songs">歌曲</el-menu-item> -->
      <div class="logininfo">
        <el-button v-if="!userinfo.username" size="mini">
          <router-link to="/login">登录</router-link>
        </el-button>
        <template v-else>
          <span> 欢迎：{{ userinfo.username }} </span>
          <i class="el-icon-switch-button" @click="loginout"></i>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      inpVal: "",
    };
  },
  computed: {
    ...mapState("LoginModle", ["userinfo"]),
  },
  methods: {
    ...mapMutations("LoginModle", ["clearUser"]),
    selectindex(index, path) {
      localStorage.setItem("index", index);
    },
    loginout() {
      this.clearUser();
      localStorage.removeItem("userinfo");
      if (this.$route.path !== "/") {
        this.$router.push("/login");
      }
    },
    search() {
      console.log(typeof this.inpVal);
      this.$api
        .getSongs({
          song: this.inpVal,
        })
        .then((res) => {
          let obj = res.data.songInfo;
          this.$store.commit("LoginModle/getSonginfo", obj);
          this.$router.push("/songs");
        });
      this.inpVal = "";
    },
  },
  created() {},
};
</script>

<style scoped lang="less">
.nav {
  position: relative;
  background-color: #545c64;
  .search_song {
    position: absolute;
    top: 20px;
    right: 400px;
    z-index: 10;
  }
}
.el-menu-demo {
  width: 1200px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.logininfo {
  float: right;
  line-height: 60px;
  color: #fff;
  margin-right: 10px;
  i {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
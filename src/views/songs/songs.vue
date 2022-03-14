<template>
  <div>
    <div class="song">
      <div class="image">
        <img :src="Songinfo.song_pic" alt="" />
      </div>
      <div class="songinfo">
        <p>歌名：{{ Songinfo.song_title }}</p>
        <p>播放量：{{ Songinfo.play_num }}</p>
        <div class="words">
          <div class="beizhu">备注：</div>
          <span>{{ Songinfo.song_intro_cont }}</span>
        </div>

        <audio
          :src="Songinfo.song_source"
          controls
          class="el-icon-video-play"
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("LoginModle", ["Songinfo"]),
  },
  created() {
    if (!this.Songinfo) {
      this.$router.push("/");
    }
    this.Songinfo.song_pic =
      "http://iwenwiki.com/api/blueberrypai/" + this.Songinfo.song_pic;
    this.Songinfo.song_source = this.Songinfo.song_source.replace(
      "http://iwen.wiki/sxtstu/blueberrypai/",
      "http://iwenwiki.com/api/blueberrypai/"
    );
  },
  methods: {},
};
</script>

<style scopeed lang="less">
.song {
  display: flex;

  margin: 50px auto;
  .image {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .songinfo {
    width: 500px;
    height: 300px;
    margin-left: 20px;
    .words {
      .beizhu {
        float: left;
      }
    }
    span {
      padding: 0 0 0 10px;
    }
    audio {
      margin-top: 15px;
    }
  }
}
</style>

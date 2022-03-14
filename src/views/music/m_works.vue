<template>
  <div class="container">
    <!-- 乐章轮播图 start-->
    <div>
      <h2 style="text-align: center">乐章</h2>
      <br />
      <el-carousel trigger="click" height="450px">
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in banner.slice(0, 4)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
                <div class="mess_like">
                  <i class="el-icon-thumb"></i><span>{{ itemi.like }}</span>
                  <i class="el-icon-chat-dot-round"></i
                  ><span> {{ itemi.message }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in banner.slice(4, 8)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
                <div class="mess_like">
                  <i class="el-icon-thumb"></i><span>{{ itemi.like }}</span>
                  <i class="el-icon-chat-dot-round"></i
                  ><span> {{ itemi.message }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in banner.slice(8, 12)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
                <div class="mess_like">
                  <i class="el-icon-thumb"></i><span>{{ itemi.like }}</span>
                  <i class="el-icon-chat-dot-round"></i
                  ><span> {{ itemi.message }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in banner.slice(12)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
                <div class="mess_like">
                  <i class="el-icon-thumb"></i><span>{{ itemi.like }}</span>
                  <i class="el-icon-chat-dot-round"></i
                  ><span> {{ itemi.message }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 乐章轮播图 end-->
    <!-- 听说模块 start-->
    <div class="listen">
      <h2 style="text-align: center">听说</h2>
      <i class="el-icon-service"> &nbsp; LISTENING</i>
      <div class="content">
        <ul class="forData">
          <li
            class="forData_li"
            v-for="item in listen.slice(0, 2)"
            :key="item.title"
          >
            <div class="l_image">
              <img :src="item.img" alt="" />
            </div>
            <div class="l_content">
              <p style="margin-bottom: 5px; color: #99cccc">
                {{ item.writer }}
              </p>
              <h4 style="margin-bottom: 5px">{{ item.title }}</h4>
              <div>{{ item.content }}</div>
            </div>
            <div class="l_Triangle"></div>
          </li>
          <li
            class="forData_li"
            v-for="(item, ind) in listen.slice(2, 4)"
            :key="ind"
          >
            <div class="l_content">
              <p style="margin-bottom: 5px; color: #99cccc">
                {{ item.writer }}
              </p>
              <h4 style="margin-bottom: 5px">{{ item.title }}</h4>
              <div>{{ item.content }}</div>
            </div>
            <div class="l_image">
              <img :src="item.img" alt="" />
            </div>
            <div class="r_Triangle"></div>
          </li>
        </ul>
        <ul class="lastData">
          <li v-for="item in listen.slice(4, 5)" :key="item.title">
            <div class="last_image">
              <img :src="item.img" alt="" />
            </div>
            <div class="last_content">
              <p style="margin-bottom: 5px; color: #99cccc">
                {{ item.writer }}
              </p>
              <h4 style="margin-bottom: 5px">{{ item.title }}</h4>
              <div>{{ item.content }}</div>
            </div>
            <div class="t_Triangle"></div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 听说模块 end-->
    <!-- 乐趣模块 start-->
    <div class="fun">
      <h2 style="text-align: center">乐趣</h2>
      <i class="el-icon-cold-drink"> &nbsp; INTERESTING</i>
      <br />
      <br />
      <el-carousel trigger="click" height="450px">
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in funlist.slice(0, 4)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in funlist.slice(4, 8)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in funlist.slice(8, 12)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content">
            <div
              class="layout"
              v-for="itemi in funlist.slice(12)"
              :key="itemi.title"
            >
              <div class="image">
                <img :src="itemi.img" alt="" />
              </div>
              <div class="info">
                <p>{{ itemi.title }}</p>
                <span class="writer">{{ itemi.writer }}</span>
                <span class="timer"
                  ><i class="el-icon-alarm-clock"></i> {{ itemi.time }}</span
                ><br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 乐趣模块 end-->
    <!-- 聊聊模块 end-->
    <div class="talk">
      <h2 style="text-align: center">聊聊</h2>
      <i class="el-icon-cold-drink"> &nbsp; TALKING</i>
      <br />
      <br />
      <el-carousel trigger="click" height="400px">
        <el-carousel-item>
          <div class="t_content">
            <div
              class="t_layout"
              v-for="(itemi, ind) in talklist.slice(0, 6)"
              :key="ind"
            >
              <div class="t_image">
                <img :src="talkimg" alt="" />
              </div>
              <div class="t_info">
                <p>
                  <strong> {{ itemi.title }}？</strong>
                </p>
                <br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="t_content">
            <div
              class="t_layout"
              v-for="(itemi, ind) in talklist.slice(6, 12)"
              :key="ind"
            >
              <div class="t_image">
                <img :src="talkimg" alt="" />
              </div>
              <div class="t_info">
                <p>
                  <strong> {{ itemi.title }}？</strong>
                </p>
                <br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="t_content">
            <div
              class="t_layout"
              v-for="(itemi, ind) in talklist.slice(12)"
              :key="ind"
            >
              <div class="t_image">
                <img :src="talkimg" alt="" />
              </div>
              <div class="t_info">
                <p>
                  <strong> {{ itemi.title }}？</strong>
                </p>
                <br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 聊聊模块 start-->
    <!-- 游记模块 star-->
    <div class="travelnote">
      <h2 style="text-align: center">游记</h2>
      <i class="el-icon-cold-drink"> &nbsp; TRAVELNOTE</i>
      <br />
      <br />
      <el-carousel trigger="click" height="250px">
        <el-carousel-item>
          <div class="tra_content">
            <div
              class="tra_layout"
              v-for="(itemi, ind) in travelnotelist.slice(0, 4)"
              :key="ind"
            >
              <div class="tra_image">
                <img :src="travelnoteimg" alt="" />
              </div>
              <div class="tra_info">
                <p>
                  <strong> {{ itemi.title }}</strong>
                </p>
                <br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="tra_content">
            <div
              class="tra_layout"
              v-for="(itemi, ind) in travelnotelist.slice(4, 8)"
              :key="ind"
            >
              <div class="tra_image">
                <img :src="travelnoteimg" alt="" />
              </div>
              <div class="tra_info">
                <p>
                  <strong> {{ itemi.title }}</strong>
                </p>
                <br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="tra_content">
            <div
              class="tra_layout"
              v-for="(itemi, ind) in travelnotelist.slice(8)"
              :key="ind"
            >
              <div class="tra_image">
                <img :src="travelnoteimg" alt="" />
              </div>
              <div class="tra_info">
                <p>
                  <strong> {{ itemi.title }}</strong>
                </p>
                <br />
                <span>{{ itemi.content }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 游记模块 end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [], //存放乐章数据
      listen: [], //存放听说数据
      funlist: [],
      talklist: [],
      talkimg: "",
      travelnotelist: [],
      travelnoteimg: "",
    };
  },
  created() {
    //获取乐章数据
    this.$api.getMusicw().then((res) => {
      let Music_data = res.data.movement;
      for (let i = 0; i < Music_data.length; i++) {
        Music_data[i].img = Music_data[i].img.replace(
          "http://iwen.wiki/sxtstu",
          "http://iwenwiki.com/api"
        );
        Music_data[i].time = this.$moment(Music_data[i].time).format(
          "YYYY-MM-DD HH:mm"
        );
        this.banner = Music_data;
      }
    });
    // 获取听说数据
    this.$api.getListen().then((res) => {
      let l_data = res.data.listening;
      for (let i = 0; i < l_data.length; i++) {
        l_data[i].img = l_data[i].img.replace(
          "http://iwen.wiki/sxtstu",
          "http://iwenwiki.com/api"
        );
      }
      this.listen = l_data;
    });
    // 获取乐趣数据
    this.$api.getFun().then((res) => {
      let fun_data = res.data.interesting;
      for (let i = 0; i < fun_data.length; i++) {
        fun_data[i].img = fun_data[i].img.replace(
          "http://iwen.wiki/sxtstu",
          "http://iwenwiki.com/api"
        );
        fun_data[i].time = this.$moment(fun_data[i].time).format(
          "YYYY-MM-DD HH:mm"
        );
        this.funlist = fun_data;
      }
    });
    //获取聊聊数据
    this.$api.getTalk().then((res) => {
      this.talklist = res.data.chating;
      this.talkimg = res.data.titleImg.replace(
        "http://iwen.wiki/sxtstu",
        "http://iwenwiki.com/api"
      );
    });
    this.$api.getTravetNote().then((res) => {
      console.log(res.data);
      this.travelnotelist = res.data.travelnote;
      this.travelnoteimg = res.data.titleImg.replace(
        "http://iwen.wiki/sxtstu",
        "http://iwenwiki.com/api"
      );
    });
  },
};
</script>

<style scoped lang="less">
.container {
  width: 1200px;
  margin: 20px auto;
  //   乐章样式
  .content {
    display: flex;
    flex-wrap: wrap;
    .layout {
      display: flex;
      width: 50%;
      height: 50%;
      .image {
        float: left;
        margin: 0 10px;
        img {
          width: 210px;
          height: 210px;
        }
      }
      .info {
        float: left;
        position: relative;
        .writer {
          display: inline-block;
          color: skyblue;
          padding-right: 20px;
          margin: 5px 0;
        }
        .mess_like {
          position: absolute;
          bottom: 0;
          right: 5px;
          span {
            font-size: 5px;
          }
        }
      }
    }
  }
  //   听说样式
  .listen {
    position: relative;
    margin-top: 20px;
    padding: 10px;
    i {
      position: absolute;
      top: 50px;
      left: 45%;
    }
    .content {
      margin-top: 50px;
      //   background-color: skyblue;
      .forData {
        display: block;
        float: left;
        .forData_li {
          position: relative;
          display: flex;
          float: left;
          width: 472px;
          height: 277px;
          //   border: 1px solid black;
          background-color: #eee;
          .l_imagge {
            float: left;
            width: 236px;
          }
          .l_content {
            float: left;
            width: 236px;
            padding: 40px 20px;
          }
          .l_Triangle {
            position: absolute;
            top: 50px;
            left: 220px;
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-right: 20px solid #eee;
          }
          .r_Triangle {
            position: absolute;
            top: 50px;
            left: 230px;
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 20px solid #eee;
          }
        }
      }
      .lastData {
        position: absolute;
        left: 954px;
        width: 236px;
        height: 554px;
        background-color: #eee;
        .lastData_li {
          width: 472px;
          height: 277px;
        }
        .last_image {
          height: 277px;
          img {
            width: 236px;
            height: 277px;
          }
        }
        .last_content {
          padding: 40px 20px;
          height: 277px;
        }
        .t_Triangle {
          position: absolute;
          top: 260px;
          right: 130px;
          width: 0;
          height: 0;
          border-right: 20px solid transparent;
          border-bottom: 20px solid #eee;
          border-left: 20px solid transparent;
        }
      }
    }
  }
  //   乐趣样式
  .fun {
    margin-top: 20px;
    position: relative;
    margin-top: 20px;
    padding: 10px;
    i {
      position: absolute;
      top: 50px;
      left: 45%;
    }
  }
  //   聊聊样式
  .talk {
    position: relative;
    margin-top: 20px;
    padding: 10px;
    i {
      position: absolute;
      top: 50px;
      left: 45%;
    }
    .t_content {
      display: flex;
      flex-wrap: wrap;
      .t_layout {
        display: flex;
        width: 33%;
        height: 50%;
        .t_image {
          margin-top: 20px;
          padding-left: 10px;
          width: 50px;
          height: 50px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .t_info {
          padding: 40px 10px 10px 30px;
        }
      }
    }
  }
  //   游记样式
  .travelnote {
    position: relative;
    margin-top: 20px;
    padding: 10px;
    i {
      position: absolute;
      top: 50px;
      left: 45%;
    }
    .tra_content {
      display: flex;
      justify-content: space-around;
      .tra_layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .tra_image {
        }
        .tra_info {
          padding: 20px;
        }
      }
    }
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
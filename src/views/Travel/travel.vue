<template>
  <div class="travel">
    <!-- 头部轮播图和搜索区 -->
    <div class="popContainer" v-show="isOut"></div>

    <div class="header">
      <el-carousel>
        <el-carousel-item v-for="(item, index) in img" :key="index">
          <img :src="item.src" alt="" width="100%" height="100%" />
          <span class="context">{{ item.content }}</span>
        </el-carousel-item>
      </el-carousel>
      <div class="search">
        <el-tabs type="border-card" stretch>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-notebook-2"></i>看攻略</span>
            <div class="Strategies">
              <div class="inpt">
                <input
                  @blur="isOut = false"
                  @focus="isOut = true"
                  type="text"
                  v-model="inpVal"
                />
              </div>
              <button class="btn">
                <i class="el-icon-search"></i>
                搜索旅行攻略
              </button>
            </div>
            <div class="show-data" v-show="isShow">
              <ul>
                <li class="list">您可能要去的城市</li>
                <li
                  @click="open(obj.url)"
                  class="list"
                  v-for="(obj, index) in tarvelAdress"
                  :key="index"
                >
                  <span>{{ obj.cn_name }}</span>
                  <span class="enname">({{ obj.en_name }})</span>
                  <span class="num_hotel" v-if="obj.count > 0"
                    >{{ obj.count }}家酒店</span
                  >
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><i class="el-icon-edit-outline"></i> 做行程</span
            >
            我的行程
          </el-tab-pane>
          <el-tab-pane class="jiudian">
            <span slot="label"
              ><i class="el-icon-office-building"></i>
              特价酒店
            </span>
            <div class="content"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <!-- 推荐区 -->
    <div class="container">
      <div>
        <h2 style="text-align: center">
          <a href="" class="notice">安全提示</a>
          <span>今日推荐</span>
        </h2>
      </div>
      <ul>
        <li class="Recommended" v-for="obj in Recomd" :key="obj.data.id">
          <img :src="obj.data.pic" width="100%" height="185px" alt="" />
          <div class="info">
            <a href="" target="_blank">
              <div class="tag">
                <span>{{ obj.data.type }}</span>
              </div>
              <div class="subtitle">
                <p>
                  {{ obj.data.subject }}
                </p>
              </div>
              <div class="bottom">
                <span class="Re_name" v-if="obj.data.username"
                  >{{ obj.data.username }}
                </span>
                <span class="Re_name" v-if="obj.data.desc"
                  >{{ obj.data.desc }}
                </span>
                <span class="Re_name" v-else>{{ obj.data.start_pos }} </span>

                <span class="Re_read" v-if="obj.data.views"
                  >{{ obj.data.views }}浏览</span
                >
                <span class="Re_read" v-if="obj.data.tag">{{
                  obj.data.tag
                }}</span>
                <span class="Re_read" v-else v-html="obj.data.price"></span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <!-- 商城区 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          src: require("@/assets/images/1.jpg"),
          content:
            "【中国内地游记攻略】【景德镇 | 陶瓷理想国】从创意市集到艺术乡村的四日之旅",
        },
        {
          src: require("@/assets/images/2.jpg"),
          content:
            "【泰国游记攻略】「泰北记忆」文艺.小清新.水灯节.想念我们的清迈",
        },
        {
          src: require("@/assets/images/3.jpg"),
          content:
            "【葡萄牙游记攻略】航海者的国度—色彩斑斓葡萄牙(里斯本/辛特拉/阿尔科巴萨/巴塔利亚/法蒂玛/托马尔)",
        },
        {
          src: require("@/assets/images/4.jpg"),
          content:
            "【中国内地游记攻略】四万里策马入藏-最全面的自驾进出藏路线（川藏南线、川藏北线、滇藏线、中尼公路、新藏线、川藏中线、阿里大北线）",
        },
      ],
      isShow: false,
      isOut: false, //遮罩层
      isActive: true,
      inpVal: "",
      tarvelAdress: [],
      currentDate: new Date(),
      Recomd: [],
      price: [],
    };
  },
  methods: {
    open(url) {
      window.location.href = url;
    },
  },
  created() {
    this.$api.getRecommend().then((res) => {
      console.log(res.data.data);
      this.Recomd = res.data.data;
      for (let index = 0; index < this.Recomd.length; index++) {
        if (this.Recomd[index].data.price) {
          this.price = this.Recomd[index].data.price;
        }
      }
      for (let i = 0; i < this.price.length; i++) {}
    });
  },
  watch: {
    inpVal(val) {
      if (!val) {
        this.isShow = false;
        this.tarvelAdress = [];
        return;
      }
      this.$api
        .getTravel({
          keyword: val,
        })
        .then((res) => {
          console.log(res.data.data.list);
          if (res.data.data.list.length == 0) {
            this.isShow = false;
            this.tarvelAdress = [];
            return;
          } else {
            this.tarvelAdress = res.data.data.list;
            this.isShow = true;
          }
        });
    },
  },
};
</script>

<style scoped lang="less">
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.header {
  position: relative;
  .context {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #fff;
    font-size: 14px;
  }
  .search {
    position: relative;
    top: -220px;
    left: 250px;
    z-index: 10;
    width: 792px;
    height: 126px;
  }
}
.el-tabs {
  width: 792px;
  height: 126px;
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
/deep/ .el-tabs--border-card > .el-tabs__content {
  padding: 2px !important;
}

//搜索攻略
.Strategies {
  display: flex;
  background-image: linear-gradient(
    90deg,
    rgba(40, 213, 164, 0.8),
    rgba(38, 208, 181, 0.8)
  );
  padding: 15px;

  .inpt {
    input {
      flex: 1;
      box-sizing: border-box;
      border: 0;
      padding: 0 27px;
      width: 584px;
      height: 54px;
      font-size: 18px;
      border-radius: 6px;
      color: #000;
    }
  }
  .btn {
    box-sizing: border-box;
    display: inline-block;
    margin-left: 10px;
    border: 1px solid rgb(255, 254, 254);
    width: 180px;
    height: 54px;
    border-radius: 6px;
    color: #eee;
    font-weight: 600;
    font-size: 18px;
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    line-height: 54px;
  }
}
.show-data {
  width: 580px;
  // height: 240px;
  margin-left: 15px;
  background-color: #eee;
  .list {
    height: 30px;
    padding: 10px;
    line-height: 30px;
    cursor: pointer;
    .enname {
      font-size: 10px;
    }
    .num_hotel {
      float: right;
    }
  }
  .list:hover {
    background-color: #fff;
  }
}
// 特价酒店样式
.jiudian {
  .content {
    width: 792px;
    height: 87px;
    background-image: linear-gradient(
      90deg,
      rgba(83, 144, 250, 0.8),
      rgba(112, 77, 255, 0.8)
    );
  }
}

/deep/ #tab-2.is-active {
  // background-color: red !important;
  background-image: linear-gradient(
    90deg,
    rgba(83, 144, 250, 0.8),
    rgba(112, 77, 255, 0.8)
  );
  color: #fff;
  font-weight: 600;
}

// 推荐区样式
.container {
  width: 1200px;
  margin: 20px auto;
  background-color: #eee;
  min-height: 400px;
  .notice {
    background: #02db94;
    border-radius: 20px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    display: block;
    position: absolute;
    left: 77px;
    top: 510px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .Recommended {
      width: 275px;
      position: relative;
      height: 300px;
      background-color: #fff;
      margin-top: 20px;
      overflow: hidden;
      img {
        transition: all 1s;
      }
      img:hover {
        transform: scale(1.1);
      }
      .info {
        padding: 0 18px;
        border: 1px solid #ececec;
        border-top: 0;
        height: 114px;
        line-height: 24px;
        margin-top: -2px;
        overflow: hidden;
        a {
          font-weight: 700;
          color: #323232;
          .subtitle {
            margin-top: 16px;
            height: 48px;
            font-size: 16px;
            overflow: hidden;
            p {
              display: block;
            }
            p:hover {
              color: green;
            }
          }
          .tag {
            position: absolute;
            top: 10px;
            left: 20px;
            border: 1px solid #fff;
            border-radius: 13px;
            padding: 0 3px;
            color: #fff;
            font-size: 10px;
          }
          .bottom {
            margin-top: 10px;
            height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #636363;
            .Re_name {
              float: left;
              display: block;
              max-width: 40%;
              color: #636363;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .Re_read {
              float: right;
              color: #959595;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
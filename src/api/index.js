/**
 * 请求方法
 */
import base from "@/api/base";
import axios from "axios";
const api = {
  //轮播图接口
  getSwiper() {
    return axios.get(base.host + base.Swiper);
  },

  //登录接口
  getLogin(params) {
    return axios.get(base.Login, { params });
  },

  //获取蓝莓派数据
  getLanmei(params) {
    return axios.get(base.host + base.Lanmei, { params });
  },

  //新闻接口
  getNews(type, num) {
    return axios
      .get(base.news + "/" + type + "/" + (num - 1) * 10 + "-10.html")
      .then((res) => {
        let data = JSON.parse(res.data.slice(9, -1));
        return data[type];
      });
  },
  // 穷游搜索接口
  getTravel(params) {
    //传入一个keyword
    return axios.get(base.travel, { params });
  },
  // 今日推荐接口
  getRecommend(params) {
    return axios.get(base.Recommended, { params });
  },

  //获取乐章接口数据
  getMusicw() {
    return axios.get(base.host + base.music_w);
  },
  //获取听说接口
  getListen() {
    return axios.get(base.host + base.listen);
  },
  // 获取乐趣接口
  getFun() {
    return axios.get(base.host + base.fun);
  },
  //获取聊聊接口
  getTalk() {
    return axios.get(base.host + base.talk);
  },
  // 获取游记接口
  getTravetNote() {
    return axios.get(base.host + base.travelNote);
  },
  //歌曲接口
  getSongs(params) {
    return axios.get(base.host + base.songs, { params });
  },
  // 文章接口
  getArticle() {
    return axios.get(base.host + base.article);
  },
};

export default api;

/*
 * 接口配置
 */

const base = {
  host: "http://iwenwiki.com/api",
  Swiper: "/blueberrypai/getIndexBanner.php",
  Login: "http://localhost:8888/login",
  Lanmei: "/blueberrypai/getBlueBerryJamInfo.php",
  music_w: "/blueberrypai/getIndexMovement.php", //乐章
  listen: "/blueberrypai/getIndexListening.php", //听说
  fun: "/blueberrypai/getIndexInteresting.php", //乐趣
  news: "/foo/touch/reconstruct/article/list", //网易新闻接口
  travelNote: "/blueberrypai/getIndexTravelnote.php", //游记接口
  songs: "/blueberrypai/getSongInfo.php", //歌曲接口
  article: "/blueberrypai/getInterestingInfo.php", //文章接口
  travel: "/qiongyou/qcross/home/ajax?action=hotelsearch&type=1", //穷游接口，keyword=%E4%BA%91&
  Recommended:
    "/qiongyou/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e",
  talk: "/blueberrypai/getIndexChating.php",
};

export default base;

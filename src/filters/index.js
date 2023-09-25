import Vue from "vue";
import moment from "moment";

// 距离当前日期
Vue.filter('fromNow', time => {
  return moment(time).fromNow()
})


// tab 数据类型    置顶  精华  分享  问答  招聘  客户端测试
const tabsMapObj = {
  share: '分享',
  ask: '问答',
  job: '招聘',
  dev: '客户端测试'
}
Vue.filter('transfromTab', ({ top, good, tab }) => top ? "置顶" : good ? "精华" : tabsMapObj[tab])













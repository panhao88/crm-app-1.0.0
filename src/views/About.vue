<template>
  <div>
    <button @click="getDateDiff('2016-11-4 08:41:49')">time</button>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    getDateDiff(setdateTimeStamp) {
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      console.log(minute, "分");
      console.log(hour, "小时");
      console.log(day, "天");
      console.log(halfamonth, "周");
      console.log(month, "月");
      var dateTimeStamp = new Date(setdateTimeStamp);
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      // console.log(dateTimeStamp);
      // console.log(now);
      // console.log(diffValue);
      // if (diffValue < 0) {
      //   return "结束日期不能小于开始日期！";
      // }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      console.log(parseInt(monthC));
      console.log(parseInt(weekC));
      console.log(parseInt(dayC));
      console.log(parseInt(hourC));
      console.log(parseInt(minC));
      // if (monthC >= 1) {
      //   result = "发表于" + parseInt(monthC) + "个月前";
      // } else if (weekC >= 1) {
      //   result = "发表于" + parseInt(weekC) + "周前";
      // } else if (dayC >= 1) {
      //   result = "发表于" + parseInt(dayC) + "天前";
      // } else if (hourC >= 1) {
      //   result = "发表于" + parseInt(hourC) + "个小时前";
      // } else if (minC >= 1) {
      //   result = "发表于" + parseInt(minC) + "分钟前";
      // } else {
      //   result = "刚刚发表";
      //   alert(result);
      //   return result;
      // }
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>
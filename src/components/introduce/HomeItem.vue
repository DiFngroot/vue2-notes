<template>
  <div class="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      date: '',
      week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    }
  },
  created() {
    setInterval(this.updateTime, 1000)
  },
  methods: {
    zeroPadding(num, digit) {
      var zero = ''
      for(var i = 0; i < digit; i++) {
          zero += '0'
      }
      return (zero + num).slice(-digit)
    }, //clock
    updateTime() {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()]
    }
  }
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}

.clock {
  font-family: "Share Tech Mono", monospace;
  width: 700px;
  height: 500px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 72%;
  top: 55%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.clock .time {
  letter-spacing: 0.05em;
  font-size: 80px;
  margin: 0 280px 0 0;
}
.clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
  margin: -50px 280px 0 0;
}
</style>

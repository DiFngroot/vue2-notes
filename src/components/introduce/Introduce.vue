<template>
  <div class="introduce">
    <div class="tntroduce-home">
      <h1 class="text-bg">difai</h1>
      <div class="left">
        <div class="left-countent">
          <img class="img-countent" src="../../assets/figure-vector/undraw_Certificate_re_yadi.png" alt="#">
          <h1 class="title-countent">临时记录</h1>
          <div class="text-counent-list">
            <p class="text-counent" v-for="(item, index) in introduceList" :key="index">{{ item }}</p>
          </div>
          <div class="nth-countent">
            <img class="img1" src="../../assets/figure-vector/undraw_No_data_re_kwbl.png" alt="#">
            <img class="img2" src="../../assets/figure-vector/undraw_Specs_re_546x.png" alt="#">
            <img class="img3" src="../../assets/figure-vector/undraw_Absorbed_in_re_ymd6.png" alt="#">
          </div>
        </div>
        <ul class="slider-indicators">
          <li class="slider_indicators1"></li>
          <li class="slider_indicators2"></li>
          <li class="slider_indicators3"></li>
        </ul>
      </div>
      <div class="rigth">
        <ul class="slider-indicators">
          <li class="slider_indicators1"></li>
          <li class="slider_indicators2"></li>
          <li class="slider_indicators3"></li>
        </ul>
        <div class="rigth-introduce-item">
          <home-rigth />
          <home-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeRigth from '@/components/introduce/HomeRigth.vue'
import HomeItem from '@/components/introduce/HomeItem.vue'

export default {
  name: 'Introduce',
  components: {
    HomeRigth,
    HomeItem
  },
  data () {
    return {
      introduceList: [
        '没有谁的幸运是凭空而来，',
        '只有当你足够努力你才会足够幸运。',
        '这世界不会辜负每一份努力和坚持，',
        '时光不会怠慢执着而勇敢的每一个人。'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.introduce {
  width: 100vw;
}
.tntroduce-home {
  overflow: hidden;
  height: 100vh;
  background-image: radial-gradient(900px circle at 47% 10px, #e228ffbe, #261d45);
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .text-bg {
    position: absolute;
    font-size: 400px;
    margin: -200px 0 0 400px;
    color: rgba(255, 255, 255, 0.03);
    transform: rotate(-10deg);
  }
  .left,
  .rigth {
    overflow: hidden;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .left {
    width: 500px;
    height: 500px;
    z-index: 4;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: -20px 20px 50px rgba(0, 0, 0, 0.5);
    .left-countent {
      transition: transform 0.5s;
      transform: translate3d(0, 90px, 0);
      .title-countent {
        font-size: 70px;
        color: rgba(255, 255, 255, 0.1);
        margin: -50px 0 50px 0;
      }
      .text-counent-list {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .text-counent {
          margin: 14px 0;
          font-size: 25px;
          text-align: center;
          color: #fff;
        }
      }
      .nth-countent {
        width: 100%;
        height: 200px;
        transform: translate3d(0, 200px, 0);
        transition: transform 0.5s;
        display: flex;
        img {
          flex: 1;
          border-radius: 30px;
          border: 3px solid #820ea2;
          margin: 0 5px;
          width: 140px;
          height: 140px;
        }
        .img1 {
          transform: translate3d(0, 200px, 0);
          transition: transform 0.5s;
        }
        .img2 {
          transform: translate3d(0, 200px, 0);
          transition: transform 1s;
        }
        .img3 {
          transform: translate3d(0, 200px, 0);
          transition: transform 1.5s;
        }
      }
      .img-countent {
        position: absolute;
        right: 0;
        top: -70px;
        border-radius: 20px;
        width: 130px;
      }
    }
    .slider-indicators {
      position: absolute;
      top: 50%;
      left: 60px;
      list-style: none;
      li {
        width: 10px;
        height: 10px;
        margin: 10px;
        border-radius: 50%;
        background-color: #fff;
        transition: transform 0.5s;
      }
      .slider_indicators3 {
        position: absolute;
        width: 11px;
        height: 11px;
        transform: translate3d(-0.5px, -50.5px, 0);
        background-color: rgb(164, 0, 170);
      }
    }
  }
  .left:hover {
    .left-countent {
      perspective: 400px;
      transform: translate3d(0, -65px, 0);
      .nth-countent {
        perspective: 400px;
        transform: translate3d(0, 35px, 0);
        img {
          perspective: 400px;
          transform: translate3d(0, 0, 0);
        }
      }
    }
    .slider-indicators {
      .slider_indicators3 {
        transform: translate3d(-0.5px, -30.5px, 0);
      }
    }
  }
  .rigth {
    width: 700px;
    height: 500px;
    box-shadow: 20px 10px 50px rgba(0, 0, 0, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    .rigth-introduce-item {
      width: 100%;
      height: 100%;
      transition: transform 0.5s;
      transform: translate3d(0, 0, 0);
    }
    .slider-indicators {
      position: absolute;
      bottom: 50px;
      list-style: none;
      display: flex;
      li {
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background-color: #fff;
        transition: transform 0.5s;
      }
      .slider_indicators3 {
        position: absolute;
        width: 11px;
        height: 11px;
        transform: translate3d(-0.5px, -0.5px, 0);
        background-color: rgb(164, 0, 170);
      }
    }
  }
  .rigth:hover {
    .rigth-introduce-item {
      perspective: 400px;
      transform: translate3d(-700px, 0, 0);
    }
    .slider-indicators {
      .slider_indicators3 {
        transform: translate3d(19px, -0.5px, 0);
      }
    }
  }
}
</style>

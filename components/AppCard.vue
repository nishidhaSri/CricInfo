<template>
  <a-col
    class="single-card"
    :sm="{ span: 24 }"
    :md="{ span: 12 }"
    :lg="{ span: 8 }"
  >
    <a-card
      class="hvr-grow-shadow hvr-icon-wobble-horizontal"
      hoverable
      style="width: 300px"
      @click="showModal"
    >
      <a-card-meta :title="player.Player_Name">
        <template slot="description">
          {{ player.Bowling_Skill }} bowler
        </template>
      </a-card-meta>
      <div class="ant-card-meta-description know-more">
        Know more <a-icon type="arrow-right" class="hvr-icon" />
      </div>
    </a-card>
    <a-modal
      class="player-modal"
      v-model="visible"
      @ok="handleOk"
      :footer="null"
    >
      <a-row>
        <a-col class="content" :xs="24" :md="18">
          <div style="width: 100%; margin-bottom: 20px" class="logo">
            {{ player.Player_Name }}
          </div>
          <div class="heading">{{ player.DOB }}</div>
        </a-col>
        <a-col :xs="24" :md="6">
          <img
            class="card-image"
            :src="require(`~/assets/img/${player.imglink}`)"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col :xs="24" :md="12">
          <div class="sub-heading">{{ player.Bowling_Skill }}</div>
          <div class="sub-heading">Total Runs: {{ player.total_runs }}</div>
          <div class="sub-heading">
            Total Balls Played: {{ player.numberofballs }}
          </div>
        </a-col>
        <a-col style="text-align: center" :xs="24" :md="12">
          <a-progress
            type="circle"
            :stroke-color="{
              '0%': '#000',
              '50%': '#373737',
              '150%': '#f4ca1b',
            }"
            status="active"
            :percent="player.strikerate"
            :width="80"
          />
          <div class="sub-heading">Strike Rate</div>
        </a-col>
      </a-row>
    </a-modal>
  </a-col>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
  },
  props: ['player'],
}
</script>

<style>
.card-image {
  width: 50%;
  /* float: right; */
  margin: auto 0;
}

.single-card .ant-card {
  margin: 30px auto;
  background: #f4ca1b;
  min-height: 400px;
  border-radius: 10px;
  border: 2px solid;
}

.single-card .ant-card-meta-title {
  white-space: normal;
  font-family: 'Comfortaa', cursive;
  font-size: 35px;
  color: inherit;
  margin-bottom: 50px !important;
}

.single-card .ant-card-meta-description {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
  color: inherit;
}

.hvr-grow-shadow {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.hvr-grow-shadow:hover,
.hvr-grow-shadow:focus,
.hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  background-color: #000;
  color: #f4ca1b;
}

.single-card .know-more {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #f4ca1b;
  padding: 5px 8px;
}

.content .sub-heading {
  margin-bottom: 10px;
}

@-webkit-keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px);
  }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.hvr-icon-wobble-horizontal {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-icon-wobble-horizontal .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.hvr-icon-wobble-horizontal:hover .hvr-icon,
.hvr-icon-wobble-horizontal:focus .hvr-icon,
.hvr-icon-wobble-horizontal:active .hvr-icon {
  -webkit-animation-name: hvr-icon-wobble-horizontal;
  animation-name: hvr-icon-wobble-horizontal;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.player-modal .ant-modal-mask {
  background-color: rgba(0, 0, 0, 0.75);
}

.player-modal .ant-modal-content {
  background: #d6d4c8;
  border: 8px solid #000;
  border-radius: 15px;
}
</style>

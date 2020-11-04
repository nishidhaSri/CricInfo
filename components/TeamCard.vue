<template>
  <a-col
    class="single-team-card"
    :sm="{ span: 24 }"
    :md="{ span: 12 }"
    :lg="{ span: 8 }"
  >
    <a-card
      class="grow-shadow icon-wobble-horizontal"
      hoverable
      style="width: 300px"
      @click="showModal"
    >
      <a-card-meta :title="team.team">
        <!-- <template slot="description">
          {{ player.Bowling_Skill }} bowler
        </template> -->
      </a-card-meta>
      <div class="ant-card-meta-description know-more-team">
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
        <a-col class="content">
          <div style="width: 100%; margin-bottom: 20px" class="logo">
            {{ team.team }}
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xs="24" :md="12">
          <div class="sub-heading">Home Matches: {{ team.home_matches }}</div>
          <div class="sub-heading">Away Matches: {{ team.away_matches }}</div>
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
            :percent="parseInt(team.home_win_percentage)"
            :width="80"
          />
          <div class="sub-heading">Home wins</div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xs="24" :md="12">
          <div class="sub-heading">Wins at home: {{ team.home_wins }}</div>
          <div class="sub-heading">Wins away: {{ team.away_wins }}</div>
        </a-col>
        <a-col style="text-align: center" :xs="24" :md="12">
          <a-progress
            type="circle"
            :stroke-color="{
              '0%': '#000',
              '150%': '#f4ca1b',
            }"
            status="active"
            :percent="parseInt(team.away_win_percentage)"
            :width="80"
          />
          <div class="sub-heading">Away wins</div>
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
  props: ['team'],
}
</script>

<style>
.card-image {
  width: 50%;
  /* float: right; */
  margin: auto 0;
}

.single-team-card .ant-card {
  margin: 30px auto;
  background: #000;
  color: #f4ca1b;
  min-height: 400px;
  border-radius: 10px;
  border: 2px solid;
}

.single-team-card .ant-card-meta-title {
  white-space: normal;
  font-family: 'Comfortaa', cursive;
  font-size: 35px;
  color: inherit;
  margin-bottom: 50px !important;
}

.single-team-card .ant-card-meta-description {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
  color: inherit;
}

.grow-shadow {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.grow-shadow:hover,
.grow-shadow:focus,
.grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  background-color: #f4ca1b;
  color: #000;
}

.single-team-card .know-more-team {
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4ca1b;
  color: #000;
  padding: 5px 8px;
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
.icon-wobble-horizontal {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.icon-wobble-horizontal .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.icon-wobble-horizontal:hover .hvr-icon,
.icon-wobble-horizontal:focus .hvr-icon,
.icon-wobble-horizontal:active .hvr-icon {
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

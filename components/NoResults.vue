<template>
  <div class="no-results-card">
    <div class="img-group">
      <div>Oops... we didn't find anything that matches this search :(</div>
      <div>Try changing the filters or check for spelling mistakes</div>
      <div class="filters" style="margin-top: 10px">
        <nuxt-link :to="next" style="margin: 0 auto">
          <a-button v-if="next == '/'">Check players</a-button>
          <a-button v-else>Check teams</a-button>
        </nuxt-link>
      </div>
    </div>
    <div class="result-card">
      <a-card class="hvr-grow-shadow" :loading="loading">
        whatever content
      </a-card>
      <a-card class="hvr-grow-shadow" :loading="loading">
        whatever content
      </a-card>
      <a-card class="hvr-grow-shadow" :loading="loading">
        whatever content
      </a-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  props: ['next'],
}
</script>

<style>
.result-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px 30px;
  flex-wrap: wrap;
}
.result-card .ant-card {
  width: 250px;
  background: #373737;
}

.result-card .ant-card:hover,
.result-card .ant-card:focus,
.result-card .ant-card::after {
  background: #000;
}

.ant-card-loading-block {
  background: linear-gradient(90deg, #f4ca1bcc, #f4ca1b80, #f4ca1bcc);
  animation: card-loading 1.4s ease infinite;
}

.img-group {
  width: 80%;
  margin: 30px auto;
  text-align: center;
  /* display: flex; */
}

.img-group div:first-child {
  font-size: 25px;
  margin-bottom: 10px;
}

.img-group > div:nth-child(2) {
  font-size: 20px;
  margin-bottom: 10px;
}

.no-results-image {
  width: 100%;
}

@keyframes card-loading {
  0% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1b80, #f4ca1bcc);
  }
  11% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1bcc, #f4ca1b80);
  }
  22% {
    background: linear-gradient(90deg, #f4ca1b80, #f4ca1bcc, #f4ca1bcc);
  }
  33% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1b80, #f4ca1bcc);
  }
  44% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1bcc, #f4ca1b80);
  }
  55% {
    background: linear-gradient(90deg, #f4ca1b80, #f4ca1bcc, #f4ca1bcc);
  }
  66% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1b80, #f4ca1bcc);
  }
  77% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1bcc, #f4ca1b80);
  }
  88% {
    background: linear-gradient(90deg, #f4ca1b80, #f4ca1bcc, #f4ca1bcc);
  }
  100% {
    background: linear-gradient(90deg, #f4ca1bcc, #f4ca1b80, #f4ca1bcc);
  }
}
</style>

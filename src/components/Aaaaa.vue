<template>
  <div id="app">
    <trading-vue :data="this.$data"></trading-vue>
  </div>
</template>


<script>
import TradingVue from "trading-vue-js";

export default {
  name: "app",
  components: { TradingVue },
  data() {
    return {
      ohlcv: [
        [1551128400000, 33, 37.1, 14, 14, 196],
        [1551132000000, 13.7, 30, 6.6, 30, 206],
        [1551135600000, 29.9, 33, 21.3, 21.8, 74],
        [1551139200000, 21.7, 25.9, 18, 24, 140],
        [1551142800000, 24.1, 24.1, 24, 24.1, 29],
      ],
    };
  },
};
export default {
  name: "Chart",
  props: {
    msg: String,
  },
};
</script>

<style>
body {
  font-family: Helvetica;
}

#app {
  border-radius: 4px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>

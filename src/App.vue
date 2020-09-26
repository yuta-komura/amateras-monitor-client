<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Sample />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

Vue.component("Sample", {
  //sampleでコンポーネント名を定義
  data() {
    //data()でdataを定義
    return {
      msg: "hello ELOOP!",
    };
  },
  template: "<div>{{ msg }}</div>", //templateで内包するHTML要素を定義
});

export default {
  name: "App",
  components: {
    HelloWorld,
    Sample,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

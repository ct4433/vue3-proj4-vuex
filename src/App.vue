<template>
  <div>
    <h3>{{ $store.state.count }}</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addStu()">新增一个指定的学生</button>
    <h3>{{ $store.state.students }}</h3>
    <h3>{{ $store.state.user }}</h3>
    <button @click="updateInfo()">修改信息</button>
    <h3>异步修改的信息:{{ $store.state.user }}</h3>
    <button @click="aUpdateInfo()">异步修改信息</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { UPDATEINFO } from "./store/mutation-type";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    add() {
      this.$store.commit({
        type: "increment",
        message: "123",
      });
    },
    sub() {
      this.$store.commit("decrement");
    },
    addStu() {
      const stu = {
        id: 114,
        name: "ytz",
        age: "35",
      };
      this.$store.commit("addStu", stu);
    },
    // updateInfo() {
    //   this.$store.commit("updateInfo", 12);
    // },
    [UPDATEINFO]() {
      this.$store.commit(UPDATEINFO, 12);
    },
    aUpdateInfo() {
      this.$store.dispatch("aUpdateInfo", "lisi").then((response) => {
        console.log(response);
      });
    },
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

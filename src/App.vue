<template>
  <p>Counter is {{ appModel.counter }}</p>
  <button @click="appModel.increment">Increment</button>
  <button @click="appModel.decrement">Decrement</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import { AppModel } from './App.model'
import { Inject } from './decorators';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  @Inject(AppModel) appModel!: AppModel
}
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

<template>
  <div class="wrap grid grid-cols-5 grid-rows-2 gap-1">
    <Header />
    <Suspense>
      <template #default>
        <Grid />
      </template>
      <template #fallback>
        LOADING...
      </template>
    </Suspense>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Grid from './components/Grid.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Grid,
    Footer,
  },
});
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  &,
  &:before,
  &:after {
    box-sizing: border-box;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;

  color: white;
  background-color: #333;
}
.wrap {
  width: 100%;
  margin: 5%;
}
</style>

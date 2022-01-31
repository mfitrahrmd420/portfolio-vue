<template>
  <div id="app" class="text-gray-300 font-rubik">
    <Navbar @menuOn="menuOn = true" />
    <transition name="fade">
      <div v-if="menuOn" class="bg-primary-700 text-accent-1 fixed z-50 w-3/4 right-0 top-0 bottom-0 p-8">
        <div class="flex flex-col space-y-10">
          <button @click="menuOn = false" class="ml-auto">Close</button>
          <ul class="flex flex-col items-center space-y-5">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Design</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </transition>
    <Home class="bg-primary-500" />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/base/Navbar.vue";
import Footer from "./components/base/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      menuOn: false,
    };
  },
  components: {
    Home,
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Rubik, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 200vh;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 1s;
}
.slide-down-enter {
  transform: translateY(-30px);
}
.slide-down-enter-to {
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

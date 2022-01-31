<template>
  <div ref="home">
    <section id="home" class="flex flex-col transition-opacity duration-1000 justify-center min-h-screen text-white px-5 lg:px-40 space-y-5">
      <h3 class="text-lg lg:text-2xl text-accent-1">Hi there, my name is</h3>
      <h1 class="text-4xl lg:text-6xl text-gray-100">Rama.</h1>
      <h1 class="text-4xl lg:text-6xl text-gray-400">I developed website</h1>
      <p class="text-gray-600 lg:w-1/2">I love creating things that live on internet, especially creating website</p>
    </section>

    <section id="about" class="flex flex-col transition-opacity duration-1000 justify-center min-h-screen px-5 lg:px-48 space-y-8 bg-primary-700">
      <h1 class="text-6xl">More About Me</h1>
      <div class="">
        <div class="text-base space-y-3 lg:mx-20">
          <div>
            <div class="float-left w-32 h-32 mr-3" style="box-shadow: 5px 5px 0 0 #08ffc8">
              <img class="w-full h-full object-cover" src="@/assets/Me.jpg" alt="" />
            </div>
            <p>
              My name is M Fitrah Ramadhan, i am a fresh graduate with a degree in Computer Engineering. I pursued that field of education because I’ve always been interested in computer stuff. More importantly, I have been very much
              interested in web development.
            </p>
            <p>Now, I am all set to start my career, and hoping to get selected into your esteemed company where I can explore my abilities, and prove myself.</p>
            <p class="mt-4">Here are a few technologies i've been learning and working with recently :</p>
            <div class="clear-left"></div>
          </div>
          <ul class="grid grid-cols-2">
            <li>Javascript</li>
            <li>Vue.js 2</li>
            <li>Nuxt.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="project" class="flex flex-col transition-opacity duration-1000 min-h-screen px-8 sm:px-16 md:px-20 lg:px-24 bg-primary-500">
      <h1 class="text-2xl my-4 sm:text-3xl md:text-6xl text-center md:my-8">Some Things I've Built</h1>
      <div class="grid grid-cols-4">
        <div class="col-start-1 col-span-4 flex flex-col items-center lg:col-start-3 lg:col-span-2 relative group">
          <a href="https://fierce-temple-02414.herokuapp.com/" target="_">
            <img class="relative border border-gray-900 shadow-lg" src="@/assets/VueSpotify.png" alt="" />
          </a>
          <div class="col-start-1 lg:absolute lg:top-1/2 lg:left-0 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 p-3 rounded-md shadow-md max-w-sm bg-accent-1 text-gray-900 group-hover:bg-gray-300 transition-colors duration-200">
            Spotify web app where you can manage your spotify library like add or remove playlist, save tracks, albums and more.
          </div>
          <ul class="flex my-3 space-x-3">
            <li>Vue.js</li>
            <li>Vuetify</li>
            <li>Spotify API</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="design" class="flex flex-col transition-opacity duration-1000 justify-center min-h-screen px-5 lg:px-48 space-y-8 bg-primary-700">
      <div class="flex flex-col lg:grid grid-cols-6 gap-3">
        <div
          v-for="(col, i) in cols"
          :key="i"
          :class="col.size"
          class="rounded-sm group bg-primary-400 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-200 relative overflow-hidden"
          style="max-height: 300px"
        >
          <img class="w-full h-full object-cover" :src="col.image" alt="" />
          <div class="space-y-3 p-3 absolute top-0 left-0 bg-gray-200 text-black opacity-0 w-full h-full group-hover:opacity-100 transition-opacity duration-300">
            <h1 class="text-xl font-semibold">Lorem ipsum dolor sit amet.</h1>
            <p class="text-two-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium dolor blanditiis tempore in voluptatem suscipit reiciendis libero placeat facilis.</p>
            <ul class="flex space-x-3 text-xs">
              <li>• Python</li>
              <li>• Django</li>
              <li>• Framework</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="flex flex-col justify-center min-h-screen text-center bg-primary-500">
      <h1 class="text-2xl my-4 sm:text-3xl md:text-6xl text-center md:my-8">Get in Touch</h1>
      <p class="text-lg">I'm currently looking for opportunities to work together</p>
      <a href="mailto:tgcfitrah26@gmail.com" class="self-center px-4 py-2 my-3 rounded-md bg-accent-1 text-black hover:bg-gray-500 transition-colors duration-200">Mail Me</a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cols: [
        {
          size: ["col-start-1", "col-span-4"],
          image: require("@/assets/design2.png"),
        },
        {
          size: ["col-start-5", "col-span-2"],
          image: require("@/assets/design1.png"),
        },
        {
          size: ["row-start-2", "col-start-1", "col-span-2"],
          image: require("@/assets/design1.png"),
        },
        {
          size: ["row-start-2", "col-start-3", "col-span-2"],
          image: require("@/assets/design2.png"),
        },
        {
          size: ["row-start-2", "col-start-5", "col-span-2"],
          image: require("@/assets/design1.png"),
        },
      ],
    };
  },
  methods: {},
  mounted() {
    const sections = this.$refs.home.childNodes;
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("opacity-0", !e.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((e) => {
      if (e.id == "art") return;
      ob.observe(e);
    });
  },
};
</script>

<style>
.text-two-line {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

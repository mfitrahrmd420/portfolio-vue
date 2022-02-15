<template>
  <div class="grid grid-cols-4 mb-4">
    <div
      class="col-start-1 col-span-4 flex flex-col items-center relative group"
      :class="{'lg:col-start-3 lg:col-span-2' : right, 'lg:col-start-1 lg:col-span-2' : left}"
    >
      <a
        :href="to"
        target="_blank"
      >
        <slot name="image"></slot>
      </a>
      <div
        class="col-start-1 lg:absolute lg:top-1/2  lg:transform lg:-translate-y-1/2  p-3 rounded-md shadow-md max-w-sm bg-accent-1 text-gray-900 group-hover:bg-gray-300 transition-colors duration-200"
        :class="{'lg:left-0 lg:-translate-x-1/2' : right, 'lg:right-0 lg:translate-x-1/2' : left}"
      >
        {{ description }}
      </div>
      <ul class="flex my-3 space-x-3">
        <li
          v-for="(item, i) in techstack"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {},
    to: {},
    description: {},
    techstack: {},
    right: {
      type: Boolean,
    },
    left: {
      type: Boolean,
    },
  },
};
</script>
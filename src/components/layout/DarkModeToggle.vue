<template>
  <div class="dark-mode-toggler-wrapper ml-2">
    <button type="button"
            class="button-toggler flex h-full w-[48px] text-dark dark:text-light border border-solid border-dark dark:border-light transition-colors duration-200 ease-in-out"
            v-on:click="darkMode = !darkMode; handleEvent()"
    >
      <SvgDefs :class="{ hidden: darkMode }" width="14" height="14" class="m-auto" id="moon" />
      <SvgDefs :class="{ hidden: !darkMode }" width="14" height="14" class="m-auto" id="sun" />
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import SvgDefs from '../icons/SvgDefs.vue'

  const emits = defineEmits(['toggleDarkMode']);
  const darkMode = ref(false);

  onMounted(() => {
    darkMode.value = localStorage.getItem('nl-pf-darkmode') === 'true';
  });

  function handleEvent() {
    localStorage.setItem('nl-pf-darkmode', darkMode.value)
    emits('toggleDarkMode', darkMode.value);
  }
</script>

<style>
  @reference "../../styles/tailwind-config.css"

  .button-toggler {
    &:hover,
    &:focus {
      @apply bg-dark text-white dark:bg-light dark:text-dark;
    }
  }
</style>
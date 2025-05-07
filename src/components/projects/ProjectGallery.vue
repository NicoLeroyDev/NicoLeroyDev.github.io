<script setup>
import { ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
});

const currentIndex = ref(0);

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.images.length - 1;
  }
};
</script>

<template>
  <div class="my-6 relative">
    <div v-if="images.length" class="rounded-lg overflow-hidden bg-gray-100">
      <div class="relative aspect-[16/9]">
        <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            :alt="`Capture d'écran ${index + 1}`"
            class="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-300"
            :class="index === currentIndex ? 'opacity-100' : 'opacity-0'"
        />
      </div>

      <!-- Contrôles de navigation -->
      <div v-if="images.length > 1" class="flex justify-between p-4">
        <button
            @click="prevImage"
            class="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-800"
            aria-label="Image précédente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

        <div class="text-center">
          <span class="text-sm text-gray-600">{{ currentIndex + 1 }} / {{ images.length }}</span>
        </div>

        <button
            @click="nextImage"
            class="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-800"
            aria-label="Image suivante"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <div v-else class="rounded-lg bg-gray-100 p-10 text-center text-gray-500">
      Aucune image disponible
    </div>
  </div>
</template>
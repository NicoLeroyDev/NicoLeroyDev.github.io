<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/placeholder.webp'
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  featured: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
    <!-- Badge pour les projets mis en avant -->
    <div v-if="featured" class="absolute top-4 right-4">
      <span class="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Featured</span>
    </div>

    <!-- Image du projet -->
    <div class="h-48 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
    </div>

    <!-- Contenu du projet -->
    <div class="p-5">
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1 mb-4">
        <span v-for="tag in tags.slice(0, 3)" :key="tag"
              class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
          {{ tag }}
        </span>
        <span v-if="tags.length > 3" class="text-gray-500 text-xs">+{{ tags.length - 3 }}</span>
      </div>

      <!-- Lien vers le projet -->
      <a :href="url" class="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Voir le projet
      </a>
    </div>
  </div>
</template>
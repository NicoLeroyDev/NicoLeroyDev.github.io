<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 230.262 230.262"
       v-if="id === 'home'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="currentColor" d="M228.065,125.587l-51.619-51.615V23.263c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5v35.709L120.43,17.96c-2.928-2.929-7.677-2.928-10.606,0L2.197,125.587c-2.929,2.929-2.929,7.678,0,10.606c2.93,2.929,7.678,2.929,10.608,0l18.72-18.72v89.525c0,4.142,3.357,7.5,7.5,7.5h152.215c4.143,0,7.5-3.358,7.5-7.5v-89.524l18.721,18.719c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.304-2.197C230.994,133.264,230.994,128.516,228.065,125.587z M183.739,199.499H46.524v-97.025l68.604-68.604l68.611,68.606V199.499z"/>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 32 32"
       v-if="id === 'pen'"
       :width="width"
       :height="height"
       :class="class"
  >
    <line fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="11" y1="29" x2="21" y2="29"/>
    <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16,3L7,15.6c2.4,2.4,4.2,5.7,5,9.4h4h4c0.9-3.7,2.6-7,5-9.4L16,3z"/>
    <circle fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="16" cy="15" r="3"/>
    <line fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="16" y1="12" x2="16" y2="3"/>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 32 32"
       v-if="id === 'bag'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 16 16"
       v-if="id === 'phone'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="currentColor" d="M5,16h6c1.105,0,2-0.895,2-2V2c0-1.105-0.895-2-2-2H5C3.895,0,3,0.895,3,2v12C3,15.105,3.895,16,5,16z M4,2h8v12H4V2z"/>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512"
       v-if="id === 'moon'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="currentColor" d="M494.9 331.3c-6.1-6.1-15.3-7.8-23.2-4.2-37.1 17.1-78.3 23.2-119 17.6-117.3-16.3-199.5-125.2-183.3-242.8 3-21.4 9-42.2 18.1-61.6 3.6-7.8 2-17.1-4.1-23.2-6.1-6.1-15.3-7.7-23.2-4.2C116.5 32.3 29.9 94 13.7 210.8c-25.8 186.5 139 284.9 218.4 289.2 55.7 3.1 189.9 8.1 266.9-145.5 3.8-7.7 2-17.1-4.1-23.2zM237.7 459.2C120.4 442.9 38.2 334 54.4 216.4c7.6-55 35.5-103.8 77.4-137.7-1.2 5.8-2.2 11.6-3 17.5-27.2 193.6 143 282.8 218.3 289.2 29 2.5 57.9 3.1 86-2.7-46.5 57.2-119.7 87-195.4 76.5z"/>
    <path fill="currentColor" d="M269.822 94.061l23.096 19.578-7.183 29.438c-1.41 5.491 4.648 9.998 9.575 6.901l25.775-15.919 25.774 15.916c4.79 2.955 10.844-1.408 9.576-6.902l-7.184-29.435 23.1-19.579c4.362-3.66 2.11-10.844-3.663-11.267l-30.282-2.255L327 52.512c-2.112-5.21-9.577-5.21-11.832 0L303.76 80.538l-30.28 2.255c-5.77.566-8.026 7.607-3.658 11.268z"/>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512"
       v-if="id === 'sun'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="currentColor" d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z"/>
    <path fill="currentColor" d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z"/>
    <path fill="currentColor" d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z"/>
    <path fill="currentColor" d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"/>
    <path fill="currentColor" d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z"/>
    <path fill="currentColor" d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z"/>
    <path fill="currentColor" d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"/>
    <path fill="currentColor" d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z"/>
    <path fill="currentColor" d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z"/>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       v-if="id === 'document'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       v-if="id === 'download'"
       :width="width"
       :height="height"
       :class="class"
  >
    <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
</template>

<script setup>
  defineProps({
    width: String,
    height: String,
    class: String,
    id: String,
  });
</script>
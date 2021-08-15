<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + TypeScript + Vite"
    :shelf="{ name: 'muja', count: 0 }"
  />
</template>

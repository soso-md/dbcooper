<script setup>
import { ref } from 'vue'
import Parallax from './components/Parallax.vue'
import One from './components/One.vue'

var isVisible = ref(false)

function startStory(){
  isVisible.value = true;
  setTimeout(() => {
    document.getElementById("start").scrollIntoView({ behavior: "smooth" })
  }, 100)
}
</script>

<template>
    <Parallax @isVisible="startStory()"/>
    <One v-show="isVisible" />
</template>

<style scoped>
</style>

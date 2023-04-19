<script setup>
import { ref } from 'vue'
import Parallax from './components/Parallax.vue'
import One from './components/One.vue'
import Search from './components/Search.vue'
import Evidence from './components/Evidence.vue'
import Suspects from './components/Suspects.vue'

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
    <One v-if="isVisible" />
    <Search v-if="isVisible" />
    <Evidence v-if="isVisible" />
    <Suspects v-if="isVisible" />
</template>

<style scoped>
</style>

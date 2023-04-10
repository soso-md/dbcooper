<script setup>
import { ref } from 'vue'
import Parallax from './components/Parallax.vue'
import Intro from './components/Intro.vue'
import One from './components/One.vue'

var isVisible = ref(false)

function startStory(){
  this.isVisible = true;
  setTimeout(() => {
    document.getElementById("start").scrollIntoView({ behavior: "smooth" })
  }, 50)
}
</script>

<template>
    <Parallax @isVisible="startStory()"/>
    <!-- <Intro @isVisible="startStory()"/> -->
    <One v-show="isVisible" />
</template>

<style scoped>
</style>

<script setup>
import { ref } from 'vue'

var isLanding = ref(false)
var isFlying = ref(false)
var isFinding = ref(false)

function toggleLanding(){
    isLanding.value = !isLanding.value
    isFlying.value = false
    isFinding.value = false
}
function toggleFlying(){
    isLanding.value = false
    isFlying.value = !isFlying.value
    isFinding.value = false
}
function toggleFinding(){
    isLanding.value = false
    isFlying.value = false
    isFinding.value = !isFinding.value
}
</script>

<template>
    <div>
        <section class="search container">
            <h1>Die Suche</h1>
            <div class="grid">

                <div class="map">
                    <svg id="marker" xmlns="http://www.w3.org/2000/svg" width="603" height="633" viewBox="0 0 603 633">
                        <line @click="toggleFlying()" class="cls-5" x1="236.8" x2="238.2" y2="5.8"/>
                        <path @click="toggleFlying()" class="cls-4" d="m241.1,17.6l36.9,151.4s8,29-6,58,10,94,19,100,14,15,14,22,8,32-9,46-41,25-46,32,16,63,9,84c-4.2,12.6-16.1,53.7-25,84.8"/>
                        <path @click="toggleFlying()" class="cls-5" d="m232.3,601.7c-.6,2-1.1,3.9-1.6,5.8"/>
                        <polygon @click="toggleFlying()" class="cls-1" points="224 599.3 223.4 633 240.7 604.1 224 599.3"/>
                        <path @click="toggleLanding()" class="cls-3" d="m348,152c-9.2-10.6-25.6-9.2-35-6-21.1,7.3-26.2,31.2-27,35-1.1,5.4-5,23.4,4,31,13.2,11.1,51.3-2.4,61-28,.8-2,7.3-20.1-3-32Z"/>
                        <circle @click="toggleFinding()" class="cls-2" cx="183.5" cy="353.5" r="6.5"/></svg>
                        <img id="map" style="user-select: none;" src="../assets/img/map.png" alt="">
                    </div>
                    <div class="info-area">
                        <div v-if="isLanding">
                            Die Zone, wo DB Cooper hochstwahrscheinlich gelandet ist.
                        </div>
                        <div v-else-if="isFlying">
                            Flugpfad von DB Cooper.
                        </div>
                        <div v-else-if="isFinding">
                            Money found.
                        </div>
                        <div v-else>
                            Klicke eine Fläche an, um sie zu erkunden.
                        </div>
                    </div>
                </div>
            
            
        </section>
    </div>
</template>


<style lang="scss" >
section.search{

    .map{
        position: relative;
        width: fit-content;
        height: 100vh;

        #map{
        width: 100%;
        height: 100%;
        }
    
        #marker{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            z-index: 5;

            .cls-3, .cls-2, .cls-1{
                fill:#7ac943;
                cursor: pointer;

                &:hover{
                    fill: #ff7bac;
                }
            }
            .cls-4{stroke-dasharray:0 0 12.2 12.2;}
            .cls-4,.cls-5{
                fill:none;
                stroke:#7ac943;
                stroke-linecap:square;
                stroke-miterlimit:10;
                stroke-width:3px;
                cursor: pointer;

                &:hover{
                    stroke: #ff7bac;
                }
            }
        }
    }

    .grid{
        display: flex;
        justify-content: space-between;
        align-items: top;
    }

    .info-area{
        width: 30%;
        border: 3px solid red;
    }

}
</style>



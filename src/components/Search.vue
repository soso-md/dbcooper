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

// document.querySelector('.info-area').style.width = document.querySelector('.info-area').width + 'px'

</script>

<template>
    <div>
        <section class="search background-c1">
            <div class="container">

                <h1 v-motion-fade-up >Die Suche</h1>
                <p  v-motion-fade-up style="margin: 0 auto; text-align: center; padding-bottom: 50px;">Nach der Entführung von Northwest Orient Airlines Flug 305 startete das FBI eine der größten Fahndungen in der US-Geschichte, um den Entführer namens DB Cooper zu fassen. Die Suche, an der Hunderte von Agenten beteiligt waren, dauerte Jahre, konnte aber letztendlich nicht die Identität oder den Aufenthaltsort von Cooper aufdecken. Trotz des mangelnden Fortschritts in der Untersuchung ist die Suche nach DB Cooper zu einem der faszinierendsten und anhaltendsten Mysterien in der amerikanischen Geschichte geworden.</p>
                <div class="grid">
                    <div class="map">
                        <svg id="marker" xmlns="http://www.w3.org/2000/svg" width="603" height="633" viewBox="0 0 603 633">
                            <line @click="toggleFlying()" :class="{selected: isFlying}" class="cls-5" x1="236.8" x2="238.2" y2="5.8"/>
                            <path @click="toggleFlying()" :class="{selected: isFlying}" class="cls-4" d="m241.1,17.6l36.9,151.4s8,29-6,58,10,94,19,100,14,15,14,22,8,32-9,46-41,25-46,32,16,63,9,84c-4.2,12.6-16.1,53.7-25,84.8"/>
                            <path @click="toggleFlying()" :class="{selected: isFlying}" class="cls-5" d="m232.3,601.7c-.6,2-1.1,3.9-1.6,5.8"/>
                            <polygon @click="toggleFlying()" :class="{selected: isFlying}" class="cls-1" points="224 599.3 223.4 633 240.7 604.1 224 599.3"/>
                            <path @click="toggleLanding()" :class="{selected: isLanding}" class="cls-3" d="m348,152c-9.2-10.6-25.6-9.2-35-6-21.1,7.3-26.2,31.2-27,35-1.1,5.4-5,23.4,4,31,13.2,11.1,51.3-2.4,61-28,.8-2,7.3-20.1-3-32Z"/>
                            <circle @click="toggleFinding()" :class="{selected: isFinding}" class="cls-2" cx="183.5" cy="353.5" r="6.5"/></svg>
                            <img id="map" style="user-select: none;" src="../assets/img/map.png" alt="">
                        </div>
                        <div class="info-area">
                            <div v-if="isLanding">
                                <h3> Coopers vermuteter Landeort</h3>
                                <p>Coopers Aufenthaltsort nach dem Sprung aus dem Flugzeug bleibt ein Rätsel. Allerdings haben mehrere Hinweise die Ermittler dazu veranlasst, zu glauben, dass er irgendwo in den dichten Wäldern des südwestlichen Bundesstaates Washington gelandet ist. Eine Reihe von Luft-, Boden- und Zeugenbefragungen haben am Abend des Fluges verdächtige Aktivitäten und einen Fallschirmspringer in diesem Gebiet gemeldet.</p>
                            </div>
                            <div v-else-if="isFlying">
                                <h3>Die Flugroute</h3>
                            <p>Die Flugroute von Northwest Orient Airlines Flug 305 führte von Portland, Oregon, nach Seattle, Washington. Cooper stieg in Portland in den Flug ein, und die Entführung fand kurz nach dem Start statt. Das Flugzeug wurde dann nach Seattle umgeleitet, wo die Forderungen des Entführers erfüllt wurden, bevor es wieder abhob. Die Flugroute endete schließlich in Reno, Nevada, wo Cooper vermutlich mit seinem Lösegeld aus dem Flugzeug gesprungen ist.</p>
                        </div>
                        <div v-else-if="isFinding">
                            <h3>Gefundenes Geld</h3>
                            <p>Im Jahr 1980 entdeckte ein Junge, der in der Nähe des Columbia River im Bundesstaat Washington spielte, ein Bündel Geld, das später als Teil von Coopers Lösegeld bestätigt wurde. Das Geld wurde in der Nähe von Vancouver, Washington, am Flussufer gefunden, etwa 20 Meilen von der vermuteten Landezone entfernt. Die Entdeckung löste ein erneutes Interesse am Fall DB Cooper aus und führte zu weiteren Suchaktionen in der Gegend.</p>
                            <img src="src/assets/img/moneyFound.jpeg" alt="">
                        </div>
                        <div v-else>
                            <p> Klicke eine Fläche an, um sie zu erkunden.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </template>


<style lang="scss" >
section.background-c1{
        background: linear-gradient(180deg, $background 0%, $background-grey 100%);
    }
section.search{
    padding-bottom: 70px;
    // background-color: $background;
    .map{
        position: relative;
        width: 60%;
        //height: 100vh;
        

        #map{
        width: 100%;
        height: 100%;
        filter: grayscale(1) invert(1) sepia(0.2);
        border-radius: 8px;
        
        }
    
        #marker{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            z-index: 5;

            .cls-3, .cls-2, .cls-1{
                fill: $beige;
                opacity: 0.7;
                cursor: pointer;

                &.selected{
                    fill: $hover-select !important;
                }
            }
            .cls-4{stroke-dasharray:0 0 12.2 12.2;}
            .cls-4,.cls-5{
                fill:none;
                stroke:$beige;
                stroke-linecap:square;
                stroke-miterlimit:10;
                stroke-width:3px;
                cursor: pointer;
                &.selected{
                    stroke: $hover-select !important;
                }
            }

            &:hover + #map{
            filter: grayscale(1) invert(1) sepia(0.2) brightness(0.7);
            }

            &:hover .cls-3, &:hover .cls-2{
                fill:$bright;

                &:hover{
                    fill: $hover-select;
                }
            }

            &:hover .cls-4,&:hover .cls-5{
               
                stroke:$bright;

                &:hover, &:focus{
                    stroke: $hover-select;
                }
            }
        }
    }

    .grid{
        display: flex;
        gap: 15px;
        align-items: top;
    }

    .info-area{
        // height: 100%;
        width: 40%;
        background: linear-gradient(rgb(37, 37, 41) 0%, rgb(59, 59, 67) 100%);
        border: rgb(55, 55, 58) solid 1px;
        max-height: 750px;
        overflow: scroll;
        border-radius: 8px;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        justify-content: top;
        // padding: 20px;
        align-items: center;
       
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            

            img{
                width: 95%;
                padding-bottom: 10px;
            }
        }

    }

}
</style>



<script setup>
import { ref } from 'vue';


var showMeme = ref(false);

function showMessage(event) {
    const allCards = document.querySelectorAll('.card');
    console.log(allCards);
    for (let i = 0; i < allCards.length; i++) {
        console.log(allCards[i].children);
        allCards[i].children[0].style.border = 'none';
        allCards[i].children[1].style.border = 'none';
    }

    const card = event.target.closest('.card');
    const cards = card.children;
    
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = '2px solid #f7f7f7';
    }


    
    
    showMeme.value = true;
    setTimeout(() => {
        document.getElementById("meme").scrollIntoView({ behavior: "smooth" })
  }, 100)
    
}

</script>

<template>
    <div class="">

   
    <section class="suspects">
        <div class="container">
        
            <h1 v-motion-fade-up>Die Verdächtigen</h1>

            <p v-motion-fade-up>Die Suche nach dem mysteriösen 'DB Cooper' ist seit Jahrzehnten ein Rätsel, das viele Menschen fasziniert. In den Jahren seit dem Vorfall sind viele Verdächtige ins Spiel gekommen, aber die Identität von DB Cooper bleibt bis heute unbekannt. Schau dir die Verdächtigen unten an und triff deine eigene Entscheidung, wer hinter einer der berühmtesten Kriminalfälle der Geschichte steckt.</p>
            <div class="grid">
            
                <div v-motion-fade-up style="width: 30%;" class="card-container">
                    <div class="card" @click="showMessage($event)">
                        <div class="front">
                            <img src="../assets/img/suspects/McCoy.jpeg" alt="">
                            <h2>Richard McCoy Jr.</h2>
                            <p>McCoy war ein ehemaliger Green-Beret-Soldat und Pilot, der in 1972 einen Flugzeugüberfall mit einer ähnlichen Methode wie Cooper durchführte und 500.000 Dollar erpresste</p>
                        </div>
                        <div class="back">
                            <p>McCoy Jr. wurde 1974 verhaftet und wegen Flugzeugentführung und Lösegeldforderung verurteilt. McCoy hatte ein Alibi für die Nacht des Überfalls und sein Entführungsstil und seine Forderungen unterschieden sich von denen, die bei DB Cooper beobachtet wurden.</p>
                        </div>
                    </div>
                </div>

                <div v-motion-fade-up style="width: 30%;" class="card-container">
                    <div class="card" @click="showMessage($event)">
                        <div class="front">
                            <img src="../assets/img/suspects/Christiansen.jpeg" alt="Kenneth Christiansen">
                            <h2>Kenneth Christiansen</h2>
                            <p>Ehemaliger Mitarbeiter von Northwest Orient Airlines, der während des Überfalls als Ramp Agent arbeitete und Zugang zum Flugzeug hatte. Er ähnelte auch der Phantomzeichnung von Cooper</p>
                        </div>
                        <div class="back">
                            <p>Obwohl einige Beweise darauf hindeuten, dass Christiansen Cooper sein könnte, gibt es auch viele Widersprüche und Ungereimtheiten in der Theorie. Es gab beispielsweise keinen Beweis dafür, dass Christiansen jemals Geld ausgegeben hat, was er nach dem Überfall hätte tun müssen.</p>
                        </div>
                    </div>
                </div>

                <div v-motion-fade-up style="width: 30%;" class="card-container">
                    <div class="card" @click="showMessage($event)">
                        <div class="front">
                            <img src="../assets/img/suspects/Rackstraw.avif" alt="Robert Rackstraw">
                            <h2>Robert Rackstraw</h2>
                            <p>Militärpilot, dessen Fingerabdrücke auf einer von Cooper zurückgelassenen Geldscheinbündel war und einen ähnlichen Flugzeugentführungsversuch unternahm</p>
                        </div>
                        <div class="back">
                            <p>Seine Fingerabdrücke auf der Geldscheinklammer sind möglicherweise kontaminiert worden und es gab keine klaren Beweise dafür, dass er das Flugzeug tatsächlich entführt hatte. Rackstraw wurde in den 70er Jahren verhaftet und verurteilt, aber später freigesprochen.</p>
                        </div>
                    </div>
                </div>

                <div v-motion-fade-up style="width: 30%;" class="card-container">
                    <div class="card" @click="showMessage($event)">
                        <div class="front">
                            <img src="../assets/img/suspects/Weber.jpeg" alt="Duane Weber">
                            <h2>Duane Weber</h2>
                            <p>Ein Mann, der auf seinem Sterbebett gestanden haben soll, dass er Cooper war</p>
                        </div>
                        <div class="back">
                            <p>Es gibt keine direkten Beweise dafür, dass Weber den Überfall begangen hat, und einige Ermittler glauben, dass er möglicherweise nur Aufmerksamkeit erregen wollte. Allerdings gibt es auch viele Zweifel an Webers Schuld. Seine körperlichen Merkmale und sein Flugzeugentführungsstil widersprachen dem, was bei DB Cooper beobachtet wurde.</p>
                        </div>
                    </div>
                </div>
                
                <div v-motion-fade-up style="width: 30%;" class="card-container">
                    <div class="card" @click="showMessage($event)">
                        <div class="front">
                            <img src="../assets/img/suspects/List.jpeg" alt="John List">
                            <h2>John List</h2>
                            <p>Ein Mann, der 1971 seine Familie getötet hat und dann unter einem anderen Namen lebte</p>
                        </div>
                        <div class="back">
                            <p> Es gibt jedoch keine klaren Beweise dafür, dass List Cooper war, und es gibt viele Unterschiede zwischen den beiden Fällen. List hatte auch keine Erfahrung im Fliegen oder Entführen von Flugzeugen, und einige Ermittler glauben, dass er psychisch nicht in der Lage gewesen wäre, so eine Tat zu begehen.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <div class="meme-container">

        <div v-motion-fade-up id="meme" v-if="showMeme" class="meme container" style="display: flex; justify-content: center;  padding: 140px;">
            <img src="../assets/img/meme.jpeg" alt="">
        </div>
    </div>
</div>
</template>


<style lang="scss" >

section.suspects{
    padding-top: 250px;
    background: linear-gradient(180deg,$background-beige 0%, $background-grey 30%,  $background-grey 75%, $background 100%);
    padding: 250px;

    .grid{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        
    }
    .card-container{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        position: relative;
        height: 500px;
        width: 250px;
        perspective: 800px;

        &:hover .card{
            transform: rotateY(180deg);
        }

        .card{
            height: 100%;
            width: 100%;
            position: relative;
            transition: transform 700ms ease-in-out;
            transform-style: preserve-3d;
            cursor: pointer;

            h2{
                margin-bottom: 0px;
            }

            .front, .back{
                height: 100%;
                width: 100%;
                background: rgb(47, 47, 49);
                border: rgb(55, 55, 58) solid 1px;
                position: absolute;
                border-radius: 8px;
                backface-visibility: hidden;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;   
            }

            .back{
                transform: rotateY(180deg);
                background: rgb(23, 23, 23);
                border: rgb(26, 26, 26) solid 1px;
            }
            img{
                max-width: 80%;
                height: 35%;
                object-fit: cover;
                border-radius: 4px;
            }
            p{
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 1rem;
                margin: 15px;
            }

            
        }

    }

}

.meme-container{
    background: $background;
}

</style>
<script setup>
import { onMounted } from "vue";
import WaveSurfer from "wavesurfer";
import { ref } from "vue";

var wavesurfer;
var isPlaying = ref(false);
onMounted(() => {
  console.log('myheader mounted');
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        mediaControls: true
    });
    wavesurfer.load('/src/assets/audio/shaffner_1.mp3');
});

function playInterview(){
    this.wavesurfer.play();
    this.isPlaying = true;
}
function pauseInterview(){
    this.wavesurfer.pause();
    this.isPlaying = false;
}
</script>

<template>
    <div>
        <section id="start" style="z-index: 300 position: relative;">
            <div class="container">
                <h1>Der Fall</h1>
                <video src="../assets/video/One1.mp4" controls></video>
                <div class="grid">
                    <p style="width: 50%;">Ein weißer Mann in den 40ern mit schwarzen Haaren und zurückweichender Haarlinie, der eine Sonnenbrille und einen Anzug trug, kaufte ein Einwegticket als Dan Cooper. Er hatte einen Aktenkoffer und eine braune Papiertüte dabei. Das Flugzeug hob mit ihm und 36 weiteren Passagieren um 14:50 Uhr ab.</p>
                    <div style="width: 20%;" class="card-container">
                        <div class="card">
                            <div class="front">
                                <img src="../assets/img/illustrations/briefcase.png" alt="">
                                    <p>Aktentasche</p>
                            </div>
                            <div class="back">
                                <img src="../assets/img/illustrations/bomb.png" alt="">
                                    <p>In dem Koffer war laut Augenzeuge die Bombe, die aus mehreren Drähten und Röhren bestandt.</p>
                            </div>
                        </div>
                    </div>
                    <div style="width: 20%;" class="card-container">
                        <div class="card">
                            <div class="front">
                                <img src="../assets/img/illustrations/paper-bag.png" alt="">
                                    <p>Papier Tüte</p>
                            </div>
                            <div class="back">
                                    <p>Bis heute weiß niemand, was sich in der Papiertüte befunden hatte. Es wird vermutet, dass Ausrüstung für den Sprung, wie Handschuhe, darin waren.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ticket">
                    <img src="../assets/img/ticket.png" alt="">
                </div>

                <div class="grid">
                    <p>Nach dem Start des Fluges nach Seattle gab Dan Cooper einer Flugbegleiterin einen Zettel, den sie in ihre Tasche steckte, ohne ihn anzusehen. Später flüsterte Cooper ihr zu, dass er eine Bombe in seiner Aktentasche habe und sie ihn nicht provozieren solle.</p>
                    <div class="img-subtitle">
                        <img src="../assets/img/florence_shaffner.png" alt="">
                        <p class="subtitle">Florence Shaffner</p>
                    </div>
                </div>
                <div id="waveform"></div>
                <button class="primary" v-if="!isPlaying" @click="playInterview()">Höre dir jetzt ein Interview mit Florence Shaffner an</button>
                <button class="primary" v-if="isPlaying" @click="pauseInterview()">Stoppe das Interview mit Florence Shaffner</button>
                
                <div class="threat">
                    <img src="../assets/img/dbcooper_note1.png" alt="">
                </div>

                <p>Er forderte 200.000 Dollar in 20$-Scheine, vier Fallschirme und einen Tankwagen, der das Flugzeug nach der Landung betanken sollte.</p>
                <p>Als das Flugzeug um 5:24 Uhr landete, waren alle Passagiere und Besatzungsmitglieder unverletzt.</p>
                <p>Während das Flugzeug betankt wurde, erklärte der Entführer der Flugcrew den Plan. Cooper befahl, dass das Flugzeug in einer Höhe von 10.000 Fuß und mit minimaler Geschwindigkeit ohne zu stallen bis nach Mexiko-Stadt fliegen solle. Er verlangte auch, dass das Fahrwerk ausgefahren bliebe. </p>
                <p>Sobald das Geld und die Fallschirme übergeben wurden, ließ Cooper alle 36 Passagiere aus dem Flugzeug sowie zwei Flugbegleiter, einschließlich Florence Shaffner, frei.</p>
                
                <div class="img-subtitle">
                    <img src="../assets/img/refuel_plane.png" alt="">
                    <p class="subtitle">Das Flugzeug wird wieder aufgetankt</p>
                </div>

                <p>In der Dunkelheit der Nacht ließ der Entführer die hintere Treppe des Flugzeugs ausfahren und sprang mit dem Lösegeld aus dem Flugzeug. Die Besatzung bemerkten seinen Ausstieg nicht. Der Flug landete um 22:15 Uhr Ortszeit in Reno.</p>
                
                <video src="../assets/video/Two.mp4" controls></video>
                <p>Nach der Landung wurde die Kabine gründlich durchsucht. Das einzige, was vom Entführer im Flugzeug zurückblieb, war seine Krawattenklammer, die auf Fingerabdrücke untersucht wurde, aber keine brauchbaren Ergebnisse lieferte. </p>
            
            </div>
        </section>
    </div>
</template>

<style lang="scss">
#start{
    // @media screen and (max-width: 768px) {
    //     flex-direction: column;
    // }
    // display: flex;
    // justify-content: center;
    background: $background;
    video{
        width: 60%;
        display: block;
        margin: 0 auto;
    }

    .grid{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-container{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        position: relative;
        height: 350px;
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

            .front, .back{
                height: 100%;
                width: 100%;
                background: red;
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
                background: blue;
            }
            img{
                max-width: 5rem;
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

</style>
                                
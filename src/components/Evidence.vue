<script setup>
</script>

<template>
    <section class="hints background-c2">
        <h1 v-motion-fade-up>Die Hinweise</h1>
        <div class="container">
            <p  v-motion-fade-up> Das FBI hat im Laufe der Jahre zahlreiche Hinweise gesammelt, darunter Geldscheine, Kleidungsstücke und andere Gegenstände, die möglicherweise mit Cooper in Verbindung stehen. In diesem Video werden einige dieser Hinweise und Beweise vorgestellt.</p>
            <video style="margin: 20px auto;" src="../assets/video/TheSurvivingEvidence.mp4" controls></video>
        </div>

       
        <h1  v-motion-fade-up>Die Theorien</h1>
        <div class="theories container">
            <p  v-motion-fade-up>Seit der spektakulären Flugzeugentführung von DB Cooper im Jahr 1971 ranken sich zahlreiche Theorien um sein Schicksal. Trotz jahrzehntelanger Ermittlungen und einer der größten Fahndungen in der amerikanischen Geschichte konnte seine Identität nie zweifelsfrei geklärt werden und auch sein Aufenthaltsort bleibt bis heute ein Rätsel. Die Faszination für den Entführer und sein Schicksal hat im Laufe der Jahre viele Amateurdetektive und Experten inspiriert, um zahlreiche Theorien zu entwickeln, die von plausibel bis hin zu absurd reichen</p>
            <div v-motion-fade-up class="theory" style="z-index: 20">
                <div class="person">
                    <img src="../assets/img/theories/Himmelsbach.jpeg" alt="Himmelsbach">
                    <h2>Ralph Himmelsbach, 1971</h2>
                    <p>war ein ehemaliger FBI-Agent, der an der Untersuchung des Falls beteiligt war.</p>
                </div>
                <div class="explanation">
                    <p>"Es gibt eine starke Wahrscheinlichkeit, dass Cooper in der Wildnis umgekommen ist. Es ist ein raues Gebiet, und es gibt viele Gefahren, denen er ausgesetzt gewesen wäre. Wenn man bedenkt, dass er in der Nacht mit einer unvollständigen Ausrüstung und ohne Erfahrung im Überleben in der Wildnis absprang, ist es wahrscheinlich, dass er es nicht geschafft hat, lange genug zu überleben, um gerettet zu werden."</p>
                </div>
            </div>

            <div v-motion-fade-up class="theory" style="z-index: 19">
                <div class="explanation">
                    <p>"Meine Theorie ist, dass er im Fluss gelandet ist und nie wieder gesehen wurde. Ich denke nicht, dass er überlebt hat.""</p>
                </div>
                <div class="person">
                    <img src="../assets/img/theories/König.jpeg" alt="König">
                    <h2>Joe Koenig, 1972</h2>
                    <p>ehemaliger FBI-Agent.</p>
                </div>
            </div>

            <div v-motion-fade-up class="theory" style="z-index: 18">
                    <div class="person">
                        <img src="../assets/img/theories/Carlson.jpeg" alt="Ron Carlson">
                        <h2>Ron Carlson, 1979</h2>
                        <p>pensionierter FBI-Agent, der Cooper für einen Geheimdienst Mitarbeiter hält.</p>
                    </div>
                    <div class="explanation">
                        <p>"Ich denke, er war ein Militär- oder Regierungsvertreter, der diese Fähigkeit hatte. Er hatte das Wissen, er hatte das Vertrauen, er hatte die Ausrüstung, um diese Aktion durchzuführen." Carlson zitierte auch die ungewöhnlichen Flugbedingungen, unter denen Cooper fliegen wollte, als Hinweis darauf, dass er möglicherweise "von einem anderen Bereich des Staates oder der Regierung" kam.</p>
                    </div>
            </div>

            <div v-motion-fade-up class="theory" style="z-index: 17">
                <div class="explanation">
                    <p>""Ich glaube, dass Cooper wahrscheinlich überlebt hat, weil er ein erfahrener Fallschirmspringer war und sich sorgfältig vorbereitet hat. Meiner Meinung nach könnte er sich irgendwo in der Nähe des Luftraums versteckt haben, den er verlassen hat, und möglicherweise eine Hütte oder eine abgelegene Gegend erreicht haben, um zu überleben."</p>
                </div>
                <div class="person">
                    <img src="../assets/img/theories/Blevins.jpeg" alt="Robert Blevins">
                    <h2>Robert Blevins, 2011</h2>
                    <p>unabhängiger Ermittler, der seit Jahren Nachforschungen im DB Cooper-Fall anstellt</p>
                </div>
            </div>

            <div v-motion-fade-up class="theory" style="z-index: 16">
                    <div class="person">
                        <img src="../assets/img/theories/Smith.jpeg" alt="Bruce Smith">
                        <h2>Bruce Smith, 2016</h2>
                        <p>hat in seinem Buch "DB Cooper and the FBI - A Case Study of America's Only Unsolved Skyjacking" seine Erkenntnisse und Einschätzungen zusammengefasst</p>
                    </div>
                    <div class="explanation">
                        <p> "Ich denke, Cooper ist irgendwann in den letzten 30 Jahren gestorben. Aber ich denke auch, dass er in dieser Zeit ein verstecktes Leben in der Öffentlichkeit geführt hat."</p>
                    </div>
            </div>


        </div>
    </section>
</template>


<style lang="scss" >

section.hints{
    &.background-c2{
        // background: $background-grey;
        background: linear-gradient(180deg, $background-grey 0%, $background-beige 100%);
    }

    .container{
        video, p{
            display: block;
            margin: 0 auto;
            text-align: center;
        }}

    .theories{
        .theory{
            position: relative;
            display: flex;
            justify-content: center;
            padding-bottom: 40px;
            // align-items: center;
            .person{
                position: absolute;
                width: 220px;

               &:nth-child(odd){
                     left: -120pX;
               }
               &:nth-child(even){
                     right: -120pX;
               }

                img{
                    border-radius: 100%;;
                    width: 100%;
                    height:200px;
                    object-fit: cover;
                    border: 3px solid $beige;
                    filter: grayscale(0.5) sepia(0.3);
                    z-index: 3;
                    position: relative;
                }

                padding: 20px;
                p{
                    opacity: 0;
                    line-height: 105%;
                    margin: 0px;
                }

                &:hover{
                    position: absolute;
                    background: linear-gradient(180deg, $background 0%, $background-grey 100%);
                    border-radius: 8px;
                    z-index: 50;
                    p{
                        opacity: 100;
                    }
                }

               
            }

            .explanation {
                position: relative;
                background: $background-grey;
                border-radius: 4px;
                top: 70px;
                padding: 20px;

                &:nth-child(even):after{
                    // triangle on the left
                    content: '';
                    position: absolute;
                    top: 10px;
                    left: -20px;
                    width: 0;
                    height: 0;
                    border-top: 20px solid transparent;
                    border-bottom: 20px solid transparent;
                    border-right: 20px solid $background-grey;
                }
                &:nth-child(odd):after{
                    // triangle on the left
                    content: '';
                    position: absolute;
                    top: 10px;
                    right: -20px;
                    width: 0;
                    height: 0;
                    border-top: 12px solid transparent;
                    border-bottom: 12px solid transparent;
                    border-left: 20px solid $background-grey;
                    

                }
                
                p{
               
                font-family: 'ShadowsIntoLight' , sans-serif;
                // line-height: 250%;
                // font-size: 20px;
                font-weight: 400;

                }
            }
        }

        // padding-bottom: 300px;
    }
}

</style>
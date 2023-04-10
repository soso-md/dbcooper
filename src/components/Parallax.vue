<script setup>

const rotateDegree = [5, -8, -2]

window.addEventListener('scroll', () => {
    const parallax = document.querySelectorAll('.parallax');
    const newspapers = document.querySelectorAll('.newspaper');
    const speed = 0.5;
    const background = document.getElementById('background');
    const plane = document.getElementById('plane');
    const cooper = document.getElementById('cooper');
    const headline1 = document.getElementById('headline1');
    
    const news = document.getElementById('news');
    
    
    background.style.transform = `translateY(-${window.pageYOffset * (speed/3)}px)`;
    headline1.style.transform = `translateY(${window.pageYOffset * 0.1}px)`;
    // headline2.style.transform = `translateX(-${window.pageYOffset * 0.9}px)`;
    
    
    plane.style.transform = `translateY(-${window.pageYOffset * 0.4}px) translateX(-${window.pageYOffset * 0.3}px)`;
    cooper.style.transform = `translateY(${window.pageYOffset * 1.2}px) translateX(${window.pageYOffset * 0.6}px) scale(${0.5 + window.pageYOffset * 0.001})`;
    
    parallax.forEach(layer => {
        const distance = window.pageYOffset * speed * (layer.style.zIndex *-0.3);
        layer.style.transform = `translateY(${distance}px)`;
    })

    newspapers.forEach( (newspaper, i) => {
        const degree = rotateDegree[i] + window.pageYOffset * 0.012;
        newspaper.style.transform = `rotate(${degree}deg)`;
    })

    news.style.marginTop = `calc(${window.pageYOffset * speed * (10 *-0.3)}px + 100px)`;
})
</script>

<template>
    <div class="border" style="overflow: unset;">
        <section class="parallax-hero">
            <img id="background" ref="background" src="../assets/img/parallax/background.png" alt="">
            <img id="cooper" src="../assets/img/parallax/cooper.png" alt="">
            <img id="plane" src="../assets/img/parallax/plane.png" alt="">
            <h1 id="headline1">Das perfekte Verbrechen</h1>

            <img src="../assets/img/parallax/parallax/parallax3.png" style="z-index: 2" class="parallax">
            <img src="../assets/img/parallax/parallax/parallax4.png" style="z-index: 3" class="parallax">
            <img src="../assets/img/parallax/parallax/parallax5.png" style="z-index: 5" class="parallax">
            <img src="../assets/img/parallax/parallax/parallax6.png" style="z-index: 10; bottom: -20vh" class="parallax">
            
        </section>
    </div>
        <section id="news" style="position: relative; z-index: 11;">
            <div style="z-index: 3" class="parallax" id="test">
                <h1 id="headline2">Der unerklärliche Fall des D.B. Cooper</h1>
            </div>
            <div class="newspapers">
                <img src="../assets/img/newspapers/newspaper1.jpeg" style="left:0px; transform: rotate(8deg);" alt="" class="newspaper">
                <img src="../assets/img/newspapers/newspaper2.webp" style="right:-40%; transform: rotate(-12deg);" alt="" class="newspaper">
                <img src="../assets/img/newspapers/newspaper3.jpeg" style="left:0px; transform: rotate(-3deg);" alt="" class="newspaper">
            </div>
            <p>
                Am 24. November 1971 entführte ein Mann namens D.B. Cooper ein Flugzeug von Portland nach Seattle und forderte 200.000 Dollar Lösegeld. Nachdem das Geld übergeben worden war, sprang er aus dem Flugzeug und wurde nie wieder gesehen. 
            </p>
            <button class="primary" @click="$emit('isVisible', true)">Entdecke jetzt seine Geschichte</button>
        </section>
</template>

<style lang="scss">

#news{
    background: #030608;
    padding-top: 150px;
    padding-bottom: 150px;
}

.newspapers{
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 100px;
        // padding-top:400px;
        background: #030608;
    
    .newspaper{
       margin-top: -80px;
        position: relative;
        width: 60%;
        right: 0px;
        border-radius: 8px;
        box-shadow: 5px 5px 50px black;
    }
}
.border{
    height: 100vh;
}
.parallax-hero{
    position: relative;
    width: 100vw;
    height: 120vh;
    overflow: hidden;
    background-attachment: fixed;

    #headline1{
        position: absolute;
        top: 55vh;
        left: 50px;
        z-index: 3;
        font-size: calc(100vh*0.1);
        font-weight: 700;
        max-width: 800px;
        color: $font-color;
        line-height: 80%;
        // font-family: 
    }
    img{
        position: absolute;
        object-fit: cover;
        &#background{
            width: 100vw;
            height: 100%;
        }
        &#cooper{
            right: 20vw;
            top: 10vh;
            z-index: 6;
            transform: scale(0.5);
        }
        &#plane{
            left: 0vw;
            top: 10vh;
        }
        &.parallax{
            width: 100vw;
            height: 100vh;
            bottom: -10vh;
            transform-origin: bottom right;
        }
    
    }

}

#headline2{ 
        padding-top: 40px;
        color: $font-color;
        font-size: calc(100vh*0.07);
        font-weight: 700;
        line-height: 80%;
        text-align: center;
            //right: -700px;
            // top: 10vh;
        }

// .overflow{
    
//     //min-height: 140vh;
//     position: relative;


//     .dark-bg{
//         padding-top: 250px;
//         background: #030608;
//         padding-bottom: 200px;
//     }
//     #headline2{ 
//         padding-top: 40px;
//         color: $font-color;
//         font-size: calc(100vh*0.07);
//         font-weight: 700;
//         line-height: 80%;
//         text-align: center;
//             //right: -700px;
//             // top: 10vh;
//         }
// }

.transparent{
    height: 1px;
    width: 100%;
    background: rgba(255, 255, 0, 0.022);
    z-index: 10;
    bottom: 0px;
}


#helper{
    position: relative;
    width: 100vw;
    height: 100px;
    background: linear-gradient(0deg, rgba(32,32,32,1) 0%, rgba(3,6,8,1) 100%);;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
}
</style>
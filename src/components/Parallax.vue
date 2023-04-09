<script setup>
import { ref } from 'vue'

window.addEventListener('scroll', () => {
    const parallax = document.querySelectorAll('.parallax');
    const speed = 0.5;
    const background = document.getElementById('background');
    const plane = document.getElementById('plane');
    const cooper = document.getElementById('cooper');
    const headline1 = document.getElementById('headline1');
    const headline2 = document.getElementById('headline2');
    const test = document.getElementById('test');
    
    background.style.transform = `translateY(-${window.pageYOffset * (speed/3)}px)`;
    headline1.style.transform = `translateY(${window.pageYOffset * 0.1}px)`;
    // headline2.style.transform = `translateX(-${window.pageYOffset * 0.9}px)`;
    
    
    plane.style.transform = `translateY(-${window.pageYOffset * 0.4}px) translateX(-${window.pageYOffset * 0.3}px)`;
    cooper.style.transform = `translateY(${window.pageYOffset * 1.2}px) translateX(${window.pageYOffset * 0.6}px) scale(${0.5 + window.pageYOffset * 0.001})`;
    
    parallax.forEach(layer => {
        const distance = window.pageYOffset * speed * (layer.style.zIndex *-0.3);
        layer.style.transform = `translateY(${distance}px)`;
    })

    
    if(window.pageYOffset > 350){
        test.style.height = `${window.pageYOffset - 350}px`;
        headline2.style.transform = `translateX(-${window.pageYOffset * 0.9}px)`;
    }else{
        test.style.height = `0px`;
    }

    if(window.pageYOffset > 490){
            headline2.style.bottom = '70px';
        }else{
            headline2.style.bottom = 'unset';
        }
    

    // test.style.height = `${window.pageYOffset * speed * (6 *-0.2)}px`;
    // console.log(window.pageYOffset * speed * (6 *-0.2));
})
</script>

<template>
    <section class="parallax-hero">
        <img id="background" ref="background" src="../assets/img/parallax/background.png" alt="">
        <img id="cooper" src="../assets/img/parallax/cooper.png" alt="">
        <img id="plane" src="../assets/img/parallax/plane.png" alt="">
        <h1 id="headline1">Das perfekte Verbrechen</h1>

        <img src="../assets/img/parallax/parallax/parallax3.png" style="z-index: 2" class="parallax">
        <img src="../assets/img/parallax/parallax/parallax4.png" style="z-index: 3" class="parallax">
        <img src="../assets/img/parallax/parallax/parallax5.png" style="z-index: 5" class="parallax">
        <img src="../assets/img/parallax/parallax/parallax6.png" style="z-index: 6" class="parallax">
        <div style="z-index: 6" class="test paralax" id="test">
            <h1 id="headline2">Der unerklärliche Fall des D.B. Cooper</h1>
        </div>
    </section>
    <!-- <div style="z-index: 6" class="paralax overflow">
            <h1 id="headline2">Der unerklärliche Fall des D.B. Cooper</h1>
    </div> -->
   
    <!-- <section id="helper" style="z-index: 10; position: relative; top: 250px;">
        <div class="helper">
           
        </div>
    </section> -->
</template>

<style lang="scss">
.parallax-hero{
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

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
            top: 40vh;
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
            bottom: -25vh;
        }
    
    }

    .test{
        background-color: #030608;
        height: 0px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: 9;
        overflow: hidden;

        h1{
            position: absolute;
            color: $font-color;
            font-size: calc(100vh*0.07);
            font-weight: 700;
            line-height: 80%;
            right: -700px;
            // top: 10vh;
        }
    }
    
}
    // #background{
    //     top: 0;
    //     left: 0;
    //     width: 100vw;
    //     height: 150vh;
    //     z-index: -1;
    //     object-fit: cover;
    // }


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
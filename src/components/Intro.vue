<script setup>

// window.addEventListener('scroll', () => {
//     const newspapers = document.getElementsByClassName('newspapers');

//     if(window.pageYOffset > 520){
//         newspapers[0].style.paddingTop = `20px`;

//     }else{
//         newspapers[0].style.paddingTop = `800px`;
//     }

//     // newspapers.forEach(newspaper => {
//     //     const distance = window.pageYOffset * 0.1 * (newspaper.style.zIndex *-0.3);
//     //     newspaper.style.transform = `translateY(${distance}px)`;
//     // })
// });

//  window.addEventListener('scroll', () => {
//      const intro = document.getElementById('intro');
     
//      const speed = -1.3;

//      intro.style.transform = `translateY(${window.pageYOffset * speed}px)`;

//  });

</script>

<template>
<section id="intro">
   <div class="intro-text">
    <div class="center">

        <p>
            Am 24. November 1971 entführte ein Mann namens D.B. Cooper ein Flugzeug von Portland nach Seattle und forderte 200.000 Dollar Lösegeld. Nachdem das Geld übergeben worden war, sprang er aus dem Flugzeug und wurde nie wieder gesehen. 
        </p>
        
        <button class="primary" @click="$emit('isVisible', true)">Entdecke jetzt seine Geschichte</button>
    </div>
        </div> 
    </section>
</template>

<style lang="scss">

section#intro{
    background: red;
    height: 450px;
    //background: linear-gradient(0deg, rgba(29,29,29,1) 80%, rgba(3,6,8,1) 100%);
    z-index: 90;
    width: 100%;
    position: relative;
    // padding-bottom: 200px;
    //bottom: -900px;

    .intro-text{
        width: 100%;
        position: absolute;
        bottom: 0px;
        padding-bottom: 70px;
    
        p{
            text-align: center;
        }
    }
}
</style>
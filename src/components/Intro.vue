<script setup>

window.addEventListener('scroll', () => {
    const newspapers = document.getElementsByClass('newspaper');

    
    // newspapers.forEach(newspaper => {
    //     const distance = window.pageYOffset * 0.1 * (newspaper.style.zIndex *-0.3);
    //     newspaper.style.transform = `translateY(${distance}px)`;
    // })
});

</script>

<template>
    <section id="intro">
        <div class="newspapers">
            <img src="../assets/img/newspapers/newspaper1.jpeg" style="left:0px;" alt="" class="newspaper">
            <img src="../assets/img/newspapers/newspaper2.webp" style="right:-40%;" alt="" class="newspaper">
            <img src="../assets/img/newspapers/newspaper3.jpeg" style="left:0px;" alt="" class="newspaper">
            <p>
                Am 24. November 1971 entführte ein Mann namens D.B. Cooper ein Flugzeug von Portland nach Seattle und forderte 200.000 Dollar Lösegeld. Nachdem das Geld übergeben worden war, sprang er aus dem Flugzeug und wurde nie wieder gesehen. 
            </p>
            <button class="primary">Entdecke jetzt seine Geschichte</button>
        </div>
    </section>
</template>

<style lang="scss">

section#intro{
    background: linear-gradient(0deg, rgba(29,29,29,1) 80%, rgba(3,6,8,1) 100%);
    z-index: 10;
    padding-bottom: 90px;

    // top: 400px;

    .newspapers{
        max-width: 1200px;
        margin: 0 auto;
        padding-top:400px;
   
    .newspaper{
        position: relative;
        width: 60%;
        right: 0px;
        border-radius: 8px;
        margin-top: -30px
        
    }
}
}
</style>
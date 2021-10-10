

$('.slider-carousal').owlCarousel({
    loop:true,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        900:{
            items:1
        },
        1200:{
            items:1
        }
    }
})



// team-slider 

$('.team-slider').owlCarousel({ 
    loop:true,
    nav:true,
    autoplay: true,
    margin: 30, 
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    dots:false,  
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3 
        },
        1200:{
            items:4 
        }
    }
})



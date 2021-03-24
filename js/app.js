document.addEventListener('DOMContentLoaded', () => { 
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1,
     {width: '100%'}, 
     {width: '0%', delay: 3, ease: Expo.easeInOut});

     tl.fromTo('.bg-video', 1,
     {width: '0%', opacity: 0}, 
     {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1');

     tl.fromTo('.logo', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.nav-list', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.nav-social', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.item-1', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.item-2', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.item-3', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.item-4', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');

     tl.fromTo('.item-5', .7,
     {y: -50, opacity: 0}, 
     {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=.5');
});
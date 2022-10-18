// import 'animate.css';
'use strict';
let gameImages = document.querySelectorAll('.game');
let gameContents = document.querySelectorAll('.textbox');

let horizon = document.getElementById('hzd');
let hTextbox = document.getElementById('horizonTextbox');




horizon.addEventListener('mouseover', function(){
anime({
    targets: '.hzdimage',
    scale: (1.3),
   });
   
  anime({
    targets: '#horizonTextbox',
    scale: (1.3),
    opacity: .8,
    easing: 'easeOutQuad',
    delay: '250',
    duration: 200,
  });

  hzd.style.cursor = 'pointer';
})

horizon.addEventListener('mouseout', function(){
    anime({
        targets: '.hzdimage',
        scale: (1),
      });
      anime({
        targets: '#horizonTextbox',
        scale: (1),
        opacity: 0,
        duration: 200,
      });

      hzd.style.cursor = 'default';
})


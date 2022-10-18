'use strict';
let gameImages = document.querySelectorAll('.game');
let gameContents = document.querySelectorAll('.textbox');





gameImages.forEach(gameImage=>{
  gameImage.addEventListener('mouseover', function(){
    gameImage.style.cursor = 'pointer';
    gameImage.children[1].style.display= "block";
    gameImage.style.zIndex = 51;
    anime({
      targets: gameImage.children[0],
      scale: (1.3),
     }); 
    anime({
      targets: gameImage.children[1],
      scale: (1.3),
      opacity: .9,
      
    
    });
  
    
  })
})

gameImages.forEach(gameImage=>{
  gameImage.addEventListener('mouseout', function(){
    gameImage.style.cursor = 'default';
    gameImage.children[1].style.display= "none";
    gameImage.style.zIndex = 50;
    anime({
      targets: gameImage.children[0],
      scale: (1),
     });
     
    anime({
      targets: gameImage.children[1],
        scale: (1),
        opacity: 0,
    });
  
    
  })
})

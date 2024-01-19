const background = document.querySelector('.container');
const socialFigure = document.querySelectorAll('.social-2 h1');
const mediaBackground = Array.from(document.querySelectorAll('.media'));
const mediaNumber = document.querySelectorAll('.number h1');
const toggleSwitch = document.querySelector('.checkbox');



 const toggleValidation = (e) => {
    if (toggleSwitch.checked) {
        background.style.backgroundColor = 'hsl(0, 0%, 100%)';
        document.querySelector('.media-cont h1').style.color = 'hsl(230, 17%, 14%)';
        document.querySelector('.main-cont').style.backgroundColor = 'hsl(225, 100%, 98%)';
        document.querySelector('.overview-heading h1').style.color = 'hsl(230, 17%, 14%)';
    }else {
        console.log(e);
        background.style.backgroundColor = 'hsl(232, 19%, 15%)';
        document.querySelector('.media-cont h1').style.color = 'hsl(0, 0%, 100%)';
        document.querySelector('.main-cont').style.backgroundColor = 'hsl(232, 19%, 19%)';
        document.querySelector('.overview-heading h1').style.color = 'hsl(0, 0%, 100%)';
    }
    mediaBackground.forEach((media ) =>{
    socialFigure.forEach((social) =>{
       mediaNumber.forEach((mediaNumber) =>{
        if (toggleSwitch.checked){
            media.style.backgroundColor = 'hsl(227, 47%, 96%)';
            social.style.color = 'hsl(230, 17%, 14%)';
            mediaNumber.style.color = 'hsl(230, 17%, 14%)';
            media.addEventListener('mouseover', function () {
                media.style.backgroundColor = 'hsl(228, 12%, 84%)';
                media.addEventListener('mouseout', function () {
                    media.style.backgroundColor = 'hsl(227, 47%, 96%) ';
                  });
              });
            
        }else {
            media.style.backgroundColor = 'hsl(228, 28%, 20%)';
            social.style.color = 'hsl(0, 0%, 100%)';
            mediaNumber.style.color = 'hsl(0, 0%, 100%)';
            media.addEventListener('mouseover', function () {
                media.style.backgroundColor = 'hsl(228, 34%, 26%)';
                media.addEventListener('mouseout', function () {
                    media.style.backgroundColor = 'hsl(228, 28%, 20%)';
                  });
              });
        };
       });
    });
   
});
}


toggleSwitch.addEventListener('change', toggleValidation);


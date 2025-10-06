
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.nav-right');

hamburger.addEventListener('click', () => {
  navRight.classList.toggle('active');
  hamburger.classList.toggle('active');
});


  var typed = new Typed("#typed-text", {
    strings: ["HTML", "CSS", "JavaScript", "Python", "C++", "PHP", "React"],
    typeSpeed: 100,      
    backSpeed: 60,       
    backDelay: 1000,     
    loop: true,          
    showCursor: false    
  });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const youtube = document.getElementsByClassName("fa-youtube")[0];
const linkedin = document.getElementsByClassName("fa-linkedin")[0];
const github = document.getElementsByClassName("fa-github")[0];
const envelope = document.getElementsByClassName("fa-envelope")[0];
const phone = document.getElementsByClassName("fa-phone")[0];
const line = document.getElementsByClassName("line")[0];

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      const classes = document.querySelectorAll('div');
      var one = window.matchMedia("(min-width: 1700px)");

      for (const classLook of classes) {
        if (classLook.matches('.footer.is-inViewport') && one.matches) {
           linkedin.style.transition="all 2s";
           linkedin.style.transform="translateX(425px)" + "translateY(0px)" + "scale(2, 2)";
           linkedin.style.color = "beige";
           youtube.style.transition="all 2s";
           youtube.style.transform="translateX(675px)" + "translateY(50px)" + "scale(2, 2)";
           youtube.style.color = "beige";
           github.style.transition="all 2s";
           github.style.transform="translateX(925px)" + "translateY(100px)" + "scale(2, 2)";
           github.style.color = "beige";
           phone.style.transition="all 2s";
           phone.style.transform="translateX(1175px)" + "translateY(150px)" + "scale(2, 2)";
           phone.style.color = "beige";
           envelope.style.transition="all 2s";
           envelope.style.transform="translateX(1425px)" + "translateY(200px)" + "scale(2, 2)";
           envelope.style.color = "beige";
           line.style.transition="all 2s";
           line.style.transform="translateY(100%)";
           line.style.visibility = "hidden";
        }
      
        else if (classLook.matches('.is-inViewport')) {
          youtube.style.transition="all 2s";
          youtube.style.transform="translateX(0px)" + "scale(1, 1)";
          youtube.style.color = "white";
          linkedin.style.transition="all 2s";
          linkedin.style.transform="translateX(0px)" + "translateY(0px)" + "scale(1, 1)";
          linkedin.style.color = "white";
          github.style.transition="all 2s";
          github.style.transform="translateX(0px)" + "translateY(0px)" + "scale(1, 1)";
          github.style.color = "white";
          phone.style.transition="all 2s";
          phone.style.transform="translateX(0px)" + "translateY(0px)" + "scale(1, 1)";
          phone.style.color = "white";
          envelope.style.transition="all 2s";
          envelope.style.transform="translateX(0px)" + "translateY(0px)" + "scale(1, 1)";
          envelope.style.color = "white";
          line.style.transition="all 2s";
          line.style.transform="translateY(0px)";
          line.style.visibility = "visible";
        }
      }
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; 
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });

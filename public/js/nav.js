

// let aboutFunction = () => {
//     console.log('got here')
//     window.location.href = "../index.html#aboutArea";
//     return new Promise(resolve => {
//         setTimeout(() => {
//           resolve('resolved');
//         }, 2000);
//       });
//   }

// let goToAbout = async () => {
//     await aboutFunction();
//     window.location.href = "#about";
// }
const reveal = {
    origin : 'left',
    delay    : 300,
    distance : '120px',
    easing   : 'ease-in-out',
  };

const reveal2 = {
    origin : 'top',
    delay    : 300,
    distance : '120px',
    easing   : 'ease-in-out',
};


// for publications
window.sr = ScrollReveal();
// sr.reveal('.pubRow');
sr.reveal('.first', reveal);
sr.reveal('.second', reveal2);

const leftReveal= {
    origin : 'left',
    delay    : 150,
    distance : '120px',
    easing   : 'ease-in-out',
    viewOffset: {
        bottom: 0
    }
  };

  const midReveal= {
    origin : 'left',
    delay    : 300,
    distance : '120px',
    easing   : 'ease-in-out',
    viewOffset: {
        bottom: 0
    }
  };

  const rightReveal= {
    origin : 'left',
    delay    : 450,
    distance : '120px',
    easing   : 'ease-in-out',
    viewOffset: {
        bottom: 0
    }
  };

  sr.reveal('.firstCol', leftReveal);
  sr.reveal('.secondCol', midReveal);
  sr.reveal('.thirdCol', rightReveal);


  
  const footerReveal= {
    origin : 'bottom',
    delay    : 100,
    distance : '120px',
    easing   : 'ease-in-out',
  };

  sr.reveal('.footerContent', footerReveal);
// HORIZONTAL SCROLLEN

const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


// NAVIGATION

const tabs = document.querySelectorAll(".dots__item")
const pages = document.querySelectorAll(".tab")

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      const index = Array.from(pages).indexOf(entry.target)
      tabs.forEach(tabs => {
        tabs.classList.remove("active")
      })
      tabs[index].classList.add("active")
    }
  })
}, {
  threshold: 0.5,
})


pages.forEach(page => {
  observer.observe(page)
})


const hallo = document.querySelectorAll(".mini")
const ciao = document.querySelectorAll(".tab")

const hey = new IntersectionObserver((entries, hey) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      const index = Array.from(ciao).indexOf(entry.target)
      hallo.forEach(hallo => {
        hallo.classList.remove("show")
          hallo.classList.add("hide")
      })
      hallo[index].classList.add("show")
          hallo[index].classList.remove("hide")
    }
  })
}, {
  threshold: 0.5,
})


ciao.forEach(page => {
  hey.observe(page)
})


// STARTSEITE

const vow = document.querySelector(".vow");
vow.addEventListener('click', function() {
  vow.innerHTML = "“to love him, comfort him, honor and </br> keep him, in sickness and in health.”";
  vow.style.textDecoration = "none";
});


const button1 = document.querySelector(".null")
const overlay1 = document.querySelector(".overlay1")
button1.addEventListener("click", function() {
overlay1.style.width = "85%";
});

overlay1.addEventListener("click", function() {
overlay1.style.width = "0%";
});

function hideDis() {
overlay1.style.width = "0%";
}


// KINDER

const buttonkinder = document.querySelector(".zwei")
const overlay3 = document.querySelector(".overlay3")
buttonkinder.addEventListener("click", function() {
overlay3.style.width = "100%";
});

overlay3.addEventListener("click", function() {
overlay3.style.width = "0%";
});

function hideDis3() {
overlay3.style.width = "0%";
};

const overlaykinder = document.querySelectorAll(".overlaykinder")

observer6 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fade');
    } else {
      entry.target.classList.remove('fade');
    }
  });
}, {
  threshold: 0.7,
});


overlaykinder.forEach(page => {
  observer6.observe(page)
})


// HIV

const buttonhiv = document.querySelector(".buttonhiv")
const overlay2 = document.querySelector(".overlay2")
buttonhiv.addEventListener("click", function() {
overlay2.style.width = "100%";
});

overlay2.addEventListener("click", function() {
overlay2.style.width = "0%";
});

function hideDis2() {
overlay2.style.width = "0%";
}


// HER TRUE STORY

const buttonhts = document.querySelector(".drei")
const overlay4 = document.querySelector(".overlay4")
buttonhts.addEventListener("click", function() {
overlay4.style.width = "85%";
});

overlay4.addEventListener("click", function() {
overlay4.style.width = "0%";
});

function hideDis4() {
overlay4.style.width = "0%";
}


// TRENNUNG

const buttontre = document.querySelector(".vier")
const overlay5 = document.querySelector(".overlay5")
buttontre.addEventListener("click", function() {
overlay5.style.width = "85%";
});

overlay5.addEventListener("click", function() {
overlay5.style.width = "0%";
});

function hideDis5() {
overlay5.style.width = "0%";
}


const ch = document.querySelectorAll('.Charles1');

const config1 = {
  threshold: [0.7]
};

observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('trennen');
    } else {
      entry.target.classList.remove('trennen');
    }
  });
});

ch.forEach(image => {
  observer3.observe(image);
});

const di = document.querySelectorAll('.Diana1');

const config2 = {
  threshold: [0.1]
};

observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('trennen');
    } else {
      entry.target.classList.remove('trennen');
    }
  });
});

di.forEach(image => {
  observer4.observe(image);
});

const text = document.querySelectorAll('.pc9');

const config3 = {
  threshold: [0.1]
};

observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('erscheinen');
    } else {
      entry.target.classList.remove('erscheinen');
    }
  });
});

text.forEach(image => {
  observer5.observe(image);
});

// Interview

const interview = document.querySelectorAll('.overlay6');

observer7 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('opacityin');
    } else {
      entry.target.classList.remove('opacityin');
    }
  });
});

interview.forEach(image => {
  observer7.observe(image);
});

// counter

const zähler = document.querySelectorAll(".counter1")

observer10 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
var i = 1960;

var inv = setInterval(function() {
    if(i < 1995)
        document.querySelector(".counter1").innerHTML = ++i;
    else
        clearInterval(inv);
}, 3000 / 100);
}
});
});

zähler.forEach(image => {
  observer10.observe(image);
});

const zähler2 = document.querySelectorAll(".counter2")

observer11 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
var i = 0;

var inv = setInterval(function() {
    if(i < 20)
        document.querySelector(".counter2").innerHTML = ++i;
    else
        clearInterval(inv);
}, 7000 / 100);
}
});
});

zähler2.forEach(image => {
  observer11.observe(image);
});

const zähler3 = document.querySelectorAll(".counter3")

observer12 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
var i = 0;

var inv = setInterval(function() {
    if(i < 23)
        document.querySelector(".counter3").innerHTML = ++i;
    else
        clearInterval(inv);
}, 7000 / 100);
}
});
});

zähler3.forEach(image => {
  observer12.observe(image);
});

const zähler4 = document.querySelectorAll(".counter4")

observer13 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
var i = 0;

var inv = setInterval(function() {
    if(i < 55)
        document.querySelector(".counter4").innerHTML = ++i;
    else
        clearInterval(inv);
}, 2000 / 100);
}
});
});

zähler4.forEach(image => {
  observer13.observe(image);
});

// VERSTEIGERUNG

const images = document.querySelectorAll('.dresses');

observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('binda');
    } else {
      entry.target.classList.remove('binda');
    }
  });
});

images.forEach(image => {
  observer2.observe(image);
});

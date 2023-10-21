import './style.css'

document.addEventListener("DOMContentLoaded", function() {
  const url = document.getElementById("url");
  const betumeret = document.getElementById("betumeret");
  const sorkoz = document.getElementById("sorkoz");
  const szin = document.getElementById("szin");
  const pozicio = document.getElementById("pozicio");
  const kep = document.getElementById("kep");
  const szoveg = document.getElementById("szoveg");

  url.addEventListener("input",function(){
    const u=url.value;
    kep.src=u;
  })

  betumeret.addEventListener("input",function(){
    const betu=betumeret.value+"pt";
    szoveg.style.fontSize=betu;
  })

  sorkoz.addEventListener("input",function(){
    const sor = sorkoz.value + "em";
    szoveg.style.lineHeight=sor;
  })

  szin.addEventListener("input",function(){
    const sz=szin.value;
    szoveg.style.color=sz;
  })

  pozicio.addEventListener("click",function(){
    if (kep.classList.contains("bal")) {
      kep.classList.remove("bal");
      kep.classList.add("jobb");
  } else {
      kep.classList.remove("jobb");
      kep.classList.add("bal");
  }
  })
});
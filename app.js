const scrollOpt={
    distance:'50px',
    origin:'bottom',
    duration:1000
}
ScrollReveal().reveal('h1',scrollOpt)
ScrollReveal().reveal('.subtitle',{
    ...scrollOpt,
    origin:'top',
    delay:800
});
  

ScrollReveal().reveal('.scroll-t',{
    ...scrollOpt,
    origin:'top',
    delay: 1100
});
ScrollReveal().reveal('.scroll-b',{
    ...scrollOpt,
    origin:'bottom',
    delay:1100
});
ScrollReveal().reveal('.scroll-i',{
    ...scrollOpt,
    origin:'left',
    delay:1100
});
ScrollReveal().reveal('.scroll-r',{
    ...scrollOpt,
    origin: 'right',
    delay:1100
});




    function hideUnhide(id) {
      const p1 = document.getElementById(id);
      if (p1.style.display == "none") {
        p1.style.display = "block";
      } else {
        p1.style.display = "none"
      }
    }
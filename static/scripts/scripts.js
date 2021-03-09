$(document).ready(function () {
  if (window.innerWidth < 1024) {
    $("li")
    .click(()=>$(".dropdown-nav")
    .each((i,e)=>{
      $(e).toggleClass(`hidden animate__animated animate__backInRight animate__delay-${i}s`)
    }));
  } else {
    $("li").each((i,e)=>$(e).toggleClass("hidden"))
  }

  $(".skill").hover(function(){
    const t = $(this)[0];
    const logo = $(t.children[0])
    const bar = $(t.children[1])
    if (logo.width() > "64.99999") {
      logo.animate({width: "-=15px", height: "-=15px"}, 500)
      bar.removeClass("hidden")
      bar.animate({
        height: "+=15px",
        opacity: "1"
      }, 500)
    }
  })
});
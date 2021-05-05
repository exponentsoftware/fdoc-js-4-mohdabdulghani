var menu = document.getElementById("menubar")
  var sidenav = document.getElementById("sidenav")
  sidenav.style.width="0px";
  menu.onclick=function(){
    if(sidenav.style.width=="0px"){
      sidenav.style.width="250px"
    }else{
      sidenav.style.width="0px"
    }
    // console.log("clicked")
  }
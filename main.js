$(document).ready(function(){
  $(".next")click(function(){
    var moveOn = ("img.active, .nav > i.active")
    moveOn,removeClass("active")
    if (moveOn.hasCLass("last")){
      $("first").addClass("active")
    }else {
      moveOn.next().addClass("active")
    }
  })

  $(".prev")click(function(){
    var moveOn = ("img.active, .nav > i.active")
    moveOn.removeClass("active")

    if(moveOn.hasClass("firt")){
      $("last").addClass("active")
    }else moveOn.prev().addClass("active")
  })
})

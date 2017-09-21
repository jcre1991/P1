$("#participantes figure img").hover(
  function(){
      var id = $(this).attr("id");
      id = id.substr(3,1);
      if(id === "4"){
          $(this).attr("src","img/participantes/participante" + id + "_ganador.jpg");

      }else{
          $(this).attr("src","img/participantes/participante" + id + "_eliminado.jpg");
      }
  },function(){
      var id = $(this).attr("id");
      id = id.substr(3,1);
      $(this).attr("src","img/participantes/participante" + id + "_simple.jpg");
});

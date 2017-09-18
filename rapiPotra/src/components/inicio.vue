<template>
  <div class="inicio ">
    <div class="comp col l10 m10 s10 z-depth-3">
        <div class="row superior">
            <div class="eventImg col l1 m1 s1">
                <img src="http://www.iconsfind.com/wp-content/uploads/2016/10/20161014_58006bff8b1de.png" alt="" class="circle">
            </div>
            <div class="nombre col l2 m2 s2">
                <p ><a>Nombre del Usuario</a></p>
            </div>
            <div class="col l8 m8 s8">
                
            </div>
            <div class="nombre col l2 m2 s2">
                <p><a>Nombre del Evento</a></p>
                <p><a>Lugar</a></p>
            </div>
        </div>
        <div class="row inferior">
            <div class="equipos col l8 m8 s8">
                <div class="equipoLocal">
                    <div class="col l1 m1 s1" ></div>
                    <div class="imagenLocal col l2 m2 s2">
                        <img src="https://www.blaugranas.com/media/galeria/25/8/9/7/7/n_f_c_barcelona_escudo-5977798.png" alt="" class="circle">
                    </div>
                    <div class="nombreLocal col l4 m4 s4"><a>Equipo 1</a></div>
                    <div class="nombreLocal col l2 m2 s2"><a>Resultado</a></div>
                </div>
                <div class="equipoVisitante">
                    <div class="col l1 m1 s1" ></div>
                    <div class="imagenLocal col l2 m2 s2">
                        <img src="https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1.png" alt="" class="circle">
                    </div>
                    <div class="nombreLocal col l4 m4 s4"><a>Equipo 1</a></div>
                    <div class="nombreLocal col l2 m2 s2"><a>Resultado</a></div>
                </div>
            </div>
            <div class="imagen col l4 m4 s4">
                <img class="imagenEvento"src="http://top101news.com/wp-content/uploads/2015/05/Camp-Nou-Football-Stadium-List-of-soccer-stadiums-by-capacity-e1431344917426.jpg">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inicio',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comp{
      background:white;
      font-family: 'Roboto';
      height:300px;
      margin-bottom:20px;
  }
  #nombreEvento {
        font-family: 'Roboto', cursive;
  }
  .superior{
      background:white;
      height:25%;
      margin:0;
      border-bottom: 1px solid #d9dbdd;
      
  }
  .inferior{
      height:75%;
  }
  .equipos{
    background:white;
    height:100%;
    border-right: 1px solid #d9dbdd;
  }
  .imagen{
    background:white;
    height:100%;
    padding:0;
  }
  .circle{
      height:100%;
      width:100%;
  }
  .eventImg{
      height:100%;
      margin-left:10px;
      margin-right:10px;
      padding-top:10px;
      padding-bottom:5px;
  }
  .nombre{
      display: inline-block;
      position: absolute;
  }
  a{
      color:gray;
  }
  .equipoLocal{
      background:white;
      height:50%;
  }
  .equipoVisitante{
      background:white;
      height:50%;
  }
  .imagenLocal{
      margin-top:3%;
  }
  .nombreLocal{
      margin-top:7%;
  }
  .imagenEvento{
      height:100%;
      width:100%;
  }
</style>

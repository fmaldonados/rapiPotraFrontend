<template>
  <div class="hello">
    <div class="row">
        <div class="row"></div>
        <div class="col l1 m1 s1"></div>
        <div class="form col l6 m6 s6 z-depth-5 ">
            <form>
                <div class="row">
                    <div class="input-field col s5">
                        <input  id="first_name" type="text" class="validate">
                        <label for="first_name">Nombre</label>
                    </div>
                    <div class="input-field col s5">
                        <input  id="first_name" type="text" class="validate">
                        <label for="first_name">Marca</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s5">
                        <input  id="first_name" type="text" class="validate">
                        <label for="first_name">Color</label>
                    </div>
                    <div class="input-field col s5">
                        <input  id="first_name" type="text" class="validate">
                        <label for="first_name">Talla</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s5">
                        <input  id="first_name" type="text" class="validate">
                        <label for="first_name">Tipo</label>
                    </div>
                    <div class="input-field col s5">
                        <input id="first_name" type="text" class="validate">
                        <label for="first_name">Estampado</label>
                    </div>
                </div>

                <a class="waves-effect waves-light btn" >Agregar</a>
            </form>
            <div class="row"></div>
        </div>
    </div>
    <div class="row">
        <div class="col l1 m1 s1"></div>
        <div class="col l6 m6 s6 z-depth-5 ">
            <div class="row">
                <div class="containerCalcetines col l2 m2 s2">
                  <img src="http://www.veganized.es/2728/calcetin-layer-cake.jpg">
                </div>
                <header>Nombre del Calcetin</header>
                <div class="col l4 m4 s4"></div>
                <a class="waves-effect waves-light btn"><i class="material-icons left">mode_edit</i></a>
                <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i></a>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:100%;
    height:100%;
  }

</style>

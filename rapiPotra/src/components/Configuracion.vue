<template>
	<div id="configuracion">
		<div class="mn-content valign-wrapper">
                <main class="mn-inner container" >
                    <div class="valign">
                          <div class="row">
                              <div class="col s12 m6 l4 offset-l4 offset-m3">
                                  <div class="card white darken-1">
                                      <div class="card-content ">
                                          <span class="card-title">Configurar</span>
                                           <div class="row">
                                               <form class="col s12">
                                                    <div class="input-field col s12">
                                                    	<select disabled>
                                                    		<i class="material-icons prefix">account_box</i>
	                                                       <input id="username" type="text" class="validate">
	                                                       <label for="username">Usuario</label>
                                                    	</select>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <i class="material-icons prefix">account_circle</i>
                                                       <input id="username" type="text"  v-bind:value = "user.nombre" class="validate">
                                                       <label for="username">Nombre</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                    	<i class="material-icons prefix">face</i>
                                                       <input id="username" type="text"  v-bind:value = "user.apellido" class="validate">
                                                       <label for="username">Apellido</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                      <i class="material-icons prefix">add_circle_outline</i>
                                                       <input id="username" type="text"  v-bind:value = "user.imagen" class="validate">
                                                       <label for="username">Imagen</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                    	<i class="material-icons prefix">security</i>
                                                       <input id="password" type="password"  v-bind:value = "user.contraseña" class="validate">
                                                       <label for="password">Cambiar Contraseña</label>
                                                    </div>
                                                    <div class="col s12">
                                                      <a v-on:click="modificar()" class="waves-effect waves-light btn">button</a>
                                                    </div>
                                               </form>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                </main>
            </div>
	</div>
</template>

<script>
export default {
  name: 'configuracion',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user{
        nombreUsuario:'',
        nombre: '',
        apellido: '',
        contraseña: '',
        imagen: ''
      }
    }
  },
  methods{
    modificar(){
        eventService.modificarEventos(this.user, "users?nombreUsuario="+this.nombreUsuario).then(response => {
          
        }, response => {
          alert('Error');
        });
      }
  },
  beforeCreate(){
    if(sessionStorage.rapiPotra) != undefined){
      this.nombreUsuario = sessionStorage.rapiPotra;
      userService.getUsers("users?nombreUsuario="+this.nombreUsuario).then(response => {
        this.user = response.body[0];
      },response => {
        alert('Error');
      });
    }
  }
}
</script>
<template>
	<div id="configuracion">
		<div class="mn-content valign-wrapper">
                <main class="mn-inner container" >
                    <div class="valign">
                          <div class="row">
                              <div class="col s12 m12 l12  offset-s1">
                                  
                                      
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
                                                       <input id="username" type="text"  v-model="user.nombre" class="validate">
                                                       <label for="username">Nombre</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                    	<i class="material-icons prefix">face</i>
                                                       <input id="username" type="text"  v-model="user.apellido" class="validate">
                                                       <label for="username">Apellido</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                      <i class="material-icons prefix">add_circle_outline</i>
                                                       <input id="username" type="text"  v-model="user.imagen" class="validate">
                                                       <label for="username">Imagen</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                    	<i class="material-icons prefix">security</i>
                                                       <input id="password" type="password"  v-model="user.contraseña" class="validate">
                                                       <label for="password">Cambiar Contraseña</label>
                                                    </div>
                                                    <div class="col s12">
                                                      <a v-on:click="modificar" class="waves-effect waves-light btn">button</a>
                                                    </div>
                                               </form>
                                          </div>
                                      
                                  
                              </div>
                        </div>
                    </div>
                </main>
            </div>
	</div>
</template>

<script>
import eventoService from '../../services/evento'
import userService from '../../services/user'
export default {
  name: 'configuracion',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        nombreUsuario:'',
        nombre: '',
        apellido: '',
        contraseña: '',
        imagen: ''
      }
    }
  },
  methods: {
    modificar(){
        userService.modifyUsers("modifyFriend?nombreUsuario="+this.nombreUsuario,{nombre:this.user.nombre,apellido:this.user.apellido}).then(response => {
          console.log(response);
          alert('Usuario modificado')
        }, response => {
          alert('Error');
        });
      }
  },
  beforeCreate(){
    if((sessionStorage.rapiPotra) != undefined){
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
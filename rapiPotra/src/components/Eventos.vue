<template>
	<div id= "eventos">
		<div class="row">
			<div class="col s12 m12 l12 xs12">
				<nav class= "black">
				    <div class="nav-wrapper">
				      <ul id="nav-mobile" class= "hide-on-med-and-down">
				        <li><a v-on:click="tipo='creado'">Creados</a></li>
				        <li><a v-on:click="tipo='aceptado'">Aceptados</a></li>
				        <li><a v-on:click="tipo='invitado'">Invitaciones</a></li>
				        <li><a v-on:click="tipo='agregado'">Agregar Evento</a></li>
				      </ul>
				    </div>
  				</nav>
			</div>
			<div class="col s12 m12 l12 xs12">
				<div v-show="tipo==='creado'">
					<div>
					    <h1>1</h1>
					</div>
				</div>
			</div>
			<div class="col s12 m12 l12 xs12">
				<div v-show="tipo==='aceptado'">
					<div>
					    <h1>2</h1>
					</div>
				</div>
				
			</div>
			<div class="col s12 m12 l12 xs12">
				<div v-show="tipo==='invitado'">
					<div>
					    <h1>3</h1>
					</div>
				</div>
			</div>
			<div class="col s12 m12 l12 xs12">
				<div v-show="tipo==='agregado'">
					<div>
					    <div class="row">
						    <form class="col s12">
						      <div class="row">
						        <div class="input-field col s12">
						          <input id="first_name" type="text" class="validate">
						          <label for="first_name">Nombre</label>
						        </div>
						      </div>
						  </form>
						       <form class="col s12">
						      <div class="row">
						        <div class="input-field col s6">
						          <input id="first_name" type="text" class="validate">
						          <label for="first_name">Fecha</label>
						        </div>
						        <div class="input-field col s6">
						          <input id="last_name" type="text" class="validate">
						          <label for="last_name">Hora</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field col s12">
						          <input id="local" type="text" class="validate">
						          <label for="local">Nombre Local</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field col s12">
						          <input id="local" type="text" class="validate">
						          <label for="local">Nombre Equipo Casa</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="input-field col s12">
						          <input id="local" type="text" class="validate">
						          <label for="local">Nombre Equipo Visitante</label>
						        </div>
						      </div>
						      <div class="row">
						        <div class="file-field input-field col s12">
								      <div class="btn">
								        <span>Logo Equipo Casa</span>
								        <input type="file">
								      </div>
								      <div class="file-path-wrapper">
								        <input class="file-path validate" type="text">
								    </div>
						        </div>
						      </div>
						      <div class="row">
						        <div class="file-field input-field col s12">
								      <div class="btn">
								        <span>Logo Equipo Visitante</span>
								        <input type="file">
								      </div>
								      <div class="file-path-wrapper">
								        <input class="file-path validate" type="text">
								    </div>
						        </div>
						      </div>
						      <div class="row">
						        <div class="file-field input-field col s12">
								      <div class="btn">
								        <span>Video</span>
								        <input type="file">
								      </div>
								      <div class="file-path-wrapper">
								        <input class="file-path validate" type="text">
								    </div>
						        </div>
						      </div>
						      <div class="row">
						        <div class="col s12">
						          <button class="btn waves-effect waves-light black" type="submit" name="action">Submit
								    <i class="material-icons right">send</i>
								  </button>
						        </div>
						      </div>
						    </form>
						  </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import eventoService from './../services/evento'
import userService from '../services/user'
export default {
  name: 'eventos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tipo: 'agregado',
      user: {},
      eventos: [],
      evento: {
      	nombre:'',
      	fecha: '',
      	nombreLocal: '',
      	hora: '',
      	equipo1: '',
      	equipo2: '',
      	logo1: '',
      	logo2: '',
      	video: '',
      	imagen: '', 
      	resultado1 : '',
  		resultado2 : '',
  		resultadoGanador: ''
      },
      nombreUsuario: String
    }
  },
	beforeCreate(){
		if(sessionStorage.getItem('NombreUsuario') != undefined){
			this.nombreUsuario = sessionStorage.getItem('NombreUsuario');
			userService.getUsers("users?nombreUsuario="+this.nombreUsuario).then(response => {
				this.user = response.body[0];
				for(let i = 0; i < this.user.eventosCreados.length; i++){
					eventoService.buscarEventoNombre(this.user.eventosCreados[i]).then(response =>{
						this.evento.push(response.body[0]);
					}, response => {
						alert('Error');
					} )
				}
				for(let i = 0; i < this.user.eventosInvitaciones.length; i++){
					eventoService.buscarEventoNombre(this.user.eventosInvitaciones[i]).then(response =>{
						this.evento.push(response.body[0]);
					}, response => {
						alert('Error');
					} )
				}
			},response => {
				alert('Error');
			});
		}
	}
}
</script>

<style scoped>
a:hover { 
    background-color: gray;
}
</style>
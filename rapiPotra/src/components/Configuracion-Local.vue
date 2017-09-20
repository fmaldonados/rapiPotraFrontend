<template>
	<div id="configuracion">
		<div class="mn-content valign-wrapper">
                <main class="mn-inner container" >
                    <div class="valign">
                          <div class="row">
                              <div class="col s12 m6 l4 offset-l4 offset-m3">
                                  <div class="card white darken-1">
                                      <div class="card-content ">
                                          <span class="card-title">Sign In</span>
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
                                                       <input id="username" type="text" class="validate">
                                                       <label for="username">Nombre Local</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                    	<i class="material-icons prefix">map</i>
                                                       <label for="username">Direccion</label>
                                                       <div id="mapa" style="width:400px;height:400px"></div>
                                                    </div>
                                                    <div class="col s12">
                                                      <label>Hora de Abrir</label>
                                                      <select class="browser-default">
                                                        <option value="1">12 AM</option>
                                                        <option value="2">1 AM</option>
                                                        <option value="3">2 AM</option>
                                                        <option value="4">3 AM</option>
                                                        <option value="5">4 AM</option>
                                                        <option value="6">5 AM</option>
                                                        <option value="7">6 AM</option>
                                                        <option value="8">7 AM</option>
                                                        <option value="9">8 AM</option>
                                                        <option value="10">9 AM</option>
                                                        <option value="11">10 AM</option>
                                                        <option value="12">11 AM</option>
                                                        <option value="13">12 PM</option>
                                                        <option value="14">1 PM</option>
                                                        <option value="15">2 PM</option>
                                                        <option value="16">3 PM</option>
                                                        <option value="17">4 PM</option>
                                                        <option value="18">5 PM</option>
                                                        <option value="19">6 PM</option>
                                                        <option value="20">7 PM</option>
                                                        <option value="21">8 PM</option>
                                                        <option value="22">9 PM</option>
                                                        <option value="23">10 PM</option>
                                                        <option value="24">11 PM</option>
                                                      </select>
                                                    </div>
                                                    <div class="col s12">
                                                      <label>Hora de Cerrar</label>
                                                      <select class="browser-default">
                                                        <option value="1">12 AM</option>
                                                        <option value="2">1 AM</option>
                                                        <option value="3">2 AM</option>
                                                        <option value="4">3 AM</option>
                                                        <option value="5">4 AM</option>
                                                        <option value="6">5 AM</option>
                                                        <option value="7">6 AM</option>
                                                        <option value="8">7 AM</option>
                                                        <option value="9">8 AM</option>
                                                        <option value="10">9 AM</option>
                                                        <option value="11">10 AM</option>
                                                        <option value="12">11 AM</option>
                                                        <option value="13">12 PM</option>
                                                        <option value="14">1 PM</option>
                                                        <option value="15">2 PM</option>
                                                        <option value="16">3 PM</option>
                                                        <option value="17">4 PM</option>
                                                        <option value="18">5 PM</option>
                                                        <option value="19">6 PM</option>
                                                        <option value="20">7 PM</option>
                                                        <option value="21">8 PM</option>
                                                        <option value="22">9 PM</option>
                                                        <option value="23">10 PM</option>
                                                        <option value="24">11 PM</option>
                                                      </select>
                                                    </div>
                                                    </div>
                                                    <div class="input-field col s12">
                                                    	<i class="material-icons prefix">security</i>
                                                       <input id="password" type="password" class="validate">
                                                       <label for="password">Cambiar Contraseña</label>
                                                    </div>
                                                    <div class="col s12">
                                                    	<a class="waves-effect waves-light btn red">Eliminar Local</a>
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
  name: 'configuracion-local',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<script>
    function miMapa(){
         var opciones={
           center: new google.maps.LatLng(14.07,-87.19),
           zoom: 10,
           mapTypeId: google.maps.MapTypeId.HYBRID
         }
    }
    var map = new google.maps.Map(document.getElementById("mapa"),opciones);
</script>
<script src="https://maps.googleapis.com/maps/api/js?callback=miMapa"></script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url = 'http://localhost:8000/';

export default{
	buscarEventoNombre(params){
		return Vue.http.get(url+params);
	},
	buscarEventos(){
		return Vue.http.get(url+'eventos');
	},
	modificarEventos(){
		return Vue.http.put(url+'eventos');
	}
}
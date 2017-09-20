import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://rapipotra.herokuapp.com/';
export default{
	buscarEventoNombre(params){
		return Vue.http.get(url+params);
	},
	buscarEventos(){
		return Vue.http.get(url+'eventos');
	},
	modificarEventos(params, payload){
		return Vue.http.put(url+'eventos', params, payload);
	}
}
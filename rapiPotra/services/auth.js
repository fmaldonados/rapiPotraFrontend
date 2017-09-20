import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='http://localhost:8000/';
export default{
	login(body){
		return Vue.http.post(url+"login",body);
	},
	loginLocal(body){
		return Vue.http.post(url+"loginLocal",body);
	},
	logout(){
		return Vue.http.get(url+"logout");
	}
}
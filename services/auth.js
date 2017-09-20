import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://rapipotra.herokuapp.com/';
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
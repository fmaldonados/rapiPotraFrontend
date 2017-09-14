import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='http://localhost:8000/';
export default{
	getUsers(params){
		return Vue.http.get(url+params);
	},
	createUser(newSock){
		return Vue.http.post('http://localhost:8000/createSock',newSock);
	}
}
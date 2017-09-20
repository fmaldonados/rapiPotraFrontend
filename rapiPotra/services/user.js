import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://rapipotra.herokuapp.com/';
export default{
	getUsers(params){
		return Vue.http.get(url+params);
	},
	createUser(body){
		return Vue.http.post('https://rapipotra.herokuapp.com/createUser',body);
	},
	modifyUsers(params,payload){
		console.log(payload);
		return Vue.http.put(url+params,payload);
	}
}
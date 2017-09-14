import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default{
	getSocks(){
		return Vue.http.get('http://localhost:8000/getSock');
	},
	createSock(newSock){
		return Vue.http.post('http://localhost:8000/createSock',newSock);
	}
}
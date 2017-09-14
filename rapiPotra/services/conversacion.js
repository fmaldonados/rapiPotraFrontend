import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='http://localhost:8000/conversacion';
export default{
	getConversacion(params){
        console.log(url+params);
		return Vue.http.get(url+params);
	},
	createSock(newconversacion){
		return Vue.http.post(url,newConversacion);
	},
    modifySock(params,newconversacion){
		return Vue.http.put(url+params,newConversacion);
	}
}
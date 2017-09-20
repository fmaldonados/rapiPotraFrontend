import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://rapipotra.herokuapp.com/';
export default{
	getConversacion(params){
        console.log(url+params);
		return Vue.http.get(url+params);
	},
	createSock(newconversacion){
		return Vue.http.post(url,newConversacion);
	},
    modifySock(params,newConversacion){
		return Vue.http.put(url+params,newConversacion);
	}
}
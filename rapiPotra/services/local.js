import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='http://localhost:8000/local';
export default{
	getLocales(params){
		return Vue.http.get(url+params);
	},
	createLocal(body){
		return Vue.http.post(url,body);
	}
}
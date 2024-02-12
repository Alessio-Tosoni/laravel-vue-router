<script>
import AppComponent from "./components/AppComponent.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();

		
	},
	methods: {
		getEventList() {
			axios.get(this.store.apiUrl + this.store.apiEventEndPoint).then(risultato => {

			if(risultato.status === 200 && risultato.data.success){
				console.log(risultato.data.results);
				this.store.eventList = risultato.data.results;
			} else{
				console.error("ooooops there is a little problem");
			}
			}).catch(errore => {
			console.error(errore);
			});
		}
	}
}
</script>

<template>
	<main>
		<AppComponent />

		
			
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>
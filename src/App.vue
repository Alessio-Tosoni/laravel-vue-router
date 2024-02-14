<script>


import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management


export default {
	components: {

	},
	data() {
		return {
			store,
			menuItems: [
				{
					routeName: "home",
					label: "Home"
				},
				{
					routeName: "about",
					label: "About Us"
				},
				{
					routeName: "events",
					label: "Our events list"
				}
			]
		}
	},
	mounted() {
		this.getEventList();


	},
	methods: {
		getEventList() {
			axios.get(this.store.apiUrl + this.store.apiEventEndPoint).then(risultato => {

				if (risultato.status === 200 && risultato.data.success) {
					console.log(risultato.data.results);
					this.store.eventList = risultato.data.payload;
				} else {
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
	<header>
		<div class="d-flex justify-content-around">
			<div v-for="(item, index) in menuItems" key="index">
				<router-link :to="{ name: item.routeName }" class="nav-link">
					{{ item.label }}
				</router-link>
			</div>
		</div>
	</header>
	<router-view></router-view>
	<main>




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
header {
	background-color: #333;
}

main {
	padding: 1rem;
}
</style>
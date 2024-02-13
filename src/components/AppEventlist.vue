<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppEventlist",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div>
        <h1 class="text-center mb-5">Events's List</h1>
    </div>

    <div class=" d-flex justify-content-around">
				<div v-for=" evento in store.eventList" class="card" style="width: 18rem;">
					
					<div class="card-body">
						<h5 class="card-title text-center">{{ evento.name }}</h5>
						<span class="card-text ">{{ evento.description }}</span>
						<div class="d-flex justify-content-between  align-items-end pt-4">
							<p>{{ evento.location }}</p>
							<p>{{ evento.date }}</p>
						</div>
					</div>
				</div>
	</div>

		<div class="text-center mt-5">
			<button class="btn btn-primary ">
				<font-awesome-icon icon="fa-solid fa-home" class="me-1" />
				<span>Home Button</span>
			</button>
		</div>
    
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>
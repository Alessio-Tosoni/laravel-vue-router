<script>
import { store } from "../store.js" 
import AppEventlist from "../components/AppEventlist.vue"

 export default{
    name: "Eventlist",
    components:{
        AppEventlist
    },
    methods: {
        backToHome() {
            this.$router.push({ name: 'home' })
        }
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <h1 class=" text-center mb-5">Events's List</h1>
    <div class="container ">
        <div class="row">
            <div class="d-flex justify-content-around flex-wrap" >
                <AppEventlist v-for="evento in store.eventList" :item="evento"  />
            </div>
        </div>
    </div>
    <div class=" text-center mt-5">
        <a class="btn btn-primary px-5 " @click="backToHome">Home Button</a>
    </div>
        
    
</template>

<style scoped></style>
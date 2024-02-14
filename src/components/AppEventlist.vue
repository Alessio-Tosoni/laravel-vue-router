<script>


export default {
    name: "AppEventlist",
    props: ["item"],
       
       
    
    
   
}
</script>

<template>
   

    <div class="my-3" >
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title text-center">{{ item?.name }}</h5>
                <span class="card-text ">{{ item?.description }}</span>
                <div class="d-flex justify-content-between  align-items-end pt-4">
                    <p>{{ item?.location }}</p>
                    <p>{{ item.date }}</p>
                </div>
            </div>
            <div class="card-footer text-center">
                <router-link :to="{ name: 'event-detail', params: { id: item.id } }" class="btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" /> 
                    <span>Detail</span>
                </router-link>
            </div> 

        </div>
    </div>
   
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>
<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
    name: "EventDetail",
    props: ["id"],
    data() {
        return {
            store,
            evento: null,
            error: false
        }
    },
    mounted() {
        console.log("Eventi: ", this.store.eventList);
        console.log("Evento dettaglio: ", this.store.eventList[this.id - 1]);

        // for (const item of this.store.eventList) {
        //     if (item.id == this.id) {
        //         this.evento = item;
        //     }
        // }

        // this.evento = this.store.eventList.find(item => item.id == this.id);

        this.getEventDetail();

    },
    methods: {
        getEventDetail() {

            let url = this.store.apiUrl + this.store.apiEventEndPoint + this.id;
            console.log(url);

            axios.get(url).then(risultato => {
                if (risultato.status === 200 && risultato.data.success) {
                    console.log(risultato.data.payload);
                    this.evento = risultato.data.payload;
                } else { //se il server risponde, ma con esito negativo
                    //ToDo: distinguere il motivo dell'else.
                    //es. controllare statusCode, presenza e veridicità di data.success
                    console.error("Ops... qualcosa è andato storto");
                    this.error = true;
                    this.$router.push({ name: "events" });
                }
            }).catch(errore => { //nel caso si spacchi del tutto la chiamata
                console.error(errore);
                this.$router.push({ name: "events" }); //redireziona alla lista eventi
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 gy-4">
                <div v-if="error">ooops there is an error</div>
                <template v-else>
                    <div v-if="!evento">Loading data</div>
                    <div class="card h-100" v-else>
                        
                        <h5 class="card-title bg-black  text-light text-center">{{ evento?.name }}</h5>
                        <div class="card-body text-center">
                            <div>{{ evento?.description }}</div>
                            <div class="d-flex justify-content-center">
                                <span class="mx-3">{{ evento?.location }}</span>
                                <span>{{ evento?.date }}</span>
                            </div>

                            <!-- <h6 class="card-subtitle mb-2 text-muted">
                                {{ evento?.user ? evento?.user.name : "Unknown user" }}
                            </h6> -->
                        </div>

                    </div>

                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
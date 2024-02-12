import { reactive } from 'vue'

export const store = reactive({
    chiave: "valore",
    apiUrl:"http://127.0.0.1:8000/api/",
    apiEventEndPoint: "events",
    eventList: []
});
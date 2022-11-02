import axios from "axios";
// https://my-json-server.typicode.com/mohamed-hossam637/tasks
// githup api calls
const apiClint = axios.create({
    baseURL: "https://my-json-server.typicode.com/mohamed-hossam637/tasks",
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

export default {
    getRepos(){
        return apiClint.get("/tasks") ;
    } , 
    getProjects(){
        return apiClint.get("/projects") ;
    } , 
    getInfo(){
        return apiClint.get("/info")
    } ,
    getTask(id){
        return apiClint.get("/tasks/" + id)
    }
}

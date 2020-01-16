//import the axios HTTP client to communicate with the API
import axios from 'axios';

class BlueService {
    
    constructor(
        url = 'https://socialapp-api.herokuapp.com/',
        client = axios.create()
    ){
        this.url = url;
        this.client = client;
        this.config = {}
    }

    // exaples of posting

    // var config = {
    //     headers: {'Authorization': "bearer " + token}
    // };
    // var bodyParameters = {
    //    key: "value"
    // }
    // Axios.post( 
    //   'http://localhost:8000/api/v1/get_token_payloads',
    //   bodyParameters,
    //   config
    // ).then((response) => {
    //   console.log(response)
    // }).catch((error) => {
    //   console.log(error)
    // });
    



    

}
export default BlueService;
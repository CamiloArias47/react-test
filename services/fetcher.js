import {apiUrl} from 'services/conf'

export const fetcherApi = ({route, config = {}, fullRoute = false}) => {
    
    const url = fullRoute ? route : apiUrl+''+route

    if(config.method === 'POST' || config.method === 'PUT'){
        config = { ...config, headers:{ 'Content-Type': 'application/json'} }
    }
	
    return fetch(url,config)
            .then(data => data.json())
	 
}
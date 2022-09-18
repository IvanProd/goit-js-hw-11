import {LINK_TO_BACK, ACCESS_KEY, REQUEST_PARAMETERS, refs} from './reference';
import axios from 'axios';

function reqesToServer (userInput, countPages){
    
    return axios(`${LINK_TO_BACK}${ACCESS_KEY}&q=${userInput}&${REQUEST_PARAMETERS}&page=${countPages}&per_page=20`)
};

export {reqesToServer};
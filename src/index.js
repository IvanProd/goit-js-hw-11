import {refs} from './js/reference';
import { Notify } from 'notiflix';
import {reqesToServer} from './js/request_to_Back'



refs.button.addEventListener('click', loadContent);

function loadContent(event){
    event.preventDefault();
    const userInput = refs.input.value;
    console.log(userInput);
     reqesToServer(userInput).then(response => {console.log(response)})
}
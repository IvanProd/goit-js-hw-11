import {refs} from './js/reference';
import { Notify } from 'notiflix';
import {reqesToServer} from './js/request_to_Back';
import {markupElements, btnLoad} from './js/creationg_markup';



refs.button.addEventListener('click', loadContent);

function loadContent(event){
    event.preventDefault();
    const userInput = refs.input.value;
    
    try{
        reqesToServer(userInput).then(response => {
            console.log(typeof response.data.hits);
            if(response.data.hits.length === 0){
                return
            }
            
            const markupInGalleru = document.querySelector('.gallery');
            // console.log(markupElements(response.data))
            markupInGalleru.innerHTML = markupElements(response.data)
            //markupInGalleru.insertAdjacentHTML('beforeend', markupElements (response.data));
            refs.body.insertAdjacentHTML('beforeend', btnLoad)
        });
    }
    catch(error){
        console.log(error);
    };
};
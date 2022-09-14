import {refs} from './js/reference';
import { Notify } from 'notiflix';
import {reqesToServer} from './js/request_to_Back';
import {markupElements} from './js/creationg_markup';



refs.button.addEventListener('click', loadContent);
refs.input.addEventListener('input', enableButtonSearch)
refs.btnLoad.addEventListener('click', nextContentLoad)
let countPages = 1;

console.log('countPages', countPages)

function loadContent(event){
    event.preventDefault();
    const userInput = refs.input.value;
    
    try{
        reqesToServer(userInput, countPages).then(response => {
            console.log(typeof response.data.hits);
            if(response.data.hits.length === 0){
                return
            }
            
            const markupInGalleru = document.querySelector('.gallery');
            // console.log(markupElements(response.data))
            markupInGalleru.innerHTML = markupElements(response.data)
            //markupInGalleru.insertAdjacentHTML('beforeend', markupElements (response.data));
            refs.btnLoad.classList.toggle('visually-hidden')
            refs.button.setAttribute('disabled', true);
        });
    }
    catch(error){
        console.log(error);
    };
};

function enableButtonSearch(){
    if(refs.input.value === ''){
        console.log(refs.input.value);
        refs.button.removeAttribute('disabled');
        refs.btnLoad.classList.toggle('visually-hidden')
    };
};

function nextContentLoad(event){
    const userInput = refs.input.value;
    countPages += 1;
    console.log('countPages', countPages)
    reqesToServer(userInput, countPages).then(response => {
        console.log(typeof response.data.hits);
        if(response.data.hits.length === 0){
            return
        }
        // console.log(markupElements(response.data))
        // markupInGalleru.innerHTML = markupElements(response.data)
        refs.gallery.insertAdjacentHTML('beforeend', markupElements (response.data));
    });
};
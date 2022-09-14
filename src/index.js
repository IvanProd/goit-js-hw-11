import {refs} from './js/reference';
import { Notify } from 'notiflix';
import {reqesToServer} from './js/request_to_Back';
import {markupElements} from './js/creationg_markup';
import SimpleLightbox from 'simplelightbox';

//ЗРОБИТИ ЗАБОРОНУ ВИКОНАННЯ ПОШУКУ ЯКЩО ІНПУТ НЕ ЗАПОВНЕНО!!!!!!!!!!!!!!!!!

refs.button.addEventListener('click', loadContent);
refs.input.addEventListener('input', enableButtonSearch)//ДОДАТИ debounce
refs.btnLoad.addEventListener('click', nextContentLoad)
let countPages = 1;

console.log('countPages', countPages)

function loadContent(event){
    event.preventDefault();
    const userInput = refs.input.value;
    
    try{
        if (userInput != ''){
            reqesToServer(userInput, countPages).then(response => {
                console.log(typeof response.data.hits);
                if(response.data.hits.length === 0){
                    Notify.failure(
                        'Sorry, there are no images matching your search query. Please try again.'
                      );
                    return
                }
                
                const markupInGalleru = document.querySelector('.gallery');
                // console.log(markupElements(response.data))
                markupInGalleru.innerHTML = markupElements(response.data)
                //markupInGalleru.insertAdjacentHTML('beforeend', markupElements (response.data));
                refs.btnLoad.classList.remove('visually-hidden')
                refs.button.setAttribute('disabled', true);
            });
        }
        return
    }
    catch(error){
        console.log(error);
    };
};

function enableButtonSearch(){
    if(refs.input.value === ''){
        console.log(refs.input.value);
        refs.button.removeAttribute('disabled');
        refs.btnLoad.classList.add('visually-hidden')
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

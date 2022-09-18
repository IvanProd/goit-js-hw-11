import {refs} from './js/reference';
import { Notify } from 'notiflix';
import {reqesToServer} from './js/request_to_back';
import {markupElements} from './js/creationg_markup';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"


refs.button.addEventListener('click', loadContent);
refs.input.addEventListener('input', enableButtonSearch)//ДОДАТИ debounce
refs.btnLoad.addEventListener('click', nextContentLoad)

let lightbox = new SimpleLightbox('.photo-card a', { captionDelay: 250, showCounter: true});//???????????????????????????????

let countPages = 1;


function loadContent(event){
    event.preventDefault();
    const userInput = refs.input.value.trim();
    if (!userInput){
        Notify.info("Fill in the search field")
        return
    }
    try{
        
        reqesToServer(userInput, countPages).then(response => {
            if(response.data.hits.length === 0){
                Notify.failure(
                    'Sorry, there are no images matching your search query. Please try again.'
                );
                return
            }
            test(response, 1, false)
        });
    }
    catch(error){
        console.log(error);
    };
};

function enableButtonSearch(){
    if(refs.input.value === ''){
        statebuttonsearch()
        refs.btnLoad.classList.add('visually-hidden')
    };
};

function nextContentLoad(event){
    event.preventDefault();
    const userInput = refs.input.value;
    countPages += 1;
    
    try{
        reqesToServer(userInput, countPages).then(response => {
            if(response.data.hits.length === 0){
                return
            } 
            test(response, 2, false)
            Notify.success(`Hooray! We found ${response.data.totalHits} images.`)
        });
    }
    catch(error){
        console.log(error);
    };

};

function modalImgWindow(){
    lightbox.refresh();
}

function test(response, method, state){
        switch (method){
            case 1:
                refs.gallery.innerHTML = markupElements(response.data);
                break;
            case 2:
                refs.gallery.insertAdjacentHTML('beforeend', markupElements(response.data));
                break;
        }
        if(response.data.hits.length < 20){
            Notify.failure("We're sorry, but you've reached the end of search results")
            refs.btnLoad.classList.toggle('visually-hidden', true)
            return
        }
        modalImgWindow()
        refs.btnLoad.classList.toggle('visually-hidden', state)
        statebuttonsearch(true)
}

function statebuttonsearch(state){
    if(state === true){
            refs.button.setAttribute('disabled', true);
            return
    }
    refs.button.removeAttribute('disabled');
}
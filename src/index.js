import {refs} from './js/reference';
import { Notify } from 'notiflix';
import {reqesToServer} from './js/request_to_Back';
import {markupElements} from './js/creationg_markup';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"


refs.button.addEventListener('click', loadContent);
refs.input.addEventListener('input', enableButtonSearch)//ДОДАТИ debounce
refs.btnLoad.addEventListener('click', nextContentLoad)

let countPages = 1;

// console.log('countPages', countPages)

function loadContent(event){
    event.preventDefault();
    const userInput = refs.input.value;
    
    try{
        if (userInput != ''){
            reqesToServer(userInput, countPages).then(response => {
                // console.log(typeof response.data.hits);
                if(response.data.hits.length === 0){
                    Notify.failure(
                        'Sorry, there are no images matching your search query. Please try again.'
                    );
                    return
                }
                
                refs.gallery.innerHTML = markupElements(response.data);
                refs.btnLoad.classList.remove('visually-hidden')
                refs.button.setAttribute('disabled', true);
            });
        }else{
            Notify.info("Fill in the search field")
        }
        
    }
    catch(error){
        console.log(error);
    };
};

function enableButtonSearch(){
    if(refs.input.value === ''){
        // console.log(refs.input.value);
        refs.button.removeAttribute('disabled');
        refs.btnLoad.classList.add('visually-hidden')
    };
};

function nextContentLoad(event){
    event.preventDefault();
    const userInput = refs.input.value;
    countPages += 1;
    // console.log('countPages', countPages)
    reqesToServer(userInput, countPages).then(response => {
        // console.log(response.data.totalHits);
        if(response.data.hits.length === 0){
            return
        } 
        
        refs.gallery.insertAdjacentHTML('beforeend', markupElements(response.data));
        massegNotEnougthHits(response)
        
    });
};

function massegNotEnougthHits(response){
    if(response.data.hits.length < 20){
        Notify.failure("We're sorry, but you've reached the end of search results")
        refs.btnLoad.classList.add('visually-hidden')
        return
    }
    Notify.success(`Hooray! We found ${response.data.totalHits} images.`)
}

// function modalImgWindow(){}
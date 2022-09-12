import { btnLoad } from "./creationg_markup";

const LINK_TO_BACK = 'https://pixabay.com/api/?key=';
const ACCESS_KEY = '29824999-ac7732ff734cbf874c6efba54';
const REQUEST_PARAMETERS = 'image_type=photo&orientation=horizontal&safesearch=true'
//вигляд запиту до бекєнду `${LINK_TO_BACK}${ACCESS_KEY}&q=${вводиться в input}&${REQUEST_PARAMETERS}&page=1&per_page=20`

const refs = {
    body: document.querySelector('body'),
    form: document.querySelector('.search-form'),
    input: document.querySelector('[name="searchQuery"]'),
    button: document.querySelector('[type="submit"]'),
    gallery: document.querySelector('.gallery'),
    section: document.querySelector('.position')

};
// console.log(refs.input)
export {LINK_TO_BACK, ACCESS_KEY, REQUEST_PARAMETERS, refs}
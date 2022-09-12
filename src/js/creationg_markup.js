function markupElements (data){
  const elements = data.hits;
  
  const markup = elements.map(element => {
    console.log(element.tags);
    return `<div class="photo-card">
    <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b> ${element.likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${element.views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${element.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${element.downloads}
      </p>
    </div>
  </div>`
  }).join('');
  return markup;
};
const btnLoad = `<button type="button" class="load-more">Load more</button>`
// const markup = `<div class="photo-card">
//                     <img src="${elements.webformatURL}" alt="${elements.tags}" loading="lazy" />
//                     <div class="info">
//                       <p class="info-item">
//                         <b>Likes</b> ${elements.likes}
//                       </p>
//                       <p class="info-item">
//                         <b>Views</b> ${elements.views}
//                       </p>
//                       <p class="info-item">
//                         <b>Comments</b> ${elements.comments}
//                       </p>
//                       <p class="info-item">
//                         <b>Downloads</b> ${elements.downloads}
//                       </p>
//                     </div>
//                   </div>`
export {markupElements, btnLoad}; 

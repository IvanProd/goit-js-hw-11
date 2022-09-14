function markupElements (data){
  const elements = data.hits;
  
  const markup = elements.map(element => {
    // console.log(element.tags);
    return `<div class="photo-card">
    <a href="">
      <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
    </a>
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


export {markupElements}; 

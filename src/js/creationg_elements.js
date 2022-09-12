function markupElement (data){
    const markup = `<div class="photo-card">
    <img src="" alt="" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b> ${data}
      </p>
      <p class="info-item">
        <b>Views</b> ${data}
      </p>
      <p class="info-item">
        <b>Comments</b> ${data}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${data}
      </p>
    </div>
  </div>`
  return markup
};

export {markupElement}; 

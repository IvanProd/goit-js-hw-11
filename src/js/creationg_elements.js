function markupCreation (data){
    const markup = `<div class="gallery">
    <div class="photo-card">
  <img src="${data}" alt="${data}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>
  </div>
  <button type="button" class="load-more">Load more</button>`
}
fetch("data/videos.json")
  .then(res => res.json())
  .then(videos => {
    const grid = document.getElementById("videosGrid");
    videos.forEach(video => {
      grid.innerHTML += `
        <div class="card">
          <a href="video.html?id=${video.id}">
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
          </a>
        </div>
      `;
    });
  });

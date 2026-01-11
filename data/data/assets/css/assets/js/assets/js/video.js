const params = new URLSearchParams(window.location.search);
const videoId = params.get("id");

fetch("data/videos.json")
  .then(res => res.json())
  .then(videos => {
    const video = videos.find(v => v.id === videoId);
    document.getElementById("player").innerHTML = `
      <h2>${video.title}</h2>
      <video controls autoplay width="100%">
        <source src="${video.video}" type="video/mp4">
      </video>
    `;
  });

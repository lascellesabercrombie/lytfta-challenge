const mainVideoArea = document.querySelector("#mainVideoArea");
const galleryVideoArea = document.querySelector("#galleryVideoArea");

const videos = [
    {
        title: `What is Lyfta?`,
        image: "",
        duration: 141,
        source: `https://www.youtube.com/embed/9Z4zCtv3IEw`,
    },
    {
        title: `Short interview with Lyfta's Co-CEO Serdar Ferit`,
        image: "",
        duration: 204,
        source: `https://www.youtube.com/embed/1EDgKYfzzHI`,
    },
    {
        title: `Journey to a New Home - Trailer`,
        image: "",
        duration: 61,
        source: `https://www.youtube.com/embed/DNcnmCYeCkk`,
    },
    {
        title: `Lyfta for children with autism and SEN`,
        image: "",
        duration: 125,
        source: `https://www.youtube.com/embed/YoNvtEpzAoA`
    },
]

let counter = 0;

function createGalleryVideo(video) {
    console.log('x');

    const {title, image, duration} = video;

    const template = document.querySelector("#galleryVideoTemplate");

    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("div").id = `gallery-video-${counter}`;
    domFragment.querySelector("div").addEventListener('click', selectVideo);
    domFragment.querySelector("h3").textContent = title;
    if (image.length == 0) {
    domFragment.querySelector("img").src = `https://yt3.ggpht.com/ytc/AKedOLR97_0kXyqk68f4TkZWd0OoS6zLNdbOmWpzqJlH=s176-c-k-c0x00ffffff-no-rj-mo`;
    }
    else {
    domFragment.querySelector("img").src = image;
    }
    domFragment.querySelector("p").textContent = `${duration} seconds`;
    
    galleryVideoArea.appendChild(domFragment);
    counter ++;    
}

videos.forEach(createGalleryVideo);

function createMainVideo(video) {
    console.log('y');
    const {title, source} = video;
    const template = document.querySelector("#mainVideoTemplate");
    const domFragment = template.content.cloneNode(true);
    domFragment.querySelector("h2").textContent = title;
    domFragment.querySelector("iframe").src = source;
    mainVideoArea.append(domFragment);
}

function selectVideo(e) {
    const currentVideo = mainVideoArea.querySelectorAll("div");

    if (currentVideo.length > 0) {
        currentVideo.forEach(video => video.textContent = "");
    }
    const targetId = e.target.parentNode.id;
    const targetNumber = targetId.match(/\d/)[0];
    createMainVideo(videos[targetNumber]);
} 

createMainVideo(videos[0]);

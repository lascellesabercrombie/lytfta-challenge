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
    console.log('a');
    console.log(e.target.parentNode.id);
    let targetId = e.target.parentNode.id;
    let targetNumber = targetId.match(/\d/)[0];
    console.log(targetNumber);
    createMainVideo(videos[targetNumber]);
    // console.log(mainVideoArea.querySelector("div"))
    // console.log(mainVideoArea.childNodes);
    // const currentVideo = mainVideoArea.querySelector("div");
    // if (currentVideo.innerHTML !== "") {
    //     console.log('z');
    //     currentVideo.innerHTML = "";
    // }
    // console.log('here');
    
    // console.log('there');
    // galleryVideo.removeChild(video);
} 
console.log(document.querySelector("#galleryVideoArea > div:nth-child(2)"))
document.querySelector("#galleryVideoArea > div:nth-child(2)").addEventListener('click', selectVideo)
// createMainVideo(videos[0]);

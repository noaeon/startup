let hiddenTxt1 = document.getElementById("hiddenText1"),
    hiddenTxt2 = document.getElementById("hiddenText2"),
    gradientTxt1 = document.getElementById("textGradient1"),
    gradientTxt2 = document.getElementById("textGradient2"),
    chkbox1 = document.getElementById("showText1"),
    chkbox2 = document.getElementById("showText2");
let allDeveloperPhotos = document.querySelectorAll('.about-photo');
let devGallery = document.querySelector('.gallerySlider');

let galleryLeftArrow = document.querySelector('.galleryLeftArrow');
let galleryRightArrow = document.querySelector('.galleryRightArrow');
let leftArrow = document.querySelector('.galleryArrowImageLeft');
let rightArrow = document.querySelector('.galleryArrowImageRight');

let devPhotoResizer = () => {
    let developerPhoto = document.querySelector('.about-photo');
    let devPhotoWidth = developerPhoto.clientWidth;
    for (let i = 0; i < allDeveloperPhotos.length; i++) {
        allDeveloperPhotos[i].style.height = devPhotoWidth + 'px';
    }

    galleryLeftArrow.style.height = devPhotoWidth + 'px';
    galleryRightArrow.style.height = devPhotoWidth + 'px';
}

let slider = () => {
    rightArrow.addEventListener('click', () => {
        let allDevs = document.querySelectorAll('.about-developer');
        devGallery.appendChild(allDevs[0]);
        
    })

    leftArrow.addEventListener('click', () => {
        let allDevs = document.querySelectorAll('.about-developer');
        for (let i = 0; i < allDevs.length - 1; i++) {
            devGallery.appendChild(allDevs[i]);
        }
    })
}


let pictureChanger = () => {
    pictureResize();
    gradientHide();
    devPhotoResizer();
};

let pictureResize = () => {
    let pic1 = document.getElementById("blogPicture1");
    let pic2 = document.getElementById('blogPicture2');
    let h = (document.getElementById('blogDateTitle1').clientHeight) + (document.getElementById('blogText1').clientHeight);
    pic1.style.height = (h + 165 + 'px');
    pic2.style.height = (h + 165 + 'px');
    
    
};

let gradientHide = () => {
    hiddenTxt1.style.display = (chkbox1.checked) ? 'block' : 'none';
    hiddenTxt2.style.display = (chkbox2.checked) ? 'block' : 'none';
    gradientTxt1.style.color = (chkbox1.checked) ? 'dimgrey' : 'transparent';
    gradientTxt2.style.color = (chkbox2.checked) ? 'dimgrey' : 'transparent';
};

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

onload = pictureChanger;
onresize = pictureChanger;
slider();
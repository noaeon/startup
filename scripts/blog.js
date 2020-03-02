let blogTextPictureChanger = () => {
    pictureResize();
    gradientHide();
};

let pictureResize = () => {
    let pic1 = document.getElementById("blogPicture1");
    let pic2 = document.getElementById('blogPicture2');
    let h = (document.getElementById('blogDateTitle1').clientHeight) + (document.getElementById('blogText1').clientHeight);
    pic1.style.height = (h + 165 + 'px');
    pic2.style.height = (h + 165 + 'px');
};

let gradientHide = () => {
    let hiddenTxt1 = document.getElementById("hiddenText1"),
        hiddenTxt2 = document.getElementById("hiddenText2"),
        gradientTxt1 = document.getElementById("textGradient1"),
        gradientTxt2 = document.getElementById("textGradient2"),
        chkbox1 = document.getElementById("showText1");
        chkbox2 = document.getElementById("showText2");
    hiddenTxt1.style.display = (chkbox1.checked) ? 'block' : 'none';
    hiddenTxt2.style.display = (chkbox2.checked) ? 'block' : 'none';
    gradientTxt1.style.color = (chkbox1.checked) ? 'dimgrey' : 'transparent';
    gradientTxt2.style.color = (chkbox2.checked) ? 'dimgrey' : 'transparent';
};

onload = blogTextPictureChanger;
onresize = blogTextPictureChanger;


document.getElementsByClassName("fa")[3].addEventListener(
    "click",function(){
        document.getElementsByClassName("links")[0].classList.toggle
        ("showlinks")
    })


if (document.getElementById("slider--text")) {

    let slides = [
        "<h2>Amazing arts that will amaze your mind.<small>Tomb of Arts</small></h2>",
        "<h2>Greatest art work by an artist</h2>"

    ];

    let i = 0;

    const slider = () => {
        document.getElementById("slider--text").innerHTML = slides[i];
        document.getElementById("slider--text").classList.add('fade-in');

        (i < slides.length - 1) ? i++ : i = 0;
    };

    slider(); // Start slider immediately
    setInterval(slider, 4000); // Slide every 4 seconds
}
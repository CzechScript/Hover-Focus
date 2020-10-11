const h2 = document.querySelector(".card h2");
const img = document.querySelector(".card .imgBox img")



h2.addEventListener("mouseover",hover);
h2.addEventListener("mouseout", nothover);

function hover(){
    img.style.width="100%";
    img.style.transform="translate(0%,0%)"
    img.style.filter="blur(0px)"
}
function nothover(){
    img.style.width="150%";
    img.style.transform="translate(-30%,-30%)"
    img.style.filter="blur(10px)"
}

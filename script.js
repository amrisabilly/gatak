document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Pesan berhasil dikirim!");
});
window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});
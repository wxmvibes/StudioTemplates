function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function(){

    const links = document.querySelectorAll(".sidebar a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        let linkPage = link.getAttribute("href").split("/").pop();

        if(linkPage === currentPage){
            link.classList.add("active");
        }

        if(currentPage === "" && link.getAttribute("href").includes("index.html")){
            link.classList.add("active");
        }

    });

});

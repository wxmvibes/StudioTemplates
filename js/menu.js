function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("open");
}

/* AUTO ACTIVE SIDEBAR */

document.addEventListener("DOMContentLoaded", function(){

    const links = document.querySelectorAll(".sidebar a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        let linkPage = link.getAttribute("href").split("/").pop();

        if(linkPage === currentPage){
            link.classList.add("active");
        }

        // special case for homepage
        if(currentPage === "" && link.getAttribute("href").includes("index.html")){
            link.classList.add("active");
        }

    });

});

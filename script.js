const titles = document.querySelectorAll(".faq-title, .arrowDown")
titles.forEach((title) => {
    title.addEventListener("click", function() {

    if(title.parentNode.classList.contains("active")){
        title.parentNode.classList.toggle("active")
    }
    else{
        titles.forEach(title => title.parentNode.classList.remove("active"))
        title.parentNode.classList.add("active")
        }
    })
})
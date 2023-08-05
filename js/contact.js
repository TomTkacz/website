window.addEventListener("load",()=>{

    let employmentStatus = document.getElementById("status");

    if (employmentStatus.innerHTML.startsWith("not")) {
        employmentStatus.style.color = '#ff0000'
    }
    else {
        employmentStatus.style.color = '#00cc00'
    }

    console.log("wow")

})
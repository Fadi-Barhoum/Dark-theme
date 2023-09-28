const icon = document.getElementById("icon");

if (localStorage.getItem("theme")== null){
    localStorage.setItem("theme","light");
}

let local = localStorage.getItem("theme");

if (local == "light"){
    icon.src = "images/moon.png";
    document.body.classList.remove("dark-theme");
}else if (local == "dark"){
    icon.src = "images/sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
        localStorage.setItem("theme","dark");
    }else{
        icon.src ="images/moon.png";
        localStorage.setItem("theme","light");
    }
}
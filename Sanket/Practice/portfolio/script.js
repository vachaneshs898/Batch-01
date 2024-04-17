var val1 = document.getElementById("text-mysql")

val1.addEventListener('mouseover', displayshow())

function displayshow(){
    var val2 = document.getElementsByClassName(".mysql-text-hide p")
    val2.style.display = "block";
}


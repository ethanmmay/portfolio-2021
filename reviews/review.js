starArray = []

function highlightStar(starNum) {
    switch (starNum) {
        case 1:
            star = document.getElementById("star-1").classList.add("checked")
            break;
        case 2:
            document.getElementById("star-1").classList.add("checked")
            document.getElementById("star-2").classList.add("checked")
            break;
        case 3:
            document.getElementById("star-1").classList.add("checked")
            document.getElementById("star-2").classList.add("checked")
            document.getElementById("star-3").classList.add("checked")
            break;
        case 4:
            document.getElementById("star-1").classList.add("checked")
            document.getElementById("star-2").classList.add("checked")
            document.getElementById("star-3").classList.add("checked")
            document.getElementById("star-4").classList.add("checked")
            break;
        case 5:
            document.getElementById("star-1").classList.add("checked")
            document.getElementById("star-2").classList.add("checked")
            document.getElementById("star-3").classList.add("checked")
            document.getElementById("star-4").classList.add("checked")
            document.getElementById("star-5").classList.add("checked")
            break;
        default:
            console.log("error on highlightStar()")
            break;
    }
    console.log(starArray)
}
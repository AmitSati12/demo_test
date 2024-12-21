function nextpage() {
//     document.getElementById("page").style.display="none"
//     document.getElementById("page2").innerHTML="PAGE 1 "
document.getElementById("page1").style.display = "none"; // Hide Page 1
document.getElementById("page2").style.display = "block"; // Show Page 2
}

function previousPage() {
document.getElementById("page1").style.display = "block"; // Show Page 1
document.getElementById("page2").style.display = "none";
// document.getElementById("page1").innerHTML="PAGE 1 "
}


function demo()
{
    document.getElementById("demo").style.fontSize="4px"
}
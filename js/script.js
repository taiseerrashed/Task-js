
var allproducts = document.querySelectorAll(".lists li")

var content = document.querySelector("#content")

var btn = document.querySelector("#btn")

var total = document.querySelector("#total")

var totalPrice = 0

allproducts.forEach(function(item){
    item.onclick = function(){
        content.innerHTML += item.textContent +"& "
        content.style.display ="block"
        totalPrice += +(item.getAttribute("price"))
        
        if(content.innerHTML != " "){
            btn.style.display = "block";
        }
    }
})
btn.onclick = function(){
    total.style.display = "block"
    total.innerHTML = "Total Price =" + totalPrice +"LE"
}
const tulis = document.getElemenById("Latihan")
tulis.innerHTML  = "ini adalah tulisan pertama saya melalu DOM"

const h1= document.getElementsByTagName("h1")
const tulish1 = document.getElementByI("h1")
tulish1.innerHTML = ""

for(let i=0; i<10; i++){
    tulish1.innerHTML = h1[0].innerHTML
}
const table = document.createElement("table")
table.border = "1"


const thead = document.createElement("thead")
thead.innerHTML = "<tr><td>No</td><td>Nama</td></tr>"
table.append(thead)

const tbody = document.createElement("tbody")

const row = tbody.insertRow()
const cellNo = row.insertCell(0)
const cellNama = row.insertCell(1)
cellNo.innerHTML = "1" 
cellNama.innerHTML = "Serliya" 

table.append(tbody)
document.body.append(table)


const form = document.createElement("form")
form.innerHTML = "<input type='text' placeholder ='Masukan Nama'>"
form.innerHTML += "<input type='submit' value ='kirim'>"
document.body.append(form)


const form2 = document.createElement("form")
document.body.append(form2)

const input = document.createElement("input")
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'masukan nama anda')

const tombol = document.createElement("input")
tombol.setAttribute('type', 'submit')
tombol.setAttribute('value', 'simpan')

form2.append(input)
form2.append(tombol)
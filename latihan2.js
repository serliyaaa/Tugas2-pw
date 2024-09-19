const h1 = document.createElement("h1");
h1.innerHTML = "hallo, saya sedang belajar DOM nih....";
document.body.append(h1);

const img = document.createElement("img");
img.src = "pict/rajamp.jpg";
img.width = 200; 
img.height = 200;
document.body.append(img);

const form = document.createElement("form");
form.innerHTML = "<input type='text' placeholder='Masukan Nama'>";
form.innerHTML += "<input type='submit' value='kirim'>";
document.body.append(form);

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.innerHTML = "☀️";
}
else{
themeBtn.innerHTML = "🌙";
}

});

document.getElementById("contactForm").addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

e.target.reset();

});

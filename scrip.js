let arabic = document.getElementById("arabic");
let english=document.getElementById("english");
let title=document.getElementById("mytitle");
let welcome=document.getElementById("welcome");
let about=document.getElementById("about");
let role=document.getElementById("myrole");
let description=document.getElementById("description");
let contact=document.getElementById("contact");



arabic.onclick=()=>{
    getlang("arabic");
    localStorage.setItem("lan","arabic");
}

english.onclick=()=>{
    getlang("english");
    localStorage.setItem("lan","english");
}

onload=()=>{
    getlang(localStorage.getItem("lan"));
};


function getlang (getlan){
    if(getlan==="arabic"){

        title.innerHTML='متعدد اللغات ';
        welcome.innerHTML='مرحبا فى موقعنا';
        about.innerHTML='عني';
        role.innerHTML='مطور الويب والتطبيقات';
        description.innerHTML='نحن معك لجعل البرمجة أفضل';
        contact.innerHTML='اتصل بنا ';

    }else if(getlan==="english"){

        title.innerHTML='Multi Language';
        welcome.innerHTML='Welcome to our website';
        about.innerHTML='About Me';
        role.innerHTML='Web and App Delevoper';
        description.innerHTML='We are with you to make coding better';
        contact.innerHTML='Contact US ';

    }
}
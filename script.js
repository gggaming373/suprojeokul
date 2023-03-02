
// su sayacı yazısı ve su miktarı

var sumiktari = 0;
const susayaci = document.getElementById("susayaci");




// akan musluk düğmeleri
const dmevetbtn = document.getElementById("dmevetbtn");
const dmhayirbtn = document.getElementById("dmhayirbtn");
var dm = false;
function dmevet(){
    if (dm == false){
        sumiktari = sumiktari + 90;
    }
    dm = true;
    console.log(dm)
    susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
    dmevetbtn.style.backgroundColor = "#0E0E0E";
    dmhayirbtn.style.backgroundColor = "#f0f0f0";
    dmevetbtn.style.color = "#f0f0f0";
    dmhayirbtn.style.color = "#0E0E0E";
}
function dmhayir(){
    if (dm == true){
        sumiktari = sumiktari - 90;
    }
    dm = false;
    console.log(dm)
    dmhayirbtn.style.backgroundColor = "#0E0E0E";
    dmevetbtn.style.backgroundColor = "#f0f0f0";
    dmhayirbtn.style.color = "#f0f0f0";
    dmevetbtn.style.color = "#0E0E0E";
    susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
}




//çamaşır makinesi input
var cm = 0
const cminput = document.getElementById("cmakineinput");
cminput.addEventListener('change', updateValue);

function updateValue(e) {
    if (e.target.value == ""){
        alert("bos yazı bıraktığın için değeri sıfır olarak kabul edildi")
        sumiktari = sumiktari - cm;
        sumiktari = sumiktari + 0;
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        cm = 0;
    }
    else{
        sumiktari = sumiktari - cm;
        sumiktari = sumiktari + parseInt(e.target.value)*40;
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        cm = parseInt(e.target.value)*40;
    }
}



//banyo ve duş kısmıvar banyomu;
var banyovedustotalsu = 0;
var banyomu = false;
const banyobuton = document.getElementById('baynobtn');
const dusbuton = document.getElementById('dusbtn');
var bdinput = document.getElementById("bdinput");
bdinput.addEventListener('change', updateValuebd);
function dus(){
    dusbuton.style.backgroundColor = '#0E0E0E';
    dusbuton.style.color = '#f0f0f0';
    banyobuton.style.color = '#0E0E0E';
    banyobuton.style.backgroundColor = '#f0f0f0';
    banyomu = false;
    console.log(banyomu)
}

function banyo(){
    banyobuton.style.backgroundColor = '#0E0E0E';
    banyobuton.style.color = '#f0f0f0';
    dusbuton.style.color = '#0E0E0E';
    dusbuton.style.backgroundColor = '#f0f0f0';
    banyomu = true;
    console.log(banyomu)
}



function updateValuebd(e) {
    if (e.target.value == ""){
        alert("bos yazı bıraktığın için değeri sıfır olarak kabul edildi")
        sumiktari = sumiktari - banyovedustotalsu;
        sumiktari = sumiktari + 0;
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        banyovedustotalsu = 0;
    }
    else{
    if (banyomu == true){
        sumiktari = sumiktari - banyovedustotalsu;
        sumiktari = sumiktari + parseInt(e.target.value)*130;
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        banyovedustotalsu = parseInt(e.target.value)*130;
        
    }
    else if (banyomu == false){
        sumiktari = sumiktari - banyovedustotalsu;
        sumiktari = sumiktari + parseInt(e.target.value)*90;
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        banyovedustotalsu = parseInt(e.target.value)*90;
        }   
    }
}

//Bulasik Makinesi ve on yikama
var bulasiksayi = 0;
var onyikamavarmi = false;
bulasikmakine = document.getElementById('bmakine')
onyikamayokbtn = document.getElementById("onyikamayokbtn")
onyikamavarbtn = document.getElementById("onyikamavarbtn")
bulasikmakine.addEventListener('change', updateValuebm);
function onyikamayokdef(){
    onyikamayokbtn.style.backgroundColor = '#0E0E0E';
    onyikamayokbtn.style.color = '#f0f0f0';
    onyikamavarbtn.style.color = '#0E0E0E';
    onyikamavarbtn.style.backgroundColor = '#f0f0f0';
    onyikamavarmi = false;
}
function onyikamavardef(){
    onyikamavarbtn.style.backgroundColor = '#0E0E0E';
    onyikamavarbtn.style.color = '#f0f0f0';
    onyikamayokbtn.style.color = '#0E0E0E';
    onyikamayokbtn.style.backgroundColor = '#f0f0f0';
    onyikamavarmi = true;
}
function updateValuebm(e){
    if (e.target.value == ""){
        alert("bos yazı bıraktığın için değeri sıfır olarak kabul edildi")
        sumiktari = sumiktari - bulasiksayi;
        sumiktari = sumiktari + 0;
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        bulasiksayi = 0;
    }
    else{
    if (onyikamavarmi == false){
        sumiktari = sumiktari - bulasiksayi;
        sumiktari = sumiktari + parseInt(e.target.value)*20
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        bulasiksayi = parseInt(e.target.value)*20;
    }
    else if (onyikamavarmi == true){
        sumiktari = sumiktari - bulasiksayi;
        sumiktari = sumiktari + parseInt(e.target.value)*22
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        bulasiksayi = parseInt(e.target.value)*22;
    }}

}

// Dis Fircalama
var dissayi = 0;
var suacikmi = false;
disevetbtn = document.getElementById('disevetbtn')
dishayirbtn = document.getElementById('dishayirbtn')
disinput = document.getElementById('disinput');
disinput.addEventListener('change', updateValuedis);
function updateValuedis(e){
    if (e.target.value==""){
        alert("bos yazı bıraktığın için değeri sıfır olarak kabul edildi")
        sumiktari = sumiktari - dissayi;
        sumiktari = sumiktari + 0
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        dissayi = 0;
    }
    else {
    if (suacikmi == false){
        sumiktari = sumiktari - dissayi;
        sumiktari = sumiktari + parseInt(e.target.value)*10
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        dissayi = parseInt(e.target.value)*10;
    }
    else if (suacikmi == true){
        sumiktari = sumiktari - dissayi;
        sumiktari = sumiktari + parseInt(e.target.value)*15
        susayaci.innerHTML = "Şu Kadar Su Kullanıyorsun : " + sumiktari;
        dissayi = parseInt(e.target.value)*15;
    }}
    
}

function disevetdef(){
    disevetbtn.style.backgroundColor = '#0E0E0E';
    disevetbtn.style.color = '#f0f0f0';
    dishayirbtn.style.color = '#0E0E0E';
    dishayirbtn.style.backgroundColor = '#f0f0f0';
    suacikmi = true;
    console.log(suacikmi)
}
function dishayirdef(){
    dishayirbtn.style.backgroundColor = '#0E0E0E';
    dishayirbtn.style.color = '#f0f0f0';
    disevetbtn.style.color = '#0E0E0E';
    disevetbtn.style.backgroundColor = '#f0f0f0';
    suacikmi = false;
    console.log(suacikmi)
}

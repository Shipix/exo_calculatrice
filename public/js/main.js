let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let button1 = document.querySelector(".btn1");
let reponse1  = document.querySelector("#response1")

input1.addEventListener("blur",function() {
    console.log(Number(input1.value));
})

input2.addEventListener("blur",function() {
    console.log(Number(input2.value));
})

button1.addEventListener("click",function(){
    console.log(Number(input1.value) + Number(input2.value));
    reponse1.innerHTML = Number(input1.value) + Number(input2.value);
})
//..............................................................................

let input3 = document.querySelector(".input3");//première valeur
let input4 = document.querySelector(".input4");//deuxième valeur
let button2 = document.querySelector(".btn2");//le choix de l'operateur
let buttonegal = document.querySelector(".btn-egal");//le bouton égale
let reponse2  = document.querySelector("#response2")//le span de la valeur


input3.addEventListener("blur",function() {
    console.log(Number(input3.value));
})

input4.addEventListener("blur",function() {
    console.log(Number(input4.value));
})

button2.addEventListener("blur",function () {
    console.log(button2.value);
})

buttonegal.addEventListener("click",function () {
    switch (button2.value) {
        case "+":

            reponse2.innerHTML = Number(input3.value) + Number(input4.value)
            break;

        case "-":

            reponse2.innerHTML = Number(input3.value) - Number(input4.value)
            break;

        case "/":

            reponse2.innerHTML = Number(input3.value) / Number(input4.value)
            break;

         case "*":

            reponse2.innerHTML = Number(input3.value) * Number(input4.value)
            break;


    }
})
//..............................................................................
let input5 = document.querySelector(".input5");//première valeur
let input6 = document.querySelector(".input6");//deuxième valeur
let buttonEgo = document.querySelector(".btn3");//le bouton égale
let reponse3  = document.querySelector("#response3")//le span de la valeur

let buttonAdd = document.querySelector(".btnA");//le bouton addition
let buttonSubstr = document.querySelector(".btnB");//le bouton soustraire
let buttonX = document.querySelector(".btnC");//le bouton foi
let buttonDiv = document.querySelector(".btnD");//le bouton diviser

let op //choix de l'operateur 

input5.addEventListener("blur",function() {
    console.log(Number(input5.value));
})

input6.addEventListener("blur",function() {
    console.log(Number(input6.value));
})


buttonAdd.addEventListener("click",function() {
    op = "+"
    console.log(buttonAdd.value);
})
buttonSubstr.addEventListener("click",function() {
    op = "-"
    console.log(buttonAdd.value);
})
buttonX.addEventListener("click",function() {
    op = "*"
    console.log(buttonAdd.value);
})
buttonDiv.addEventListener("click",function() {
    op = "/"
    console.log(buttonAdd.value);
})

buttonEgo.addEventListener("click",function () {
    switch (op) {
        case "+":

            reponse3.innerHTML = Number(input5.value) + Number(input6.value)
            break;

        case "-":

            reponse3.innerHTML = Number(input5.value) - Number(input6.value)
            break;

        case "/":

            reponse3.innerHTML = Number(input5.value) / Number(input6.value)
            break;

         case "*":

            reponse3.innerHTML = Number(input5.value) * Number(input6.value)
            break;

    }
})
//..............................................................................

let nb1 = document.querySelector('.btnNB1');
let nb2 = document.querySelector('.btnNB2');
let nb3 = document.querySelector('.btnNB3');
let nb4 = document.querySelector('.btnNB4');
let nb5 = document.querySelector('.btnNB5');
let nb6 = document.querySelector('.btnNB6');
let nb7 = document.querySelector('.btnNB7');
let nb8 = document.querySelector('.btnNB8');
let nb9 = document.querySelector('.btnNB9');
let nb0 = document.querySelector('.btnNB0');

let input7 = document.querySelector(".input7");//première valeur
let input8 = document.querySelector(".input8");//deuxième valeur


let buttonAdi = document.querySelector(".btnAdi");//le bouton addition
let buttonSous = document.querySelector(".btnSous");//le bouton soustraire
let buttonMulti = document.querySelector(".btnMulti");//le bouton multiplier
let buttonDivi = document.querySelector(".btnDivi");//le bouton diviser

let repond = document.querySelector("#response4");//la reponse

let reponseF = document.querySelector("#egox");//btn egale

buttonAdi.addEventListener("click",function() {
    ope = "+"
    console.log(buttonAdi.value);
})

buttonSous.addEventListener("click",function() {
    ope = "-"
    console.log(buttonSous.value);
})

buttonMulti.addEventListener("click",function() {
    ope = "*"
    console.log(buttonMulti.value);
})
buttonDivi.addEventListener("click",function() {
    ope = "/"
    console.log(buttonDivi.value);
})

//...............................................................
let inter1;
let inter2; 

input7.addEventListener("click",function () {
    console.log(input7.value);
    inter1 = true
    inter2 = false
})

input8.addEventListener("click",function () {
    console.log(input8.value);
    inter1 = false
    inter2 = true
})
//...............................................................
nb1.addEventListener("click",function() {
    nb1.value = "1"
    if(inter1 == true){

        input7.value = input7.value + "1"
    }else{

        input8.value = input8.value + "1"
    }
    console.log(nb1.value);
})

nb2.addEventListener("click",function() {
    nb2.value = "2"
    if(inter1 == true){

        input7.value = input7.value + "2"
    }else{

        input8.value = input8.value + "2"
    }
    console.log(nb2.value);
})

nb3.addEventListener("click",function() {
    nb3.value = "3"
    if(inter1 == true){

        input7.value = input7.value + "3"
    }else{

        input8.value = input8.value + "3"
    }
    console.log(nb3.value);
})

nb4.addEventListener("click",function() {
    nb4.value = "4"
    if(inter1 == true){

        input7.value = input7.value + "4"
    }else{

        input8.value = input8.value + "4"
    }
    console.log(nb4.value);
})

nb5.addEventListener("click",function() {
    nb5.value = "5"
    if(inter1 == true){

        input7.value = input7.value + "5"
    }else{

        input8.value = input8.value + "5"
    }
    console.log(nb5.value);
})

nb6.addEventListener("click",function() {
    nb6.value = "6"
    if(inter1 == true){

        input7.value = input7.value + "6"
    }else{

        input8.value = input8.value + "6"
    }
    console.log(nb6.value);
})

nb7.addEventListener("click",function() {
    nb7.value = "7"
    if(inter1 == true){

        input7.value = input7.value + "7"
    }else{

        input8.value = input8.value + "7"
    }
    console.log(nb7.value);
})

nb8.addEventListener("click",function() {
    nb8.value = "8"
    if(inter1 == true){

        input7.value = input7.value + "8"
    }else{

        input8.value = input8.value + "8"
    }
    console.log(nb8.value);
})

nb9.addEventListener("click",function() {
    nb9.value = "9"
    if(inter1 == true){

        input7.value = input7.value + "9"
    }else{

        input8.value = input8.value + "9"
    }
    console.log(nb9.value);
})

nb0.addEventListener("click",function() {
    nb0.value = "0"
    if(inter1 == true){

        input7.value = input7.value + "0"
    }else{

        input8.value = input8.value + "0"
    }
    console.log(nb0.value);
})

let ope //choix de l'operateur 

reponseF.addEventListener("click",function () {
    switch (ope) {
        case "+":

            repond.innerHTML = Number(input7.value) + Number(input8.value)
            break;

        case "-":

            repond.innerHTML = Number(input7.value) - Number(input8.value)
            break;

        case "/":

            repond.innerHTML = Number(input7value) / Number(input8.value)
            break;

         case "*":

            repond.innerHTML = Number(input7.value) * Number(input8.value)
            break;

    }
})

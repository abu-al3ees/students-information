'use strict'
let form=document.getElementById('form');
let container=document.getElementById('container');
let table1=document.getElementById('table');
let info=[];
let counter=0;
let sumTution=0;
function randomAge(){
     
        return Math.floor(Math.random() * (24 - 18) ) + 18;
      
}
function Info(emali,number,tution){
    this.emali=emali;
    this.number=number
    this.tution=tution;
    info.push(this);
    this.age=randomAge();
    //this.id=id;

}
let str;
form.addEventListener('submit',addInfo);
function addInfo(event){
    event.preventDefault();
    str=event.target.email.value;
    counter++;
    let email=event.target.email.value;
    let phone=event.target.number.value;
    let tution=event.target.select.value;
    new Info(email,phone,tution);
render();
saveData();
}

//container.appendChild(table1);
let tr1=document.createElement('tr1');
table1.appendChild(tr1);
let th1=document.createElement('th');
tr1.appendChild(th1);
let th2=document.createElement('th');
tr1.appendChild(th2);
let th3=document.createElement('th');
tr1.appendChild(th3);
let th4=document.createElement('th');
tr1.appendChild(th4);
let th5=document.createElement('th');
tr1.appendChild(th5);
let th6=document.createElement('th');
tr1.appendChild(th6);
th1.textContent='ID';
th2.textContent='Name';
th3.textContent='Email';
th4.textContent='Mobile';
th5.textContent='Age';
th6.textContent='tution';
let span=document.createElement('span');
container.appendChild(span);
span.textContent=`Total:${sumTution}`;


function render(){
    let tr1;
    for (let i = 0 ;i < info.length ;i++){ 
        tr1=document.createElement('tr1');
        table1.appendChild(tr1);
        let td1=document.createElement('td');
        tr1.appendChild(td1);
        td1.textContent=counter;
        let td2=document.createElement('td');
        tr1.appendChild(td2);
        td3.textContent=splitName(str);
        let td3=document.createElement('td');
        tr1.appendChild(td3);
        td1.textContent=info.email;
        let td4=document.createElement('td');
        tr1.appendChild(td4);
        td4.textContent=info.number;
        let td5=document.createElement('td');
        tr1.appendChild(td5);
        td5.textContent=randomAge();
        let td6=document.createElement('td');
        tr1.appendChild(td6);
        td6.textContent=info.tution;
        
sumTution+=parseInt(td6.textContent);
        }
      
    }

function saveData(){
    let data=JSON.stringify(info);
    localStorage.setItem('myData', data);
}
function getData(){
    let data1 = localStorage.getItem('myData');
let list=JSON.parse(data1);
    if(list){
        info=list;
    }
}
function splitName(str){
   
let nameMatch = str.match(/^([^@]*)@/);
let name = nameMatch ? nameMatch[1] : null;
return name;

}
getData();
















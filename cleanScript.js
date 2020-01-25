//Dom elements
const out = document.getElementById("tr1");

let items = ["walk-in fridge/freezers","behind cookline","bin yard","inside cookline fridges/freezers",
            "hallway","greasetrap","pullout potwash"];

let people = [];

class Person {
    constructor(name, task, amount) {
        this.name = name;
        this.task = task;
        this.amount = amount;
        people.push(this);
    }
}

const person1 = new Person("Macauley",items[0],1);
const person2 = new Person("Hollie",items[1],1);
const person3 = new Person("Gail",items[2],2);
const person4 = new Person("Ray",items[3],2);
const person5 = new Person("Heather",items[4],1);
const person6 = new Person("Adam",items[5],2);
const person7 = new Person("Kyle",items[6],1);
const person8 = new Person("Ben",items[6],1);

for(i=0;i<people.length;i++){
    if (i%2 == 0){
        //class == hot
        if(people[i].amount == 1){
            out.innerHTML +="<tr class='hot'>"+"<td>"+people[i].name+"</td>"+"<td>"+people[i].task+"</td>"+"<td Colspan='2'>"+"</td>"+"</tr>";
        } else {
            out.innerHTML +="<tr class='hot'>"+"<td>"+people[i].name+"</td>"+"<td>"+people[i].task+"</td>"+"<td>"+"</td>"+"<td>"+"</td>"+"</tr>";
        }
    } else 
        if(people[i].amount == 1){
            out.innerHTML +="<tr class='cold'>"+"<td>"+people[i].name+"</td>"+"<td>"+people[i].task+"</td>"+"<td Colspan='2'>"+"</td>"+"</tr>";
        } else {
            out.innerHTML +="<tr class='cold'>"+"<td>"+people[i].name+"</td>"+"<td>"+people[i].task+"</td>"+"<td>"+"</td>"+"<td>"+"</td>"+"</tr>";
        }
       //class == cold
}


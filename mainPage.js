
class Person{
    constructor(name, age, nationality){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
}

var bunthong = new Person("Bunthong Kong", 15, "Cambodia");
var chhayly = new Person("Chhayly Sreng", 16, "German");

function saveData(){
    var text = document.getElementById("theName").value;
    if(text!=""){
        window.alert("Hello, and welcome back " + text);
    }else if(text==""){
        window.alert("Please enter this field!");
    }
}

function clearTxt(){
    document.getElementById("theName").value = "";
}




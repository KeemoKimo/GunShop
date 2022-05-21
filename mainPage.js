class Person{
    constructor(name, age, nationality){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
}

var bunthong = new Person("Bunthong Kong", 15, "Cambodia");
var chhayly = new Person("Chhayly Sreng", 16, "German");

function popUpFunc(){
    window.alert(bunthong.name + " / " + chhayly.nationality);
}
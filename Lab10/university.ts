var Uni = function (name:string, dept:string){
    this.name=name;
    this.dept=dept;
    this.graduation= function(year){
        console.log('Graduating ${this.dept} ${year} students');
    }
}
var mum = new Uni("MUM","Computer Science");
mum.name= "Maharishi Unversity"
mum.graduation(2019);
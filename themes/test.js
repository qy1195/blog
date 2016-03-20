function Person(argument) {
  // body...
  this.handcount=2;
  this.say=function(){
    console.log(hhhhh);
  }
};
function Student(argument) {
  // body...
  this.no=111;
  this.doHomework=function (argument) {
    // body...
    console.log(dooooo);
  }
}
Person.say=function (argument) {
  // body...
  console.log(11111);
}
Student.prototype = Person;
var s1= new Student();
console.log(s1.say);

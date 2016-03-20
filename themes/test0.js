function Thing() {
  this.xx = function () {
    console.log('xxx');
  }
}

function Person() {
  this.say = function () {
    console.log('hello');
  }
}

function Student() {
  this.do = function () {
    console.log('do');
  }
  this.no = 1;
  this.head = {

  }
}
Person.prototype = new Thing()
Student.prototype = new Person();

var s1 = new Student();
s1.do();
s1.say();
s1.xx();

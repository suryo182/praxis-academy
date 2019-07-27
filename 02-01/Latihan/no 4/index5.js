function Animal(name) {


  // 'this' is an object we are about to create
  this.name = name;

  // add a method an object
  this.getName = function() {

    // here 'this' is also the object as function belongs to the object
    return 'Animal name is => ' + this.name;
  }
}

//log prototype
console.log(Animal.prototype);
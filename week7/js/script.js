//    A vector type
'use strict'

class Vec {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  }

  plus(anotherValue) {
    return new Vec(this.firstValue + anotherValue.firstValue, this.secondValue + anotherValue.secondValue);
  }

  minus(anotherValue) {
    return new Vec(this.firstValue - anotherValue.firstValue, this.secondValue - anotherValue.secondValue);
  }

  multiply(anotherValue) {
    return new Vec(this.firstValue * anotherValue.firstValue, this.secondValue * anotherValue.secondValue);
  }

  divide(anotherValue) {
    return new Vec(this.firstValue / anotherValue.firstValue, this.secondValue / anotherValue.secondValue);
  }

  get length() {
    return Math.sqrt(this.firstValue * this.firstValue + this.secondValue * this.secondValue);
  }
}
console.log(new Vec(2,4).plus(new Vec(4,5)));
console.log(new Vec(5,5).minus(new Vec(5,6)));
console.log(new Vec(2,2).multiply(new Vec(3,4)));
console.log(new Vec(10,10).divide(new Vec(3,3)));
console.log(new Vec(2,2).length);

//     Groups

class Group {
  constructor() {
    let participant = [];
    this.participant = participant; 
  }

  add(value) {
    if (this.value !== value) {
      this.participant.push(value);
    }
  }

  delete(value) {
    this.participant = this.participant.filter(function(deleteValue) {
    	return deleteValue !== value;
    });
  }

  has(value) {
    return this.participant.includes(value);
  }

  static from(assemblage) {
    let group = new Group;
    for (let value of assemblage) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([15, 35, 77]);
console.log(group.has(22));
console.log(group.has(77));
group.add(14);
console.log(group.has(14));
console.log(group.has(10));

//     Iterable groups

class iterableGroup {
  constructor() {
    let participant = [];
    this.participant = participant; 
  }

  add(value) {
    if (this.value !== value) {
      this.participant.push(value);
    }
  }

  delete(value) {
    this.participant = this.participant.filter(function(deleteValue) {
    	return deleteValue !== value;
    });
  }

  has(value) {
    return this.participant.includes(value);
  }

  static from(collection) {
    let group = new iterableGroup;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.participant.length) {
      return {done: true};
    } else {
      let result = {value: this.group.participant[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of iterableGroup.from(['big', 'bigger', 'biggest'])) {
  console.log(value);
}

//     Borrowing a method

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
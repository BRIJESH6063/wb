
/*
---->>> console.time()
*/

/*
console.time('response in');
alert('Click to continue');
console.timeEnd('response in');
console.time('response in');
alert('One more time');
console.timeEnd('response in'); */


/* console.table */
const personArr = [{
  "personId": 123,
  "name": "Jhon",
  "city": "Melbourne",
  "phoneNo": "1234567890"
  },
  {
  "personId": 124,
  "name": "Amelia",
  "city": "Sydney",
  "phoneNo": "1234567890"
  },
  {
  "personId": 125,
  "name": "Emily",
  "city": "Perth",
  "phoneNo": "1234567890"
  },
  {
  "personId": 126,
  "name": "Abraham",
  "city": "Perth",
  "phoneNo": "1234567890"
}];
// console.table(personArr, ['name', 'personId', 'city', 'phoneNo']);

/*
console.count(obj)

const o1 = 1, o2 = '2', o3 = "";
console.count(o1); // 1
console.count(o2); // 1
console.count(o3); // 1

console.count(1);  // 2
console.count('2');// 2
console.count(''); // 2

// --------------------

console.count(undefined);       // undefined: 1
console.count(document.Batman); // undefined: 2
var obj; console.count(obj);    // undefined: 3

console.count(Number(undefined)); // NaN : 1
console.count(NaN); // NaN : 2
console.count(NaN+3); // NaN : 3

console.count(1/0); // Infinity : 1
console.count(String(1/0)); // Infinity : 2

console.count(window); // window : 1

console.count(document); // document : 1

console.count(console); // [console] : 1

console.count(console.__proto__); //[object console] : 1
console.count(console.constructor.prototype); //[object console] : 2
console.count(console.__proto__.constructor.prototype); //[object console] : 3
console.count(Object.getPrototypeOf(console)); //[object console] : 4

console.count(null); // null : 1

*/


// const now = new Date() ; // 'Tue Mar 24 2026 12:31:37 GMT+0530 (India Standard Time)'
// console.log(now.toISOString()) // '2026-03-24T07:02:06.341Z'


/*
Going custom ---
If Date.prototype.toLocaleDateString() isn't flexible enough to fulfill whatever need you may have, you might
want to consider creating a custom Date object that looks like this:

var DateObject = (function() {
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  var date = function(str) {
    this.set(str);
  };

  date.prototype = {
    set : function(str) {
      var dateDef = str ? new Date(str) : new Date();
      this.day = dateDef.getDate();
      this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
      this.month = dateDef.getMonth() + 1;
      this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
      this.monthName = monthNames[this.month - 1];
      this.year = dateDef.getFullYear();
    },
    get : function(properties, separator) {
      var separator = separator ? separator : '-'
      ret = [];
      for(var i in properties) {
        ret.push(this[properties[i]]);
      }
      return ret.join(separator);
    }
  };
  return date;
})();

const d = new DateObject() ; *
*/

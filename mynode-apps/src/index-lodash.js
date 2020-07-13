//use third party dependencies

var _ =require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];

var result =_.filter(users, function(o) { return !o.active; });

console.log(result);

import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/groupby
// Example 1: Group by property

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 },
];
//emit each person
const $src = from(people);
//group by age
const example = $src.pipe(
  groupBy((person) => person.age),
  // return each item in group as array
  mergeMap((group) => group.pipe(toArray()))
);
const subscribe = example.subscribe((val) => console.log(val));

/*
  output:
  [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/

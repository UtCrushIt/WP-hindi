let obj = {id:101, name: "Alex", salary: 1000};
console.log(obj);

let emp = new Object();
emp.id = 102;
emp.name = "Sam"
emp.salary = 1000;
console.log(emp)


function Emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s;

}

const e = new Emp(103,"Amy", 1200);
console.log(e);


let values = Object.values(emp);
console.log(values);

let keys = Object.keys(obj);
console.log(keys);

let entries = Object.entries(e);
console.log(entries);
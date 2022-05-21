const Automobile = function (m,p,c,t){
    this.model = m;
    this.price = p;
    this.color = c;
    this.type = t;
}

const X = new Automobile("X",1500000,"red","sedan");

const new_car = Object.create(X);
new_car.model = "nano";
new_car.price = 150000;
new_car.color = "grey";
new_car.type = "budget-car";

console.log(new_car)
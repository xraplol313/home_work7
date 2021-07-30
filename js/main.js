let Calc = function () {
    this.get = function () {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, / ');

        this.operation();
    };

    this.operation = function () {
        switch (this.oper) {
            case '+':
                this.result = this.a + this.b;
                break;
            case '-':
                this.result = this.a - this.b;
                break;
            case '*':
                this.result = this.a * this.b;
                break;
            case '/':
                this.result = this.a / this.b;
                break;
            default: this.result = 0;
        }

        this.show();
    };

    this.show = function () {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    }
}

let calc = new Calc();
calc.get();



// Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
//     электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//     счетчик горения лампочки.

const Bulb = function () {
    this.setParametrs = function () {
        this.power = +prompt('Введите мощность квт');
        this.cost = +prompt('Введите  стоимость електричества за квт');
        this.time = +prompt('Время горения часов');
    }

    this.turnOn = function () {
        console.log('вкл')
    }

    this.turnOff = function () {
        console.log('выкл')
    }

    this.showInfo = function () {
        let calculation = this.power * this.cost * this.time;
        console.log('За ' + this.time + ' часа(ов)' + ' заплатить ' +  calculation + ' рублей');
    }
}

let bulb1 = new Bulb();
bulb1.setParametrs()
bulb1.showInfo()







// Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.

//1кв греет 1л воды за 3 минуты (воду * на минут / на ваты)

let Kettle = function (power,volume) {

    this.power = power || 1;
    this.volume = volume || 1;
    this.timeFor1liter = 3; //минут


    this.setParametrs = function() {
        this.amount = +prompt('Введите объем воды в литрах');

        this.calculation();
    }

    this.turnOn = function () {
        console.log('Вкл');
    }

    this.turnOff = function () {
        console.log('Выкл');
    }

    this.calculation = function () {
        let summ = this.amount * this.timeFor1liter / this.power;
        console.log('Чайник мощностью ' + this.power + ' квт' + ' закипятит ' + this.amount + ' воды за ' + summ + ' минут');
    }

}

let kettle = new Kettle(1, 3);
kettle.setParametrs()
let kettle1 = new Kettle(2, 2);
kettle1.setParametrs()





// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.


let Car = function() {
    this.getInfo = function() {
        this.brand = prompt('Марка авто');
        this.carNumber = prompt('Номер авто');
    }

    this.startTheCar = function () {
        
    }

    this.stopTheCar = function () {
        
    }

    this.gear = 'Нетральная'

    this.setNetral = function () {
        this.gear = 'Нетральная';
    }

    this.setForvard = function () {
        this.gear = 'Вперёд';
    }

    this.setBack = function () {
        this.gear = 'Назад';
    }

    this.getSpeed = function () {
        this.speed = +prompt('Введите скорость');
    } 
}

let car = new Car();
car.setForvard()
car.getSpeed()
console.log(car.gear, car.speed + 'км')






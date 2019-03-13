// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************

// 1. Создать функцию которая принимает число и считает факториал этого числа.
function factorial(value: number): number {
    let  result: number = 1;
    for (let i: number = value; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(3));

// 2. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiple(...rest: number[]): number | string {
    if (!rest.length) return 0;
    return rest.reduce((prev: number, cur: number): number => prev * cur);

}
console.log(multiple(1, 2, 4));

// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str: string): string {
    return str.split('').reverse().join('')
}
console.log(reverseString('test'));
// 4. Создать интерфейс Админа.
interface Admin {
    name: string,
    email: string,
    password: string,
    type?: string
}

// Задачи по ООП

// 1. Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).
abstract class Car {
    protected _mileage: number;
    protected _fuel: number;
    constructor(mileage: number, fuel: number){
        this._mileage = mileage;
        this._fuel = fuel;
    }
    public abstract drive(distance: number): void;
    public abstract refuel(amount: number): void;
}

// 2. Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять свойство mileage и уменьшать значение свойства fuel если бензин закончился то нужно вернуть сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel. Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.
// 3. Создать публичный get для получения свойств fuel и mileage.

class CarChild extends Car {
    constructor(_mileage: number, _fuel: number){
        super(_mileage, _fuel);
    }
    public drive(distance: number): void {
        if (!isFinite(distance) || distance <= 0){
            console.error('Нужно передавать положительное, конечное, не NaN число');
            return;
        }
        if (this._fuel > 0){
            this._mileage += distance;
            this._fuel--;
        } else {
            console.log('Нужно заправится')
        }
    }
    public refuel(amount: number): void {
        if (!isFinite(amount) || amount <= 0){
            console.error('Нужно передавать положительное, конечное, не NaN число');
            return;
        }
        this._fuel += amount;
    }
    public get getSettings(): string {
        return `Пробег: ${this._mileage}, Топливо: ${this._fuel}`;
    }
}

const car = new CarChild(0, 50);






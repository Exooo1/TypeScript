export const Class = () => {
    return <div>
        <h1>Class</h1>
    </div>
}


class Users {
    private readonly name: string
    private readonly surname: string
    public city: string
    readonly country: string

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
        this.city = 'Minsk'
        this.country = 'Belarus'
    }

    getFullObject() {
        return this.name + this.surname + this.country + this.city
    }

    testing = () => {
        //Так не надо делать, при каждом user будем создаваться эта функция
        return this.name
    }

    get getFullName() {
        console.log(this.getFullObject())
        return this.name + "-" + this.surname
    }

    set changeCity(city: string) {
        this.city = city
    }
}

class Test extends Users {
    test: string

    constructor(name: string, surname: string) {
        super(name, surname);
        this.test = 'test'
    }
}

console.log(new Test('b', 'c'))

const vlas = new Users('Vlas', 'Maskalenchik')
console.log(vlas)
vlas.changeCity = 'Bobruisk'
console.log(vlas)
console.log(vlas.getFullName)
vlas.city = 'derevnya'
console.log(vlas)

console.log(new Users('Diana', 'Kostyan').getFullName)


class Car {
    private readonly name: string

    constructor(name: string) {
        this.name = name
    }

    protected getName() {
        return this.name
    }
}

//Protected работает почти как и private, только он ещё доступен и наследованных классах!

const BMV = new Car('BMV')
console.log(BMV)

class Bus extends Car {

    constructor(name: string) {
        super(name);
    }

    getNameYear() {
        return `${this.getName()} year:1998`
    }
}

console.log(new Bus('Audi').getNameYear())
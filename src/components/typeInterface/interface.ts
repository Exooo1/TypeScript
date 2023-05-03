interface ISchool {
    number: string
}

interface ISkills {
    js: string
    ts: string
}


interface IUser extends ISkills, ISchool {
    name: string
    city: string
}

interface ISomething<T> {
    one: string
    two: T
}

interface IAll<T> extends ISomething<T>{
    city:string
    country:string
}


const r:IAll<number> = {
    city:'city',
    country:'city',
    one:'one',
    two:2
}
console.log(r.two)
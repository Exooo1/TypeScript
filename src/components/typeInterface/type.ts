type TSkills = {
    js: string
    ts: string
}
type TSchool = {
    number: string
}
type TUsers = {
    name: string
    city: string
    skills: TSkills
} & TSchool // Вы можете добавить | это означает что вы можете выбрать одно свойство из двух типов.

type TString = string // and etc...

type TCommon = TUsers & TSchool


type TSomething<T> = {
    one: string
    two: T
}

type AllTypes <T> = {
    city: string
    country: string
}&TSomething<T>

const t:AllTypes<number> = {
    city:'',
    country:'',
    two:2,
    one:''
}
type B = {
    b:number
}
type A  = {
    a:string
}|B

// const muc:A = {b:24,a:'ss'} будет ошибка, только одно свойство из двух типов

export {}
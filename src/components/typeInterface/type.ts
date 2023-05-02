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

export {}
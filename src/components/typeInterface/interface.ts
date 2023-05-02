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
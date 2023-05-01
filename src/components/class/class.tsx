export const Class = () => {
    return <div>
        <h1>Class</h1>
    </div>
}


class Users {
    private name: string
    private surname: string

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get getFullName() {
        return this.name + "-" + this.surname
    }
}

const vlas = new Users('Vlas', 'Maskalenchik')

console.log(vlas.getFullName)
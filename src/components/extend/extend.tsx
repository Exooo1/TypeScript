export const Extend = () => {
    return <div>
        <h1>Extend</h1>
    </div>
}

type SimpleExtend<T> = T extends number ? 'work' : 'dont work'

type SimpleUser<T> = {
    name: string
    work: SimpleExtend<T>
}

const user: SimpleUser<string> = {
    name: 'vlas',
    work: 'dont work'
}

type TypeBrand = 'bmw' | 'audi'
type Price = '1000$' | '2000$'

type TypeCar = `${TypeBrand} ${Price}`

const car: TypeCar = `audi 2000$`
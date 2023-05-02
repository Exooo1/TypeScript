import {ObjectTypeOne, SimpleObjectType, TSimple} from "./types";

export const Objects = () => {
    return <div>
        <h1>Objects</h1>
    </div>
}

const simpleObject: SimpleObjectType = {
    name: 'Vlas',
    surname: 'Maskalenchik',
    age: 25,
    city: 'Minsk'
}
console.log(simpleObject.name + simpleObject.surname)

const objectOne: ObjectTypeOne & SimpleObjectType = {
    work: 'Prodmir',
    isWork: true,
    ...simpleObject,
    name: 'Diana',
}
console.log(objectOne.name + objectOne.surname)
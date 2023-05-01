import {SimpleObjectType} from "./types";

export const ArrayComponent = () => {
    return <div>
        <h1>Array</h1>
    </div>
}
//stringArrays
const arrayString: Array<string> = ['vlas', 'diana']
const arrayStringTwo: string[] = ['vlas', 'diana']
const arrayStringThree: [string, number] = ['vlas', 25]
const arrayStringFour: ['string', 'number'] = ['string', 'number']

//numberArrays
const arrayNumber: Array<number> = []
const arrayNumberTwo: number[] = []

//objectArrays
const arraysObjects: SimpleObjectType[] = [
    {name: 'vlas'}
]

const readOnlyArray: ReadonlyArray<number> = [2, 3];
for (let i = 0; i < readOnlyArray.length; i++) {
    readOnlyArray[i] = readOnlyArray[i] * i
}
readOnlyArray.push(25)

console.log(readOnlyArray)


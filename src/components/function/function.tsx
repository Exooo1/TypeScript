import {FuncFiveType, SimpleObject, TSimple} from "./types";

export const FunctionComponents = () => {
    return <div>
        <h1>Function</h1>
    </div>
}

const func = (): {} => ({})
const funcTwo = (): undefined => undefined
const funcThree = (value: number) => {
    console.log(value + ' years')
}
const funcFour = (name: string, city: string): SimpleObject => {
    return {name, city}
}
funcThree(25)
console.log(funcFour('vlas', 'minsk'))

const funcFive: FuncFiveType = (name) => {
    console.log(name)
    return 'string'
}
funcFive('vlas')

const funcSix = (...rest: number[]) => {
    console.log(rest)
}

function per(value: string): string

function per(value: string, price: number): string

function per(value: string, price?: number): string {
    return `${value} + ${price}`
}

per('Hello')

type TypeLength = {
    length: number
    trim: () => string
}

const func5 = <T extends TypeLength>(value: T): number => {
    return value.length
}
func5('24')

const getLength = (text: string | null) => {
    return text!.length
}

getLength('')
// getLength(null)
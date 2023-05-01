export const BaseType = () => {
    return <div>
        <h1>BaseType</h1>
    </div>
}

type SkillsType = {
    JS:string
    TS:string
}
type FiendsType = Array<string>

const name: string = 'Vlas'
const age: number = 25
const hasWork:boolean = true
const skills:SkillsType  = {
    JS:'JavaScript',
    TS:'TypeScript'
}
let nothing:null
let haveUndefined:undefined

let anyItem:any
anyItem = 24
// anyItem.toUpperCase()// it will be mistake!

let unknownItem:unknown;
unknownItem = {}
if(unknownItem==='string')unknownItem.toUpperCase()

const friend:Array<string>|FiendsType  = ['Vlad','Diana']

const func = ():void => {} // it will be undefined


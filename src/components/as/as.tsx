export const As = ()=>{
    return <div>
        <h1>As</h1>
    </div>
}

const elem = document.getElementById('input')
const result = (elem as HTMLInputElement).value

let number = 2
let numRes = number as 3
// numRes=2 Будет ошибка, потому что мы явно указываем что это будет 3.
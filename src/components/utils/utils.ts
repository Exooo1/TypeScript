interface IUserH {
    name: string
    surname: string
    age: number
    whereLive: string
}

const vlas: Omit<IUserH, 'whereLive'> = {
    age: 25,
    name: 'vlas',
    surname: 'maskalenchik'
}
//Omit Вырезает из типов указанное свойство.

const name: Pick<IUserH, 'name'> = {
    name: 'vlas'
}
//Pick забирает и типа указанное свойство.

const partialName: Partial<IUserH> = {
    name: 'vlas'
}
//Partial указывает все типы не обязательны.

const readUser: Readonly<Omit<IUserH, 'whereLive'>> = {
    name: '',
    surname: '',
    age: 25,
}
// Readonly запрещает мутировать переменную
// readUser.name = 'vlas' Будет ошибка

type TUsers = 'vlas' | 'diana' | 'dima'

const recordUser: Record<TUsers, string> = {
    vlas: '24',
    diana: '',
    dima: '25'
}

const requiredUser:Required<IUserH> ={
    name:'',age:25,surname:'',whereLive:''
}

//Required делает необязательный поля обязательным!


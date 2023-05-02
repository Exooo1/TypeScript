enum EnumRoles {
    admin, operator, user
}

type TUser = {
    role: EnumRoles
}

const user: TUser = {
    role: EnumRoles.user
}
console.log(user.role)


enum EnumSchools {
    18, 27, 5, '#18', 3, 15
}

const enum EnumTest {
    one = 'one'
}
EnumTest.one
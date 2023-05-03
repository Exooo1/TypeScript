export const Jeneric = () => {
    return <div>
        <h1>Jeneric</h1>
    </div>
}

const func = <T, >(value: T): T => {
    return value
}
func<string>('some')
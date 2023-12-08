function soma(a, b) {
    return a + b
}

const divisao = (dividendo, divisor) => {
    if (typeof (dividendo) !== 'number' || typeof (divisor) !== 'number')
        throw new TypeError('Os valores de entra nao sao numericos')

    result = dividendo / divisor

    if (result == Infinity)
        throw new Error('Nao permitido divisao por zero')

    return result
}

module.exports = {
    soma,
    divisao,
}

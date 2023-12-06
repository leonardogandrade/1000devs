const calculaIdade = (req, res) => {
    const hoje = new Date(Date.now())
    const nascimento = new Date("1983-02-14")
    const idade = hoje.getFullYear() - nascimento.getFullYear()

    res.json({
        "nome": "leonardo",
        "cidade": "Vitoria ES",
        "profissao": "programador",
        "nascimento": idade
    })
}

module.exports = {
    calculaIdade
}
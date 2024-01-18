class ValidatorMiddleware {
    validateInput(request, response, next) {
        const {nome, idade} = request.body
        if (typeof(nome) !== 'string' || typeof(idade) !== 'number') {
            // throw { statuscode: 500, decription: "Nome contem tipo errado"}
            response.status(500).json({description:`Payload contem tipos errados: ${typeof(nome) !== 'string' ?"Nome":"Idade"}`})
        }
        else {
            console.log(request.body);
            next()
        }
    }
}

module.exports = new ValidatorMiddleware()
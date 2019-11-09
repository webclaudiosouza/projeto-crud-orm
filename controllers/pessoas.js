
const index = async({ Pessoa }, req, res) => {
    const pessoas = await Pessoa.findAll()
    res.render('pessoas/index', {pessoas})
}

const createProcess = async({Pessoa}, req, res) => {
    await Pessoa.create(req.body)
    res.redirect('/pessoas')
}
const createForm = (req, res) => {
    res.render('pessoas/create')
}
const deleteOne = async( { Pessoa }, req, res) => {
    await Pessoa.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/pessoas')
}
//editando informações

const editForm = async({Pessoa}, req, res) => {
    const home = await Pessoa.findByPk(req.params.id)
    res.render('pessoas/edit', {home})
    console.log(home[Object])
}


const editProcess = async( { Pessoa }, req, res) => {
    await Pessoa.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/pessoas')
}

module.exports = {
    index,
    createForm,
    createProcess,
    deleteOne,
    editForm,
    editProcess
}
/* Objeto que renderiza las vistas dependiendo de la ruta */

export default class VistasController {

    async index(req, res) {
        res.render('pages/index')
    }

    async dashbord(req, res) {
        res.render('pages/dashbord')
    }

    async instrumentosTabla(req, res) {
        res.render('pages/index')
    }
}
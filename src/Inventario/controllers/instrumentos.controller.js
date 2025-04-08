
export default class InstrumentosController {
    constructor() {
        this.instrumentosController = new BaseController('instrumentos');
    }
    async instrumentosTabla(req, res) {
        const items = await this.instrumentosController.getItems(req, res);
        res.render('pages/tabla', { items });
    }
}
import db from '/Users/angel/Documents/5_semestre/progra_web/Prueba-Modulo-Inventario/src/DB/mysql.js';

class BaseController {
    constructor(tabla) {
        this.tabla = tabla;
    }

    getItems(req, res) {
        return db.Todos(this.tabla)
            .then(items => res.json(items))
            .catch(() => res.status(500).json({ error: 'Error fetching items' }));
    }

    getItemById(req, res) {
        const { id } = req.params;
        return db.uno(this.tabla, id)
            .then(item => {
                if (!item) {
                    return res.status(404).json({ error: 'Item not found' });
                }
                res.json(item);
            })
            .catch(() => res.status(500).json({ error: 'Error fetching item' }));
    }

    createItem(req, res) {
        const { name, quantity, price } = req.body;
        return db.agragar(this.tabla, { name, quantity, price })
            .then(newItem => res.status(201).json(newItem))
            .catch(() => res.status(500).json({ error: 'Error creating item' }));
    }

    updateItem(req, res) {
        const { id } = req.params;
        const { name, quantity, price } = req.body;
        return db.modificar(this.tabla, id, { name, quantity, price })
            .then(updatedItem => {
                if (!updatedItem) {
                    return res.status(404).json({ error: 'Item not found' });
                }
                res.json(updatedItem);
            })
            .catch(() => res.status(500).json({ error: 'Error updating item' }));
    }

    deleteItem(req, res) {
        const { id } = req.params;
        return db.eliminar(this.tabla, id)
            .then(deleted => {
                if (!deleted) {
                    return res.status(404).json({ error: 'Item not found' });
                }
                res.json({ message: 'Item deleted successfully' });
            })
            .catch(() => res.status(500).json({ error: 'Error deleting item' }));
    }
}

export default BaseController;

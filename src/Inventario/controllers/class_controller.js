import db from '../../database/mysql';

class BaseController {
    constructor(tabla) {
        this.tabla = tabla;
    }

    getItems(req, res) {
        db.Todos(this.tabla)
            .then(items => res.json(items))
            .catch(() => res.status(500).json({ error: 'Error fetching items' }));
    }

    getItemById(req, res) {
        const { id } = req.params;
        db.uno(this.tabla, id)
            .then(item => {
                if (!item) {
                    res.status(404).json({ error: 'Item not found' });
                } else {
                    res.json(item);
                }
            })
            .catch(() => res.status(500).json({ error: 'Error fetching item' }));
    }

    createItem(req, res) {
        const { name, quantity, price } = req.body;
        db.agragar(this.tabla, { name, quantity, price })
            .then(newItem => res.status(201).json(newItem))
            .catch(() => res.status(500).json({ error: 'Error creating item' }));
    }

    updateItem(req, res) {
        const { id } = req.params;
        const { name, quantity, price } = req.body;
        db.modificar(this.tabla, id, { name, quantity, price })
            .then(updatedItem => {
                if (!updatedItem) {
                    res.status(404).json({ error: 'Item not found' });
                } else {
                    res.json(updatedItem);
                }
            })
            .catch(() => res.status(500).json({ error: 'Error updating item' }));
    }

    deleteItem(req, res) {
        const { id } = req.params;
        db.eliminar(this.tabla, id)
            .then(deleted => {
                if (!deleted) {
                    res.status(404).json({ error: 'Item not found' });
                } else {
                    res.json({ message: 'Item deleted successfully' });
                }
            })
            .catch(() => res.status(500).json({ error: 'Error deleting item' }));
    }
}

export default BaseController;

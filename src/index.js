import CTableModel from './scripts/models/CTableModel';
import CTableView from './scripts/views/CTableView';

let cTableModel = new CTableModel();
let cTableView = new CTableView(cTableModel, {
    el: document.querySelector('.cTableWrapper'),
    url: 'src/datasets/example-one.json'
});


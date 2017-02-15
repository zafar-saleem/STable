import CTableModel from './scripts/models/CTableModel';
import CTableView from './scripts/views/CTableView';

let cTableModel = new CTableModel();
let cTableView = new CTableView(cTableModel, {
    el: document.querySelector('.wrapper'),
    url: 'src/datasets/example-one.json'
});

/*
CTableView.init(cTableModel, {
    el: document.querySelector('.wrapper'),
    url: 'src/datasets/example-one.json'
});
*/


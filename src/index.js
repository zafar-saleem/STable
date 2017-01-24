import CTableModel from './scripts/models/CTableModel';
import CTableView from './scripts/views/CTableView';

CTableView.init(CTableModel, {
    el: document.querySelector('.wrapper'),
    url: 'src/datasets/example-one.json'
});

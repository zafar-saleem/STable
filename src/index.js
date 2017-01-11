import SolutionModel from './scripts/models/SolutionModel';
import SolutionView from './scripts/views/SolutionView';

SolutionView.init(SolutionModel, {
    el: document.querySelector('.wrapper'),
    url: 'src/datasets/example-one.json'
});


import 'main.scss';
import './styles/_variables.scss'

import TopBar from 'components/TopBar';
import Slider from 'components/Slider';
import FindPlace from 'components/FindPlace';
import Offer from 'components/Offer';
import CV from 'components/CV';

const main = async () => {
    TopBar();
    Slider();
    FindPlace();
    Offer();
    CV();
}

main();
import '../main.scss';

import Photo from '../../assets/photo1.png'

async function Slider() {

    const container = document.createElement('div');
    const pic = document.createElement('img');

    container.className = 'photo1-container';
    pic.className = 'pic';
    pic.src = Photo;

    document.body.appendChild(container);
    container.appendChild(pic);
}

export default Slider;
import '../main.scss';

import { positions } from '../consts';
import ArrowIcon from '../../assets/group1204';

async function Offer() {
    const positionHeadings = [];
    positions.map((position) => {
        positionHeadings.push(
            {
                element: document.createElement('h5'),
                text: document.createTextNode(position.name),
                id: position.id,
                button: document.createElement('button'),
                buttonText: 'SZCZEGÓŁY',
                container: document.createElement('div'),
            }
        );
        positionHeadings.map((position) => {
            position.element.appendChild(position.text);
            position.button.innerHTML = position.buttonText;
            position.container.className = "position " + position.id;
        })
    })
    
    const offer = document.createElement('div');
    const h201 = document.createElement('h2');
    const h201Text = document.createTextNode('Oferty pracy');
    const h601 = document.createElement('h6');
    const h601Text = document.createTextNode('Dołącz do naszego zespołu');
    
    const h602 = document.createElement('h6');
    const h602Text = document.createTextNode('Twoje zadania:');
    const body101 = document.createElement('p');
    const body101Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    const body102 = document.createElement('p');
    const body102Text = document.createTextNode('- Vivamus porttitor nisi sit amet ex accumsan, ut ultrices dui mattis.');
    const body103 = document.createElement('p');
    const body103Text = document.createTextNode('- Cras suscipit mollis lectus ac egestas.');
    const body104 = document.createElement('p');
    const body104Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    const body105 = document.createElement('p');
    const body105Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');

    const h603 = document.createElement('h6');
    const h603Text = document.createTextNode('Mile widziane:');
    const body106 = document.createElement('p');
    const body106Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    const body107 = document.createElement('p');
    const body107Text = document.createTextNode('- Vivamus porttitor nisi sit amet ex accumsan, ut ultrices dui mattis.');
    const body108 = document.createElement('p');
    const body108Text = document.createTextNode('- Cras suscipit mollis lectus ac egestas.');
    const body109 = document.createElement('p');
    const body109Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    const body110 = document.createElement('p');
    const body110Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');

    const h604 = document.createElement('h6');
    const h604Text = document.createTextNode('Gwarantujemy Ci:');
    const body111 = document.createElement('p');
    const body111Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    const body112 = document.createElement('p');
    const body112Text = document.createTextNode('- Vivamus porttitor nisi sit amet ex accumsan, ut ultrices dui mattis.');
    const body113 = document.createElement('p');
    const body113Text = document.createTextNode('- Cras suscipit mollis lectus ac egestas.');
    const body114 = document.createElement('p');
    const body114Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    const body115 = document.createElement('p');
    const body115Text = document.createTextNode('- Mauris lacinia eros nec vulputate sagittis.');
    
    const body116 = document.createElement('p');
    const body116Text = document.createTextNode('Zainteresowany? Zapraszamy do współpracy');
    
    const buttonContainer = document.createElement('div');
    const button1 = document.createElement('button');
    button1.innerHTML = 'APLIKUJ';

    const positionsContainer = document.createElement('div');

    offer.className = 'offer-container';
    positionsContainer.className = 'position-container';
    body116.className = 'cta';
    buttonContainer.className = 'button-container';

    h201.appendChild(h201Text);
    h601.appendChild(h601Text);
    h602.appendChild(h602Text);
    h603.appendChild(h603Text);
    h604.appendChild(h604Text);

    body101.appendChild(body101Text);
    body102.appendChild(body102Text);
    body103.appendChild(body103Text);
    body104.appendChild(body104Text);
    body105.appendChild(body105Text);

    body106.appendChild(body106Text);
    body107.appendChild(body107Text);
    body108.appendChild(body108Text);
    body109.appendChild(body109Text);
    body110.appendChild(body110Text);

    body111.appendChild(body111Text);
    body112.appendChild(body112Text);
    body113.appendChild(body113Text);
    body114.appendChild(body114Text);
    body115.appendChild(body115Text);

    body116.appendChild(body116Text);

    buttonContainer.appendChild(button1);

    document.body.appendChild(offer);
    offer.appendChild(h201);
    offer.appendChild(h601);
    offer.appendChild(positionsContainer);
    positionHeadings.map((position) => {
        
        const extraContainer = document.createElement('div');
        extraContainer.className = 'extra';
        const group1204 = document.createElement('div');
        group1204.className = 'arrow-icon';
        group1204.innerHTML = ArrowIcon;
        
        extraContainer.appendChild(position.button);
        extraContainer.appendChild(group1204);
        position.container.appendChild(position.element);
        position.container.appendChild(extraContainer);
        positionsContainer.appendChild(position.container);
    })
    offer.appendChild(h602);
    offer.appendChild(body101);
    offer.appendChild(body102);
    offer.appendChild(body103);
    offer.appendChild(body104);
    offer.appendChild(body105);

    offer.appendChild(h603);
    offer.appendChild(body106);
    offer.appendChild(body107);
    offer.appendChild(body108);
    offer.appendChild(body109);
    offer.appendChild(body110);

    offer.appendChild(h604);
    offer.appendChild(body111);
    offer.appendChild(body112);
    offer.appendChild(body113);
    offer.appendChild(body114);
    offer.appendChild(body115);

    offer.appendChild(body116);
    offer.appendChild(buttonContainer);
}

export default Offer;
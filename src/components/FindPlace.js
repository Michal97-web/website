import '../main.scss';

async function FindPlace() {

    const findPlaceContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode('Znajdź miejsce dla siebie');
    const h5 = document.createElement('h5');
    const h5Text = document.createTextNode('Mamy przyjemność zaprosić Cię do współpracy');
    const p1 = document.createElement('p');
    const p1Text = document.createTextNode('Kilka słów o nas...');
    const p2 = document.createElement('p');
    const buttonsContainer = document.createElement('div');
    const button1 = document.createElement('button');
    const button1Text = document.createTextNode('OFERTY PRACY');
    const button2 = document.createElement('button');
    const button2Text = document.createTextNode('ŻYCIE W DR BLITZ-WEBLAB');
    
    findPlaceContainer.className = 'find-place-container';
    p1.className = 'body1';
    p2.className = 'body1';
    buttonsContainer.className = 'container';
    button1.className = 'button';
    button2.className = 'button';
    
    h1.appendChild(h1Text);
    h5.appendChild(h5Text);
    p1.appendChild(p1Text);
    p2.innerHTML= 'Dr.Blitz-weblab to zespół specjalistów i pasjonatów technologii internetowych. Od wielu lat zajmujemy się wdrożeniami opartymi na CMS TYPO3. Realizujemy bardzo duże i skomplikowane projekty, jak i małe dla niewielkich przedsiębiorców. Mamy szeroki zakres działań – od stron internetowych po intranet, newsletter, sklepy internetowe oraz spersonalizowane moduły w oparciu o potrzeby klientów.<br/><br/>Mając świadomość tego, że każdy projekt jest inny, podchodzimy do każdego naszego klienta w sposób indywidualny, starając się wyjść na przeciw wszystkim jego oczekiwaniom. Swoim klientom oferujemy pełne wsparcie od etapu pomysłu do finalnego wdrożenia.';
    button1.appendChild(button1Text);
    button2.appendChild(button2Text);

    document.body.appendChild(findPlaceContainer);
    findPlaceContainer.appendChild(h1);
    findPlaceContainer.appendChild(h5);
    findPlaceContainer.appendChild(p1);
    findPlaceContainer.appendChild(p2);
    findPlaceContainer.appendChild(buttonsContainer);
    buttonsContainer.appendChild(button1);
    buttonsContainer.appendChild(button2);
}

export default FindPlace;
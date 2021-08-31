import '../main.scss';

import Pic from '../../assets/group1201';
import CheckIconFalse from '../../assets/group1200';
import CheckIconTrue from '../../assets/group1202';

async function CV() {
    let agreed = false;

    const cv = document.createElement('div');

    cv.className = 'cv-container';

    const h501 = document.createElement('h5');
    const h501Text = document.createTextNode('Prześlij nam swoje CV');
    const h601 = document.createElement('h6');
    const h601Text = document.createTextNode('Prosimy o zawarcie klauzuli:');
    const body101 = document.createElement('p');
    const body101Text = document.createTextNode('Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych przy realizacji procesu rekrutacji poprzez Dr Blitz-Weblab z siedzibą ul. Przemiarki 21/14, 30-001 Kraków zgodnie z Ustawą z dn. 29.08.97 o Ochronie Danych Osobowych (DZ.U. nr 133, poz. 883).');
    const group1201 = document.createElement('div');
    const button101 = document.createElement('button');
    
    const form = document.createElement('form');

    const inputContainer1 = document.createElement('div');
    const inputContainer2 = document.createElement('div');
    
    const column1 = document.createElement('div');
    const column2 = document.createElement('div');
    const column3 = document.createElement('div');
    const column4 = document.createElement('div');

    const agree = document.createElement('div');
    const checkboxTrue = document.createElement('div');
    const checkboxFalse = document.createElement('div');
    const agreeOverline = document.createElement('div');
    const agreeOverlineText = document.createTextNode('ZGADZAM SIĘ NA PRZETWARZANIE MOICH DANYCH ZGODNIE Z USTAWĄ O OCHRONIE DANYCH OSOBOWYCH. WIEM, ŻE PRZYSŁUGUJE MI PRAWO DOSTĘPU DO MOICH DANYCH, MOŻLIWOŚĆ ICH ZMIANY ORAZ WYCOFANIA ZGODY NA ICH PRZETWARZANIE. TWOJE DANE BĘDĄ PRZETWARZANE WYŁĄCZNIE W CELU UDZIELENIA ODPOWIEDZI. PODANIE DANYCH JEST DOBROWOLNE. ADMINISTRATOREM DANYCH OSOBOWYCH JEST DR BLITZ-WEBLAB Z SIEDZIBĄ UL. PRZEMIARKI 21/14, 30-001 KRAKÓW. *')
    
    checkboxTrue.className = 'checkbox-true';
    checkboxFalse.className = 'checkbox-false';
    agreeOverline.className = 'overline';
    agree.className = 'agree';

    agreeOverline.appendChild(agreeOverlineText);

    const nameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const phoneLabel = document.createElement('label');
    const messageLabel = document.createElement('label');
    
    const nameSpan = document.createElement('span');
    const emailSpan = document.createElement('span');
    const phoneSpan = document.createElement('span');
    const messageSpan = document.createElement('span');

    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const phoneInput = document.createElement('input');
    const messageInput = document.createElement('input');

    nameInput.id = "name-input";
    emailInput.id = "email-input";
    phoneInput.id = "phone-input";
    messageInput.id = "message-input";
    
    checkboxTrue.id = 'checkbox-true';
    checkboxFalse.id = 'checkbox-false';

    h501.appendChild(h501Text);
    h601.appendChild(h601Text);
    body101.appendChild(body101Text);
    group1201.innerHTML = Pic;
    button101.innerHTML = 'ZAŁĄCZ PLIK';    

    inputContainer1.appendChild(column1);
    inputContainer1.appendChild(column2);
    inputContainer1.appendChild(column3);
    inputContainer2.appendChild(column4);

    column1.appendChild(nameLabel);
    column2.appendChild(emailLabel);
    column3.appendChild(phoneLabel);
    column4.appendChild(messageLabel);

    nameLabel.appendChild(nameSpan);
    emailLabel.appendChild(emailSpan);
    phoneLabel.appendChild(phoneSpan);
    messageLabel.appendChild(messageSpan);
    
    nameSpan.innerHTML = "imię i nazwisko&#42;";
    emailSpan.innerHTML = 'email&#42;';
    phoneSpan.innerHTML = 'telefon';
    messageSpan.innerHTML = 'wiadomość/list motywacyjny&#42;';
    
    nameSpan.appendChild(nameInput);
    emailSpan.appendChild(emailInput);
    phoneSpan.appendChild(phoneInput);
    messageSpan.appendChild(messageInput);
    
    nameLabel.type = "text";
    emailLabel.type = "email";
    phoneLabel.type = "number";
    messageLabel.type = "text";

    nameLabel.required = true;
    emailLabel.required = true;
    messageLabel.required = true;

    body101.className = 'body1';
    group1201.className = 'pic2';
    button101.className = 'buttonHover';
    inputContainer1.className = 'container1';
    inputContainer2.className = 'container2';
    column1.className = 'inputContainer';
    column2.className = 'inputContainer';
    column3.className = 'inputContainer';
    column4.className = 'inputContainer';

    
    agree.appendChild(checkboxTrue);
    agree.appendChild(checkboxFalse);
    agree.appendChild(agreeOverline);
    
    const changeAgreed = (bool) => {
        const checkTrue = document.getElementById('checkbox-true');
        const checkFalse = document.getElementById('checkbox-false');
        if (bool) {
            checkTrue.className = 'hidden';
            checkFalse.className = 'active';
        } else {
            checkTrue.className = 'active';
            checkFalse.className = 'hidden';
        }
    }
    
    checkboxTrue.innerHTML = CheckIconTrue;
    checkboxFalse.innerHTML = CheckIconFalse;
    
    document.addEventListener('DOMContentLoaded', function () {
        const checkTrueId = document.getElementById('checkbox-true');
        const checkFalseId = document.getElementById('checkbox-false');
        checkTrueId.addEventListener('click', () => changeAgreed(true));
        checkFalseId.addEventListener('click', () => changeAgreed(false));
    });
    
    document.body.appendChild(cv);
    cv.appendChild(h501);
    cv.appendChild(h601);
    cv.appendChild(body101);
    cv.appendChild(group1201);
    cv.appendChild(button101);
    cv.appendChild(form);
    form.appendChild(inputContainer1);
    form.appendChild(inputContainer2);
    cv.appendChild(agree);
}

export default CV;
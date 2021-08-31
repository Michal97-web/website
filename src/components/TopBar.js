import '../main.scss';

import Logo from '../../assets/logo';

import MenuDesktop from './MenuDesktop';

async function TopBar() {

    const mainContainer = document.createElement('div');
    const logo = document.createElement('div');

    mainContainer.className = 'topbar-container';
    mainContainer.id = 'topbar-container';
    logo.className = 'logo';
    logo.innerHTML = Logo;

    document.body.appendChild(mainContainer);
    mainContainer.appendChild(logo);
    MenuDesktop();
}

export default TopBar;
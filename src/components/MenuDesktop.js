import '../main.scss';

async function MenuDesktop() {
    const mainContainer = document.getElementById('topbar-container');
    const menuDesktopContainer = document.createElement('div');
    const menuItem1 = document.createElement('button');
    const menuItem2 = document.createElement('button');
    const menuItem3 = document.createElement('button');
    const menuItem4 = document.createElement('button');
    const menuItem5 = document.createElement('button');
    const menuItem6 = document.createElement('button');
    const menuText1 = document.createTextNode('o nas');
    const menuText2 = document.createTextNode('oferta');
    const menuText3 = document.createTextNode('portfolio');
    const menuText4 = document.createTextNode('kariera');
    const menuText5 = document.createTextNode('blog');
    const menuText6 = document.createTextNode('kontakt');

    menuDesktopContainer.className = "menu-container";
    
    mainContainer.appendChild(menuDesktopContainer);
    menuItem1.appendChild(menuText1);
    menuItem2.appendChild(menuText2);
    menuItem3.appendChild(menuText3);
    menuItem4.appendChild(menuText4);
    menuItem5.appendChild(menuText5);
    menuItem6.appendChild(menuText6);
    menuDesktopContainer.appendChild(menuItem1);
    menuDesktopContainer.appendChild(menuItem2);
    menuDesktopContainer.appendChild(menuItem3);
    menuDesktopContainer.appendChild(menuItem4);
    menuDesktopContainer.appendChild(menuItem5);
    menuDesktopContainer.appendChild(menuItem6);
}

export default MenuDesktop;
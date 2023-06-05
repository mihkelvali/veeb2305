/* 
  <a href="">Home</a>
  <a href="">Upcoming treks</a>
  <a href="">Treks for family</a>
  <a href="">Contact us</a>
*/

let navItemsHtml = document.querySelector('#navItems');
let navItemsList = [
  {
    pealkiri: 'Home',
    viide: 'index.html'
  },
  {
    pealkiri: 'Upcoming treks',
    viide: 'upcoming.html'
  },
  {
    pealkiri: 'Treks for family',
    viide: 'family.html'
  },
  {
    pealkiri: 'Contact us',
    viide: 'contact.html'
  }
];

for (let i = 0; i < navItemsList.length; i++) {
  navItemsHtml.innerHTML += `<a href="${navItemsList[i].viide}" target="_blank">${navItemsList[i].pealkiri}</a>`;
}

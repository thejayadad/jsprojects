// script.js
const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Contact', href: '#' }
];

const navbar = document.getElementById('navbar');

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    navbar.appendChild(li);
});

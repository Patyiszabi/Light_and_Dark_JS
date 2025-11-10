let isDark = false;

function switchTheme() {
  const body = document.body;
  const navbar = document.getElementById('navbar');
  const cards = document.querySelectorAll('.card');
  const table = document.getElementById('table');
  const trElements = document.getElementsByTagName('tr');
  const cardchanges = document.querySelectorAll('.column');
  const footer = document.getElementsByClassName('navbar-text');
  const h1 = document.getElementsByTagName('h1');
  const button = document.getElementById('themeSwitch');

  if (!isDark) {
    body.classList.add('bg-dark');

    if (navbar) {
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');
    }

    if (cards && cards.length) {
      cards.forEach(card => {
        card.classList.remove('bg-light', 'text-dark');
        card.classList.add('bg-secondary', 'text-white', 'border-light');
      });
    }

    if (table) {
      table.style.backgroundColor = '#343a40';
      table.style.color = 'white';
    }

    Array.from(trElements).forEach(tr => {
      tr.style.color = 'white';
    });

    if (cardchanges && cardchanges.length) {
      cardchanges.forEach(cardchange => {
        cardchange.classList.remove('col');
        cardchange.classList.add('col-12');
      });
    }

    if (footer && footer.length > 0) {
      footer[0].style.color = 'white';
      footer[0].style.paddingLeft = '1700px';
    }

    if (h1 && h1.length > 0) {
      h1[0].textContent = 'This is the Dark theme';
      h1[0].style.color = 'white';
    }

    if (button) {
      button.textContent = 'Activate Light Theme';
    }
  } else {
    body.classList.remove('bg-dark');

    if (navbar) {
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');
    }

    if (cards && cards.length) {
      cards.forEach(card => {
        card.classList.remove('bg-secondary', 'text-white', 'border-light');
        card.classList.add('bg-light', 'text-dark');
      });
    }

    if (table) {
      table.style.backgroundColor = '';
      table.style.color = '';
    }

    Array.from(trElements).forEach(tr => {
      tr.style.color = '';
    });

    if (cardchanges && cardchanges.length) {
      cardchanges.forEach(cardchange => {
        cardchange.classList.remove('col-12');
        cardchange.classList.add('col');
      });
    }

    if (footer && footer.length > 0) {
      footer[0].style.color = '';
      footer[0].style.paddingLeft = '';
    }

    if (h1 && h1.length > 0) {
      h1[0].textContent = 'This is the Light theme';
      h1[0].style.color = '';
    }

    if (button) {
      button.textContent = 'Activate Dark Theme';
    }
  }
  isDark = !isDark;
}
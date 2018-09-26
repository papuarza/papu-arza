window.onload = () => {
  const menuTrigger = document.getElementById('menu-trigger');
  if (menuTrigger) {
    const menuColumn = document.getElementById('menu-column');
    const menuWrapper = document.getElementById('menu-wrapper');
    const menuLines = document.getElementsByClassName('menu-lines');
    menuTrigger.addEventListener('click', () => {
      if (!menuColumn.classList.contains('dark-to-light')) {
        menuColumn.classList.add('dark-to-light');
        menuWrapper.classList.add('show-the-dark');
        for (i = 0; i < menuLines.length; i++) {
          menuLines[i].classList.add('move-to-dark-cross');
          menuLines[i].classList.remove('move-to-light-cross')
        }
        menuColumn.classList.remove('light-to-dark');
        menuWrapper.classList.remove('remove-the-dark');
      } else {
        menuColumn.classList.add('light-to-dark');
        menuWrapper.classList.add('remove-the-dark');
        for (i = 0; i < menuLines.length; i++) {
          menuLines[i].classList.add('move-to-light-cross')
          menuLines[i].classList.remove('move-to-dark-cross')
        }
        menuColumn.classList.remove('dark-to-light');
        menuWrapper.classList.remove('show-the-dark');
      }
    })
  }
}
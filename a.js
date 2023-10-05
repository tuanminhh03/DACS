
  // Lấy danh sách các mục chính
  const menuItems = document.querySelectorAll('.header1 li');

  // Duyệt qua từng mục chính và thêm sự kiện hover
  menuItems.forEach((menuItem) => {
    const submenu = menuItem.querySelector('.subnav');
    if (submenu) {
      menuItem.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });

      menuItem.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    }
  });


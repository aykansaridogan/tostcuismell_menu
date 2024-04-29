const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        menuItems.forEach(item => {
            item.classList.remove('hide');
            if (filter !== 'all' && !item.classList.contains(filter)) {
                item.classList.add('hide');
            }
        });

        filterBtns.forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = btn.getAttribute('data-filter');

            // Tüm menü öğelerini gizle
            menuItems.forEach(item => {
                item.classList.remove('show');
            });

            // Seçili kategoriye ait menü öğelerini göster
            if (filter === 'all') {
                menuItems.forEach(item => {
                    item.classList.add('show');
                });
            } else {
                menuItems.forEach(item => {
                    if (item.classList.contains(filter)) {
                        item.classList.add('show');
                    }
                });
            }

            // Seçili butonun aktifliğini ayarla
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            btn.classList.add('active');
        });
    });
});

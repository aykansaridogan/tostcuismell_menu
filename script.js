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

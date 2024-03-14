document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        let dropdown = event.target.closest('.dropdown');
        if (!dropdown) return;

        let dropdownValue = dropdown.querySelector('.dropdown__value');
        let dropdownList = dropdown.querySelector('.dropdown__list');

        if (event.target == dropdownValue) {
            dropdownList.classList.toggle('dropdown__list_active');
            event.preventDefault();
        } else if (event.target.closest('.dropdown__item')) {
            dropdownValue.textContent = event.target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
            event.preventDefault();
        }
    });
});

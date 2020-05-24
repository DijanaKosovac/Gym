const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('current-tab');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('current-tab');
    });
}

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}


tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


document.addEventListener("DOMContentLoaded", function () {
    const contactsItems = document.querySelectorAll(".contacts-item");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    let currentItem = 0;

    updateContacts();

    arrowLeft.addEventListener("click", function () {
        currentItem = (currentItem - 1 + contactsItems.length) % contactsItems.length;
        updateContacts();
    });

    arrowRight.addEventListener("click", function () {
        currentItem = (currentItem + 1) % contactsItems.length;
        updateContacts();
    });

    function updateContacts() {
        for (let i = 0; i < contactsItems.length; i++) {
            if (i === currentItem) {
                contactsItems[i].classList.add("active");
            } else {
                contactsItems[i].classList.remove("active");
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactsItems = document.querySelectorAll(".build__item");
    const arrowLeft = document.querySelector(".arrow-left2");
    const arrowRight = document.querySelector(".arrow-right2");

    let currentItem = 0;

    updateContacts();

    arrowLeft.addEventListener("click", function () {
        currentItem = (currentItem - 1 + contactsItems.length) % contactsItems.length;
        updateContacts();
    });

    arrowRight.addEventListener("click", function () {
        currentItem = (currentItem + 1) % contactsItems.length;
        updateContacts();
    });

    function updateContacts() {
        for (let i = 0; i < contactsItems.length; i++) {
            if (i === currentItem) {
                contactsItems[i].classList.add("active");
            } else {
                contactsItems[i].classList.remove("active");
            }
        }
    }
});
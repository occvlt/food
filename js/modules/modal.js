function HideModalClose(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function modal(triggerSelector, modalSelector) {
    //modal window    
    const modal = document.querySelector(modalSelector);
    const btnFormConnection = document.querySelectorAll(triggerSelector);

    btnFormConnection.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            openModal(modalSelector);
            document.body.style.overflow = "hidden";
        });
    });

    modal.addEventListener("click", (event) => {
        const target = event.target;
        if (target === modal || target.getAttribute("data-close") == "") {
            HideModalClose(modalSelector);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            HideModalClose(modalSelector);
        }
    });

    //modal scroll
    // const modalTimer = setTimeout(openModal, 3000);
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export {
    HideModalClose
};
export {
    openModal
};
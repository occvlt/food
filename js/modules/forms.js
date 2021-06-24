import {
    HideModalClose,
    openModal
} from "./modal";

import {
    postData
} from "../services/services";

function forms(formSelector) {
    //forms
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: "img/form/spinner.svg",
        success: "Спасибо, Ваш запрос отправлен. Мы свяжемся с Вами в ближайшее время",
        error: "Ошибка отправки формы"
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const imgLoading = document.createElement("img");
            imgLoading.src = message.loading;
            imgLoading.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement("afterend", imgLoading);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    modalStatusMessage(message.success);
                    imgLoading.remove();
                }).catch(() => {
                    modalStatusMessage(message.error);
                })
                .finally(data => {
                    form.reset();
                });
        });
    }

    function modalStatusMessage(message) {
        const modalContent = document.querySelector(".modal__content");
        modalContent.style.display = "none";
        openModal(".modal");

        const newModalContent = document.createElement("div");
        newModalContent.innerHTML = `
            <div class="modal__content">
                <div data-close="" class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal__dialog").append(newModalContent);

        setTimeout(() => {
            newModalContent.remove();
            HideModalClose(".modal");
            modalContent.style.display = "block";
        }, 2000);
    }
}

export default forms;
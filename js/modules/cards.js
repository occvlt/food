import {
    getResource
} from "../services/services";

function cards() {
    //class cards
    class MenuCard {
        constructor(img, alt, title, descr, price, parentElement, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentElement);
            this.transfer = 27;
            this.classes = classes;
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const div = document.createElement("div");

            if (this.classes.length === 0) {
                div.classList.add("menu__item");
            } else {
                this.classes.forEach(classes => {
                    div.classList.add(classes);
                });
            }

            div.innerHTML = `                
                    <img src=${this.img} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>                                   
            `;
            this.parent.append(div);
        }
    }

    getResource("http://localhost:3000/menu")
        .then(data => {
            data.forEach(({
                img,
                imgalt,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, imgalt, title, descr, price, ".menu__field .container").render();
            });
        });

    // axios.get("http://localhost:3000/menu")
    //     .then(data => {
    //         data.data.forEach(({
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price
    //         }) => {
    //             new MenuCard(img, altimg, title, descr, price, ".menu__field .container").render();
    //         });
    //     });

    //создание карточек меню без класса
    // getResource("http://localhost:3000/menu")
    //     .then(data => {
    //         createCard(data);
    //     });

    // function createCard(data) {
    //     data.forEach(({
    //         img,
    //         imgalt,
    //         title,
    //         descr,
    //         price
    //     }) => {
    //         const element = document.createElement("div");
    //         element.classList.add("menu__item");
    //         element.innerHTML = `
    //             <img src=${img} alt=${imgalt}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector(".menu .container").append(element);
    //     });
    // }
}

export default cards;
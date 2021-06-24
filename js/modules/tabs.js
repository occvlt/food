function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //tabs
    const tabs = document.querySelectorAll(tabsSelector);
    const tabContent = document.querySelectorAll(tabsContentSelector);
    const tabParent = document.querySelector(tabsParentSelector);

    function hideContent() {
        tabContent.forEach((item, i) => {
            item.style.display = "none";
        });

        tabs.forEach((item, i) => {
            item.classList.remove(activeClass);
        });
    }

    function showContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabContent[i].style.display = "block";
    }

    hideContent();
    showContent();

    tabParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target) {
            tabs.forEach((item, i) => {
                if (item === target) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
}

export default tabs;
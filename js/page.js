class PageChanger {
    pages = null;
    pageNames = null;
    currentPageName = null;

    static #instance = null;

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new PageChanger();
        }
        return this.#instance;
    }

    constructor() {
        const pageContainer = document.querySelector(".page-container");

        this.pages = pageContainer.querySelectorAll(".page-container > *");
        
        this.pageNames = this.#extractPageNamesFromElements(this.pages);

        this.currentPageName = this.pageNames[0];
    }

    #extractPageNamesFromElements(pages) {
        const pageNames = new Array();
        for(let i = 0; i < pages.length; i++) {
            const classListArray = Array.from(pages[i].classList);

            pageNames.push(classListArray.filter((className) => {
                return className !== 'invisible'
            })[0]);
        }

        return pageNames;
    }

    changePage(toPage) {
        if(this.pageNames.includes(toPage)) {
            this.pages.forEach(page => {
                page.classList.add("invisible");
            });

            document.querySelector(`.${toPage}`).classList.remove("invisible");

            return;
        }
        throw Error("page doesn't exists");
    }
}
class Sidebar {
    static #instance = null;

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new Sidebar();
        }
        return this.#instance;
    }

    toggleSidebar() {
        const sidebarObj = document.querySelector(".sidebar");
        const buttonIcon = sidebarObj.querySelector(".sidebar-toggle-button i");

        if(sidebarObj.classList.contains("sidebar-open")) {

            sidebarObj.classList.remove("sidebar-open");
            buttonIcon.classList.remove("fa-arrow-left");
            buttonIcon.classList.add("fa-arrow-right");
            return;
        }
        sidebarObj.classList.add("sidebar-open");
        buttonIcon.classList.remove("fa-arrow-right");
        buttonIcon.classList.add("fa-arrow-left");
    }

}
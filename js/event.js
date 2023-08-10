window.onload = () => {
    PagePainter.getInstance().paintTodoList();
};

const sidebarToggleButtonOnClickHandler = () => {
    Sidebar.getInstance().toggleSidebar();
};

const sidebarItemTodoOnClickHandler = () => {
    PageChanger.getInstance().changePage("todo-page");
    Sidebar.getInstance().toggleSidebar();
};

const sidebarItemCalendarOnClickHandler = () => {
    PageChanger.getInstance().changePage("calendar-page");
    Sidebar.getInstance().toggleSidebar();
};

const todoContentInputOnKeyDownHandler = (event) => {
    if(event.keyCode === 13) {
        TodoManager.getInstance().addTodoWithTodoContentInput();
        PagePainter.getInstance().paintTodoList();
        PagePainter.getInstance().clearTodoContentInput();

    }
};
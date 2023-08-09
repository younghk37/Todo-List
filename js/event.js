const sidebarToggleButtonOnClickHandler = () => {
    Sidebar.getInstance().toggleSidebar();
}

const sidebarItemTodoOnClickHandler = () => {
    PageChanger.getInstance().changePage("todo-page");
    Sidebar.getInstance().toggleSidebar();
};

const sidebarItemCalendarOnClickHandler = () => {
    PageChanger.getInstance().changePage("calendar-page");
    Sidebar.getInstance().toggleSidebar();
};
export type propsSidebarMenuList<T> = {
  navigationTo: string;
  menuName: string;
  icon: React.JSX.Element;
  values?: T[] | [];
};

export type propsSidebarMenuListItem<T> = {
  data: T;
};

export interface SideNavItem {
    text: string,
    url: string,
    icon: string
}

export interface SideNavGroup {
    header: string,
    items: SideNavItem[]
}
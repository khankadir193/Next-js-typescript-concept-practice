interface navItem {
    label:string,
    href:string
}

const navItems : navItem[] = [
    {
        label:'Service',
        href:'/Service'
    },
    {
        label:'About',
        href:'/About'
    },
    {
        label:'Contact',
        href:'/Contact'
    },
    {
        label:'Users',
        href:'/Users'
    }
]

export default navItems;
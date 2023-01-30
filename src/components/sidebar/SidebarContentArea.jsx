import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import SideBarItem from './SideBarItem'

const usersMenuData = [
    {
        name: "Clients",
        path: "main/users/clients"
    },
    {
        name: "Riders",
        path: "main/users/riders",
    },
    {
        name: "Restaurants",
        path: "main/users/restaurants"
    },
    {
        name: "Orders",
        path: "main/users/orders"
    }
]

const appMenuData = [
    {
        name: "Services",
        path: "main/app/services"
    },
    {
        name: "Jobs",
        path: "main/app/jobs"
    }
]

function SidebarContentArea() {
    return (
        <div className="h-screen">
            <SideBarItem title="Users" menuItem={usersMenuData} />
            <hr />
            <SideBarItem title="App" menuItem={appMenuData} />
        </div>
    )
}

export default SidebarContentArea
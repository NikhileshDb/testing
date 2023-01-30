import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import SideBarItem from './SideBarItem'

const usersMenuData = [
    {
        name: "Clients",
        path: ""
    },
    {
        name: "Riders",
        path: ""
    },
    {
        name: "Restaurants",
        path: ""
    },
    {
        name: "Orders",
        path: ""
    }
]

const appMenuData = [
    {
        name: "Services",
        path: ""
    },
    {
        name: "Jobs",
        path: ""
    }
]

function SidebarContentArea() {
    return (
        <div className="h-screen">
            <SideBarItem title="Users" menuItem={usersMenuData} />
            <hr />
        </div>
    )
}

export default SidebarContentArea
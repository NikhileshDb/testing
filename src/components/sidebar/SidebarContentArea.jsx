import React from 'react'
import SideBarItem from './SideBarItem'
import UserCirclePlus from '../../assets/svg/UserCirclePlus'
import IconButton from '../IconButton'
import { AiOutlineSetting } from 'react-icons/ai'
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
        <div className="h-screen flex flex-col ">
            <SideBarItem title="Users" menuItem={usersMenuData} />
            <hr />
            <SideBarItem title="App" menuItem={appMenuData} />
            <div className="px-[1.8rem] pl-[1.8rem] mb-10">
                <IconButton icon={<UserCirclePlus />} title="Add" bgColor="black" />
            </div>
            <hr />
            <div className="mt-8 flex justify-end items-center pr-[1.8rem]">
                <AiOutlineSetting className="w-6 h-6 cursor-pointer" />
            </div>

        </div>
    )
}

export default SidebarContentArea
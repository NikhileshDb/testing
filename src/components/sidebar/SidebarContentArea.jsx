import React, { useState } from 'react'
import SideBarItem from './SideBarItem'
import UserCirclePlus from '../../assets/svg/UserCirclePlus'
import IconButton from '../IconButton'
import { AiOutlineSetting } from 'react-icons/ai'
import { SidebarModalMenu } from './SidebarModalMenu'
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
    const [showAdd, setShowAdd] = useState(false);


    return (
        <div className="h-screen flex flex-col ">
            <SideBarItem title="Users" menuItem={usersMenuData} />
            <hr />
            <SideBarItem title="App" menuItem={appMenuData} />
            <div className="px-[1.8rem] pl-[1.8rem] mb-10 relative">
                <IconButton onClick={() => setShowAdd(!showAdd)} icon={<UserCirclePlus />} title="Add" bgColor="black" />
                <div className={`${showAdd ? "" : "hidden"} flex flex-col justify-start bg-red-300 items-start absolute right-[-66%] top-0 h-auto w-[12rem] shadow-2xl rounded-lg`}>
                    <div className="bg-white px-[0.6rem] cursor-pointer py-2 border border-b-[#cfcfcf] w-full">User</div>
                    <div className="bg-white px-[0.6rem] cursor-pointer py-2 border border-b-[#cfcfcf] w-full">Translator</div>
                    <div className="bg-white px-[0.6rem] cursor-pointer py-2 border border-b-[#cfcfcf] w-full">Theme</div>
                    <div className="bg-white px-[0.6rem] cursor-pointer py-2 border border-b-[#cfcfcf] w-full">Category</div>
                </div>
            </div>
            <hr />
            <div className="mt-8 flex justify-end items-center pr-[1.8rem]">
                <AiOutlineSetting className="w-6 h-6 cursor-pointer" />
            </div>

        </div>
    )
}

export default SidebarContentArea
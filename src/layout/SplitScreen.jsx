

import React from 'react'
import HeaderLogo from '../components/header/HeaderLogo'
import HeaderMain from '../components/header/HeaderMain'
import SidebarContentArea from '../components/SidebarContentArea'
import { Outlet } from 'react-router-dom'


function SplitScreen({
}) {
    return (
        <div className="flex w-full h-full ">
            <div className="w-[20rem]">
                <div className="h-[6rem] flex items-center justify-center">
                    <HeaderLogo />
                </div>
                <SidebarContentArea />
            </div>
            <div className="w-[80rem] bg-gray-700">
                <HeaderMain />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SplitScreen
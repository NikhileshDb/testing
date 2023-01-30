

import React from 'react'
import HeaderLogo from '../components/header/HeaderLogo'
import HeaderMain from '../components/header/HeaderMain'
import SidebarContentArea from '../components/sidebar/SidebarContentArea'
import { Outlet } from 'react-router-dom'


function SplitScreen({
}) {
    return (
        <div className="flex w-full h-screen ">
            <div className="w-[20rem]">
                <div className="border border-b-[#c2c2c2] h-[6rem] flex items-center justify-center">
                    <HeaderLogo />
                </div>
                <SidebarContentArea />
            </div>
            <div className="w-[80rem]">
                <HeaderMain />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SplitScreen
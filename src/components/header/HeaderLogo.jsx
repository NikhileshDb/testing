import React from 'react'


function HeaderLogo() {
    return (
        <div className="">
            <div className="flex items-center jsutify-center">
                <div>
                    <svg width="57" height="33" viewBox="0 0 57 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1114 32.2958C10.5754 32.2958 7.03741 31.0408 4.4973 28.5309C1.98742 26.0211 0.732483 22.4377 0.732483 17.7808V11.6328H8.08067V17.5087C8.08067 23.1937 10.4394 26.0362 15.1567 26.0362C17.4549 26.0362 19.2088 25.3558 20.4184 23.995C21.628 22.604 22.2327 20.4419 22.2327 17.5087V0H29.4902V17.7808C29.4902 22.4377 28.2202 26.0211 25.68 28.5309C23.1702 31.0408 19.6473 32.2958 15.1114 32.2958Z" fill="black" />
                        <path d="M38.5641 5.98742H28.4037V0H56.0728V5.98742H45.9123V31.7514H38.5641V5.98742Z" fill="black" />
                    </svg>
                </div>
                <p className="text-[1.8rem]">OWN</p>
            </div>
        </div>
    )
}

export default HeaderLogo
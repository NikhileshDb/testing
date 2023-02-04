import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Breadcrumb() {
  const location = useLocation()
  console.log(location)
  let currentlink = ''
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentlink += `/${crumb}`
      return (
        <div key={crumb}>
          {/* <Link to={currentlink}>{crumb}</Link> */}
          <div> {crumb} /</div>
        </div>
      )
    })

  return (
    <div className="flex flex-row items-center gap-1 justify-start">
      {crumbs}
    </div>
  )
}

export default Breadcrumb
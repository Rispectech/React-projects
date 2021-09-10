import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSideMenuOpen, location, Mpage } = useGlobalContext()
  const { menuPage, menuLinks } = Mpage
  console.log(menuLinks.length)
  const refElement = useRef(null)

  const [col, setCol] = useState('col-2')
  useEffect(() => {
    const { center, top } = location
    const Element = refElement.current
    Element.style.top = `${top}px`
    Element.style.left = `${center}px`

    if (menuLinks.length === 3) setCol('col-3')
    if (menuLinks.length > 3) setCol('col-4')
  }, [location, menuLinks])
  return (
    <aside
      className={isSideMenuOpen ? 'submenu show' : 'submenu'}
      ref={refElement}
    >
      <h4>{menuPage}</h4>
      <div className={`submenu-center ${col}`}>
        {menuLinks.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu

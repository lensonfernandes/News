"use client"

import React from 'react'
import { categories } from '@/constants'
import NavLink from './NavLink'
import {usePathname} from "next/navigation";

const NavLinks = () => {

    const pathname = usePathname();

    
  return (
    <nav>
        {categories.map(category => (
            <NavLink key={category} category={category}  />
        ))}
    </nav>
  )
}

export default NavLinks
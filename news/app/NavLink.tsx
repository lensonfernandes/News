

import React from 'react'
import Link from 'next/link'

type Props = {
    category: string;
    isActive: boolean;

}

const NavLink = ({category, isActive} : Props) => {
  return (
    <Link href="/"> </Link>
  )
}

export default NavLink
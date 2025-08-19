import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useActionData } from 'react-router'

const UserProfile = () => {
    const { logout } = useAuthContext()
    const handleLogout = () => {
        logout()
    }

  return (
        <div className="flex gap-2">
            <div className="dropdown dropdown-end">
            <div>
                
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
            </div>
            </div>
            
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between" href='/Profile'>
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
            </div>
        </div>
  )
}

export default UserProfile
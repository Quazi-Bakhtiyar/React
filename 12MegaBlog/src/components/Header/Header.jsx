import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name : 'Home',
      Slug : '/',
      active: true
    },

    {
      name: 'Login',
      Slug : '/login',
      active: !authStatus
    },

    {
      name : 'Signup',
      Slug : '/signup',
      active: !authStatus
    },

    {
      name: 'All Posts',
      Slug : '/all-posts',
      active: authStatus
    },

    {
      name: 'Add Posts',
      Slug : '/add-post',
      active : authStatus
    }
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>

          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

        <ul className='ml-auto flex'>
          {
            navItems.map((item)=>(
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={()=>navigate(item.Slug)}
                    className='inline-block px-6 py-2 duration-200 hoveer:bg-blue-100 rounded-full'>

                    {item.name}

                  </button>
                </li>
              ) : null
            ))
          }
        </ul>

          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}

        </nav>
      </Container>
    </header>
  )
}

export default Header;
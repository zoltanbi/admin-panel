import React, { useRef } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

interface SidebarItemProp {
    active: boolean;
    icon: string;
    title: string;
}

const SidebarItem = (props: SidebarItemProp) => {
    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const clickOutsideRef = (content_ref: React.RefObject<HTMLDivElement>, toggle_ref: React.RefObject<HTMLDivElement>) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target as Node)) {
            content_ref.current?.classList.toggle('active');
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target as Node)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Sidebar = (props: RouteComponentProps) => {

    const menu_ref = useRef<HTMLDivElement>(null);
    const menu_toggle_ref = useRef<HTMLDivElement>(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => menu_ref.current?.classList.add('active');

    const closeMenu = () => menu_ref.current?.classList.remove('active');

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div>
            <div className='nav-menu' onClick={() => setActiveMenu()}>
                <i className='bx bx-menu'></i>
            </div>
            <div ref={menu_ref} className='sidebar'>
                <div ref={menu_toggle_ref} className="sidebar-close" onClick={() => closeMenu()}>
                    <i className='bx bx-left-arrow-alt'></i>
                </div>
                <div className="sidebar__logo">
                    <img src={logo} alt="company logo" />
                </div>
                {
                    sidebar_items.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <SidebarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Sidebar

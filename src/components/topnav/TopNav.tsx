import React from 'react'
import { Link } from 'react-router-dom'

import './topnav.css'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../theme menu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'
import { Notification } from '../../interfaces/JsonData.interface'

import user_image from '../../assets/images/user.png'

import user_menu from '../../assets/JsonData/user_menus.json'
import { UserMenu } from '../../interfaces/JsonData.interface'

interface CurrUser {
    display_name: string;
    image: string;
}
const curr_user: CurrUser = {
    display_name: 'Zoltan Biro',
    image: user_image,
}

const renderNotificationItem = (item: Notification, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user: CurrUser) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item: UserMenu, index: number) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item: UserMenu, index: number) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item: Notification, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav

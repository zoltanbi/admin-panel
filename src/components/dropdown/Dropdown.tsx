import React, {useRef} from 'react'

import './dropdown.css'

import { Notification, UserMenu } from '../../interfaces/JsonData.interface'

interface DropdownProps {
    icon?: string;
    badge?: string;
    customToggle?: any;
    contentData?: Notification[];
    renderItems?: (item: Notification | UserMenu, index: number) => JSX.Element;
    renderFooter?: any;
}

const clickOutsideRef = (content_ref: React.RefObject<HTMLDivElement>, toggle_ref: React.RefObject<HTMLButtonElement>) => {
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

const Dropdown = (props: DropdownProps) => {

    const dropdown_toggle_el = useRef<HTMLButtonElement>(null);
    const dropdown_content_el = useRef<HTMLDivElement>(null);

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el);
    
    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_el} className='dropdown__toggle'>
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown_content_el} className='dropdown__content'>
                {
                    props.contentData && props.renderItems ? props.contentData.map(
                        (item: Notification, index: number) => props.renderItems!(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className='dropdown__footer'>
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown

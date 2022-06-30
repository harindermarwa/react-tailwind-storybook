import React, { useState } from "react";
import PropTypes from 'prop-types';

const Sidebar = (props) => {
    const [navs, setNavs] = useState(props.navs);
    const [navClicked, setNavClicked] = useState(false);

    const changeNavStatus = (index, e) => {
        if(e && e.stopPropagation) e.stopPropagation();
        let newArr = [...navs]; // copying the old datas array
        newArr[index].active = !newArr[index].active;
        setNavs(newArr);
        if (navClicked) props.onSideMenuClick({...newArr[index]});
    }

    const onNavClicked = (index, e) => {
        if(e && e.stopPropagation) e.stopPropagation();
        props.onSideMenuClick({...navs[index]});
        setNavClicked(true);
    }

    const onSearch = (e) => {
        if (e && e.target && e.target.value) {
            let newArr = props.navs.filter((nav) => nav.title.match(new RegExp(e.target.value, 'gi')));
            setNavs(newArr);
        } else {
            setNavs(props.navs);
        }
    }

    return (
        <nav className="flex w-72 h-full bg-white-500 overflow-x-hidden overflow-y-auto">
            <div className="w-full flex mx-auto px-6 py-8">
                <ul className="space-y-2">
                    <li>
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={onSearch} />
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </li>
                    {navs.map((nav, index) => {
                        return (
                            <li key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"  onClick={(e) => onNavClicked(index, e)}>
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white " >
                                    <span className="ml-3">{nav.title}</span>
                                </a>
                                {nav.description}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill={`${nav.active ? 'yellow' : 'gray'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color={`${nav.active ? 'yellow' : 'gray'}`} onClick={(e) => changeNavStatus(index, e)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

Sidebar.propTypes = {
    navs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            columnName: PropTypes.string,
            description: PropTypes.string,
            returnType: PropTypes.string,
            active: PropTypes.bool
        })
    ),
    onSideMenuClick: PropTypes.func
}

export default Sidebar;
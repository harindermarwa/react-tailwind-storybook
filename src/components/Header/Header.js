import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => {
    const { navs } = props;
    return (
        <header className="flex justify-between items-center bg-white-300 p-4">
            <nav className="navbar navbar-expand-lg shadow py-2 bg-gray-100 relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <button
                            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                className="w-5"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                            {navs.map((nav, index) => {
                                return (<li className="nav-item hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
                                    {
                                        nav.image
                                        &&
                                        <img src={`data:image/svg+xml;utf8,${nav.image}`} />
                                    }
                                   
                                    <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">{nav.title}</a>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    navs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.string
        })
    )
}

export default Header;
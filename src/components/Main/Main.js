import React from "react";

const Main = (props) => {
    const { clickedNavItem = {} } = props;
    return (
        <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex w-full mx-auto px-6 py-8">
                {
                    clickedNavItem && clickedNavItem.title
                    &&
                    <>
                        <h1>
                            {clickedNavItem?.title}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill={`${clickedNavItem?.active ? 'yellow' : 'none'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} color={`${clickedNavItem?.active ? 'yellow' : 'gray'}`} >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </h1>
                        <h2>
                            {clickedNavItem?.description}
                        </h2>
                        <div>
                            <div>
                                Column Name <input type="text" value={clickedNavItem?.columnName} className="border-gray-300" readOnly></input>
                            </div>
                            <div> Value </div>
                            <div className="flex justify-center">
                                <div className="mb-3 xl:w-96">
                                    <select className="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        {clickedNavItem?.optionValues.map((opt, idx) => {
                                            return (
                                                <option key={idx}>{opt.title}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                            </div>
                            <div>
                                First Row Results
                                {clickedNavItem?.title}(VALUE) = {clickedNavItem?.returnValue}
                                Returned Type #{clickedNavItem?.returnType}
                            </div>
                        </div>
                    </>
                }
            </div>
        </main>
    )
}
export default Main;
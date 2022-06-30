import  { useEffect } from "react";

export const useOutsideClick = (ref,fxn) => {
    useEffect(() => {
        let handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                fxn(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
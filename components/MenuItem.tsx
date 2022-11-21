import DropDown from "./Dropdown";
import { useState, useRef, useEffect } from "react";

const MenuItem = ({items, key, depthLevel}:any)=>{

    const [dropdown, setDropdown] = useState(false)
    let menuRef = useRef<HTMLLIElement>(null);

    useEffect(()=>{
        const handler = (event:any)=>{
            if(dropdown && menuRef.current && !menuRef.current.contains(event.target)){
                setDropdown(false);
            }
        }

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return ()=>{
            document.removeEventListener("mousedonw", handler);
            document.removeEventListener("mousedown", handler);
        }

    }, [dropdown])

    return (
        <li className="menu-items" ref={menuRef} key={key}>
            {
                items.submenu ? (
                    <>
                        <button type="button" aria-expanded={dropdown? "true" : "false"}
                        onClick={()=>setDropdown((prev)=>!prev)}>
                            {items.title}{" "}
                            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                        </button>
                        <DropDown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                    </>
                ):(
                    <a href={items.url}>{items.title}</a>
                )
            }
        </li>
    )
}

export default MenuItem;
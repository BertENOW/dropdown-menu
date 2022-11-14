import DropDown from "./Dropdown";


const MenuItem = ({items}:any)=>{
    return (
        <li className="menu-items">
            {
                items.submenu ? (
                    <>
                        <button type="button" aria-haspopup="menu">
                            {items.title}
                        </button>
                        <DropDown submenus={items.submenu}/>
                    </>
                ):(
                    <a href={items.url}>{items.title}</a>
                )
            }
        </li>
    )
}

export default MenuItem;
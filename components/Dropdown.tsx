
import MenuItem from "./MenuItem";

const  DropDown = ({submenus, dropdown, depthLevel}:any)=>{
    depthLevel=depthLevel+1;
    const dropDownClass = depthLevel>1 ? "dropdown-submenu": "";
    return(
        <ul className={`dropdown ${dropDownClass} ${dropdown ? "show" : ""}`}>
            {
             submenus.map((submenu, index)=>(
                
                <MenuItem items={submenu} key={index} depthLevel={depthLevel}/>
            ))   
            }
            
        </ul>
    )
}

export default DropDown;


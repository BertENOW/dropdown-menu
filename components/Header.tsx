import Navbar from "./Navbar";


const Header = ()=>{
    return(
        <header>
            <div className="nav-area">
                <div>
                    <a href="/" className="logo">
                        Logo
                    </a>
                </div>
                <div>
                    <Navbar/>
                </div>

        </div>
        </header>
    )
}

export default Header;
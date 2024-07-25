import HeaderItem from "../HeaderItem/HeaderItem"
import SiteLogo from "../../assets/images/logo.svg"
import "./header.css"
const Header = () => {
    return (
        <header className='site-header'>
            <div className='container'>
                <div className='header'>
                    <a className='header_logo-link' href='/'>
                        <img src={SiteLogo} width={176} alt='random image' height={41}/>
                    </a>
                    <ul className='header_list'>
                        <HeaderItem title={"Home"}/>
                        <HeaderItem title={"About Me"}/>
                        <HeaderItem title={"Pages"}/>
                        <HeaderItem title={"Contact us"}/>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header
const HeaderItem = ({title}) => {
    return (
        <li className='header_item'>
            <a className='header_link' href='/'>{title}</a>
        </li>
    )
}
export default HeaderItem
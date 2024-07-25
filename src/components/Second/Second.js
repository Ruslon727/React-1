import Left from "../../assets/images/photo1.svg"
import Right from "../../assets/images/photo2.svg"
import "./second.css"
const Second = () => {
    return (
        <section className='second-section'>
            <div className='main_info'>
                <h1 className='home_page'>Professional Home Pages</h1>
                <h5 className='description_homepage'>Attractive and stylish home layouts bring your portfolio website to the next level.</h5>
            </div>
            <div className='photos'>
                <div className='left_photo'>
                    <img className='left_image' src={Left} alt='image'/>
                    <h3 className='ux_design'>Home UX Designer</h3>
                </div>
                <div className='right_image'>
                    <img className='right_image' src={Right} alt='image'/>
                    <h3 className='ui_design'>Home UI Designer</h3>
                </div>
            </div>
        </section>
    )
}
export default Second
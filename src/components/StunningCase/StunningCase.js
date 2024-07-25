import "./stunning_case.css"
import LeftImage from "../../assets/images/photo3.svg"
import RightImage from "../../assets/images/photo4.svg"
const StunningCase = () => {
    return (
        <section className='stunning_section'>
            <div className='stunning_container'>
                <div className='stunning_info'>
                    <h1 className="stunning_pages">Stunning Case Studies</h1>
                    <h6 className='stunning_description'>Create an optimal visual experience for your users with these inspiring layouts.</h6>
                </div>
                <div className='stunning_photos'>
                    <div className='chap_rasm'>
                        <img className='stunning_image' src={LeftImage} alt='image' />
                        <h3 className='left_text'>Case Study Single - Web</h3>
                    </div>
                    <div className='ong_rasm'>
                        <img className='stunning_image' src={RightImage} alt='image' />
                        <h3 className='right_text'>Case Study Single - Mobile</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StunningCase
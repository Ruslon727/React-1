import Button from "../Button/Button"
import Frame from "../../assets/images/Frame.svg"
import "./hero.css"
const Hero = () => {
    return (
        <section className='hero_section'>
            <h1 className='main_text'>Tell your creativity to the world with <span className='span_text'>UIUXer</span></h1>
            <p className='description'>UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
            <div className='btn-wrapper'>
                <Button title={"Buy Template"} bgBtn={false} />
                <Button title={"Explore Page"} bgBtn={true} />
            </div>
            <img className='scrool-image' src={Frame} alt='image'/>
        </section>
    )
}
export default Hero
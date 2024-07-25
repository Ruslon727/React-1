import "./button.css"
const Button = ({title, bgBtn}) => {
    return (
        <button className={bgBtn ? "bg-blue" : "bg-orange"}>{title}</button>
    )
} 
export default Button
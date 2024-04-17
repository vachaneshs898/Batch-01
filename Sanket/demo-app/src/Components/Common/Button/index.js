import './index.css';

export const Button = (props) =>{
    const {btnType = 'primary'} = props
    return (
        <button className={`btn ${btnType}`}>{props.children}</button>
    )
}
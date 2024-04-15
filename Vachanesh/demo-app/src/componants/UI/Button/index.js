import './index.css';

const Button = (props) => {
    const { btnType = 'default', icon = "", disabled = false } = props;
    return (
        <button type='button' className={`btn ${btnType}`} disabled={disabled}>
            {props.children}
            {icon !== "" ? <span>{icon}</span> : ''}
        </button>
    )
}

export default Button;
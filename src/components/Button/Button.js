import "./Button.scss";

function Button({ label, type = "button", handleClick }) {
    return (
        <button className="Button" onClick={handleClick} type={type}>
            {label}
        </button>
    );
}

export default Button;

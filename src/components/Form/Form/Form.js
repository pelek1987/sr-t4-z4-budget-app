import "./Form.scss";

function Form({ children, handleSubmit }) {
    return (
        <form className="Form" onSubmit={handleSubmit}>
            {children}
        </form>
    );
}

export default Form;

import './Input.scss';

function Input({
                   id,
                   label,
                   type,
                   name,
                   placeholder,
                   handleChange,
                   register,
                   errors,
                   required
               }) {

    return (
        <div className="Form__group">
            <label className="Form__label" htmlFor={id}>
                {label}:
            </label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                {...register(name, {required})}
            />
            {errors[name] && (
                <span>This field is required</span>
            )}
        </div>
    );
}

export default Input;

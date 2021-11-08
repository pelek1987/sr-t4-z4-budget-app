function Select({children, id, label, name, register, required, errors}) {
    return (
        <div className="Form__group">
            <label className="Form__label" htmlFor={id}>{label}:</label>
            <select defaultValue="" id={id} name={name} {...register(name, {
                required
            })}>
                <option value="" disabled>Wybierz...</option>
                {children}
            </select>
            {errors[name] && (
                <span style={{marginLeft: 15, color: 'red'}}>This field is required</span>
            )}
        </div>
    );
}

export default Select;

function Select({children, id, label, name, register, required, errors}) {
    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <select defaultValue="" id={id} name={name} {...register(name, {
                required
            })}>
                <option value="" disabled>Wybierz...</option>
                {children}
            </select>
            {errors[name] && (
                <span>This field is required</span>
            )}
        </div>
    );
}

export default Select;

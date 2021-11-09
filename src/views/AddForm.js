import {Redirect} from "react-router-dom";
import Form, {Input, Select} from "../components/Form";
import Button from "../components/Button";
import {useForm} from "react-hook-form";
import categories from "../data/categories.json";

function AddForm({onSubmit, isFormSent}) {
    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm();

    if(isFormSent) {
        return <Redirect to={'/'} />
    }

    return (
        <>
            <Form handleSubmit={handleSubmit(onSubmit)}>
                <div className="Form__radio-section">
                    <Input
                        id="expenditure"
                        label="Expenditure"
                        type="radio"
                        name="type"
                        value="expenditure"
                        register={register}
                        required
                        errors={errors}
                    />
                    <Input
                        id="income"
                        label="Income"
                        type="radio"
                        name="type"
                        value="income"
                        register={register}
                        required
                        errors={errors}
                    />
                </div>

                <Input
                    id="name"
                    type="text"
                    name="name"
                    label="Nazwa"
                    placeholder="nazwa..."
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="amount"
                    type="number"
                    name="amount"
                    label="Kwota"
                    placeholder="kwota..."
                    register={register}
                    errors={errors}
                    required
                />
                <Select id="category" name="category" label="Kategoria" register={register} errors={errors} required>
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </Select>
                <Button type="submit" label="Dodaj"/>
            </Form>
        </>
    );
}

export default AddForm;

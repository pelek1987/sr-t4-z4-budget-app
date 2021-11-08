import Form, {Input, Select} from "../components/Form";
import Button from "../components/Button";
import {useForm} from "react-hook-form";
import data from "../data/data.json";

function AddForm({onSubmit}) {
    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm();

    return (
        <>
            <Form handleSubmit={handleSubmit(onSubmit)}>
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
                    {data.categories.map(category => <option key={category} value={category}>{category}</option>)}
                </Select>
                <Button type="submit" label="Dodaj"/>
            </Form>
        </>
    );
}

export default AddForm;

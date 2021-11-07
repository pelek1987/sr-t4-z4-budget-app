import {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {v4 as uuid} from 'uuid'
import Button from './components/Button'
import Table, {Column, OperationRecord} from "./components/Table";
import Form, {Input, Select} from './components/Form'
import data from "./data/data.json";
import './App.scss';

function App() {
    const [income, setIncome] = useState([])
    const [expenditures, setExpenditures] = useState([])
    useEffect(() => {
        setExpenditures(data.expenditures);
        setIncome(data.income);
    }, []);
    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = (formData) => {
        const newData = {
            ...formData,
            id: uuid()
        }

        if (formData.type === 'expenditure') {
            const expendituresCopy = [...expenditures]
            expendituresCopy.push(newData);
            setExpenditures(expendituresCopy);
        }

        if (formData.type === 'income') {
            const incomeCopy = [...income]
            incomeCopy.push(newData);
            setIncome(incomeCopy);
        }
    }

    const handleDeleteRecord = (e, id, type) => {
        if(type === "income") {
            const newIncome = income.filter(income => income.id !== id);
            setIncome(newIncome);
        }
        if(type === "expenditure") {
            const newExpenditures = expenditures.filter(expenditure => expenditure.id !== id);
            setExpenditures(newExpenditures);
        }
    }

    const expendituresRecords = expenditures.map(({id, type, name, amount, category}) => (
            <OperationRecord
                key={`expenditure-${id}`}
                id={id}
                type={type}
                name={name}
                amount={amount}
                category={category}
                handleClick={handleDeleteRecord}
            />));

    const incomeRecords = income.map(({id, type, name, amount, category}) => (
        <OperationRecord
            key={`income-${id}`}
            id={id}
            type={type}
            name={name}
            amount={amount}
            category={category}
            handleClick={handleDeleteRecord}
        />));

    return (
        <div className="App">
            <h1>Expenses Calculator</h1>
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
            <Table>
                <Column>
                    {expenditures ? expendituresRecords : <div>Loading data...</div>}
                </Column>
                <Column>
                    {income ? incomeRecords : <div>Loading data...</div>}
                </Column>
            </Table>
        </div>
    );
}

export default App;

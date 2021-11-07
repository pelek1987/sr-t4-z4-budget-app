import {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import Button from './components/Button'
import Table, {Column, OperationRecord} from "./components/Table";
import Form, {Input} from './components/Form'
import data from "./data/data.json";
import './App.scss';

function App() {
    const [income, setIncome] = useState([])
    const [expenditures, setExpenditures] = useState([])
    useEffect(() => {
        setExpenditures(data.expenditures);
        setIncome(data.income);
    },[]);
    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = (data, event) => {}

    const expendituresRecords = expenditures.map(({name, amount, category}) => <OperationRecord name={name} amount={amount} category={category}/>)
    const incomeRecords = income.map(({name, amount, category}) => <OperationRecord name={name} amount={amount} category={category}/>)

    return (
        <div className="App">
            <h1>Expenses Calculator</h1>
            <Form handleSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="name..."
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="amount"
                    type="number"
                    name="amount"
                    label="Amount"
                    placeholder="amount..."
                    register={register}
                    errors={errors}
                    required
                />
                <Button type="submit" label="Dodaj" />
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

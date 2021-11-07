import {useState, useEffect} from 'react';
import Table, {Column, OperationRecord} from "./components/Table";
import data from "./data/data.json";
import './App.scss';

function App() {
    const [income, setIncome] = useState([])
    const [expenditures, setExpenditures] = useState([])

    useEffect(() => {
        setExpenditures(data.expenditures);
        setIncome(data.income);
    },[])
    const expendituresRecords = expenditures.map(({name, amount, category}) => <OperationRecord name={name} amount={amount} category={category}/>)
    const incomeRecords = income.map(({name, amount, category}) => <OperationRecord name={name} amount={amount} category={category}/>)

    return (
        <div className="App">
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

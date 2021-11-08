import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import MainTemplate from "./templates/MainTemplate";
import Home from "./views/Home";
import AddForm from "./views/AddForm";
import data from "./data/data.json";
import './App.scss';

function App() {
    const [income, setIncome] = useState([])
    const [expenditures, setExpenditures] = useState([])
    const [isFormSent, setIsFormSent] = useState(false);
    useEffect(() => {
        setExpenditures(data.expenditures);
        setIncome(data.income);
    }, []);

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

        setIsFormSent(true);
    }

    const handleDeleteRecord = (e, id, type) => {
        if (type === "income") {
            const newIncome = income.filter(income => income.id !== id);
            setIncome(newIncome);
        }
        if (type === "expenditure") {
            const newExpenditures = expenditures.filter(expenditure => expenditure.id !== id);
            setExpenditures(newExpenditures);
        }
    }

    return (
        <div className="App">
            <Router>
                    <MainTemplate>
                        <Switch>
                            <Route path="/add-form">
                                <AddForm onSubmit={onSubmit} isFormSent={isFormSent} />
                            </Route>
                            <Route path="/">
                                <Home expenditures={expenditures} income={income} handleDeleteRecord={handleDeleteRecord}/>
                            </Route>
                        </Switch>
                    </MainTemplate>
            </Router>
        </div>
    );
}

export default App;

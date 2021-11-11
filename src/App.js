import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import MainTemplate from './templates/MainTemplate';
import Home from './views/Home';
import AddForm from './views/AddForm';
import data from './data/data.json';
import './App.scss';

function App() {
  const [income, setIncome] = useState([]);
  const [expenditures, setExpenditures] = useState([]);
  const [isFormSent, setIsFormSent] = useState(false);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('data')) || data;
    setExpenditures(storageData.expenditures);
    setIncome(storageData.income);
  }, []);

  const onSubmit = (formData) => {
    const newData = {
      ...formData,
      id: uuid(),
    };

    const incomeCopy = [...income];
    const expendituresCopy = [...expenditures];

    if (formData.type === 'expenditure') {
      expendituresCopy.push(newData);
      setExpenditures(expendituresCopy);
    }

    if (formData.type === 'income') {
      incomeCopy.push(newData);
      setIncome(incomeCopy);
    }

    localStorage.setItem(
      'data',
      JSON.stringify({
        expenditures: expendituresCopy,
        income: incomeCopy,
      })
    );

    setIsFormSent(true);
  };

  const handleDeleteRecord = (e, id, type) => {
    if (type === 'income') {
      const newIncome = income.filter((income) => income.id !== id);
      setIncome(newIncome);
      localStorage.setItem(
        'data',
        JSON.stringify({
          expenditures,
          income: newIncome,
        })
      );
    }
    if (type === 'expenditure') {
      const newExpenditures = expenditures.filter(
        (expenditure) => expenditure.id !== id
      );
      setExpenditures(newExpenditures);
      localStorage.setItem(
        'data',
        JSON.stringify({
          expenditures: newExpenditures,
          income,
        })
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <MainTemplate>
          <Switch>
            <Route path="/add-form">
              <AddForm
                onSubmit={onSubmit}
                isFormSent={isFormSent}
                setIsFormSent={setIsFormSent}
              />
            </Route>
            <Route path="/">
              <Home
                expenditures={expenditures}
                income={income}
                handleDeleteRecord={handleDeleteRecord}
              />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </div>
  );
}

export default App;

import Table from "../../components/Table";
import Operation from "../../components/Operation";
import Balance from "../../components/Balance";
import './Home.scss';

function Home({expenditures, income, handleDeleteRecord}) {
    const expendituresRecords = expenditures.map(({id, type, name, amount, category}) => (
        <Operation
            key={`expenditure-${id}`}
            id={id}
            type={type}
            name={name}
            amount={amount}
            category={category}
            handleClick={handleDeleteRecord}
        />));

    const incomeRecords = income.map(({id, type, name, amount, category}) => (
        <Operation
            key={`income-${id}`}
            id={id}
            type={type}
            name={name}
            amount={amount}
            category={category}
            handleClick={handleDeleteRecord}
        />));

    const calcSum = (records) => {
        return records.reduce((total, current) => {
            total += Number(current.amount);
            return total
        }, 0)
    }

    const balance = calcSum(income) - calcSum(expenditures);

    return (
            <div className="Home">
                <div className="Home__wrapper">
                    <div className="container">
                        <h2 className="container__heading">Wydatki</h2>
                        <Table sum={calcSum(expenditures)}>
                            {expenditures ? expendituresRecords : <div>Loading data...</div>}
                        </Table>
                    </div>
                    <div className="container">
                        <h2 className="container__heading">Przychody</h2>
                        <Table sum={calcSum(income)}>
                            {income ? incomeRecords : <div>Loading data...</div>}
                        </Table>
                    </div>
                </div>
                <div className="Home__wrapper Home__wrapper--centered">
                    <Balance balance={balance} />
                </div>
            </div>
    );
}

export default Home;

import Table, {Column, OperationRecord} from "../components/Table";

function Home({expenditures, income, handleDeleteRecord}) {
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
        <>
            <Table>
                <Column>
                    {expenditures ? expendituresRecords : <div>Loading data...</div>}
                </Column>
                <Column>
                    {income ? incomeRecords : <div>Loading data...</div>}
                </Column>
            </Table>
        </>
    );
}

export default Home;

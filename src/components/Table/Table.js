import './Table.scss'

function Table({children, sum}) {
    return (
        <table className="Table">
            <thead>
            <tr>
                <th>Nazwa</th>
                <th>Kwota</th>
                <th>Kategoria</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
            <tfoot>
            <tr>
                <td>Suma:</td>
                <td>{sum} PLN</td>
            </tr>
            </tfoot>
        </table>
    );
}

export default Table;

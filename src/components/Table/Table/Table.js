import './Table.scss'

function Table({children}) {
    return (
        <table className="Table">
            <thead>
            <tr>
                <th>
                    Wydatki
                </th>
                <th>
                    Przychody
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                {children}
            </tr>
            </tbody>
        </table>
    );
}

export default Table;

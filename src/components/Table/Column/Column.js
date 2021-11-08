import './Columns.scss';

function Column({children}) {
    return (
        <td className="Column">
            <table>
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
            </table>
        </td>
    );
}

export default Column;

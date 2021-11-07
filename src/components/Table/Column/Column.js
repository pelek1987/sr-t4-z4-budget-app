function Column({children}) {
    return (
        <td>
            <tr>
                <th>Nazwa</th>
                <th>Kwota</th>
                <th>Kategoria</th>
            </tr>
            {children}
        </td>
    );
}

export default Column;

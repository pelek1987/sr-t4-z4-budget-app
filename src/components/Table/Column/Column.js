function Column({children}) {
    return (
        <td>
            <table>
                <thead>
                <tr>
                    <td>Nazwa</td>
                    <td>Kwota</td>
                    <td>Kategoria</td>
                    <td>Akcje</td>
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

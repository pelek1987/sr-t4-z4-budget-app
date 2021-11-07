function Table({children}) {
    return (
        <table>
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

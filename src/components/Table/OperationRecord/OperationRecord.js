function OperationRecord({name, amount, category}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
        </tr>
    );
}

export default OperationRecord;

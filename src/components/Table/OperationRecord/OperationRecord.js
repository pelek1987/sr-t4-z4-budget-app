import Button from "../../Button";

function OperationRecord({id, name, amount, category, handleClick, type}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{category}</td>
            <td><Button label="Usuń" handleClick={(e) => handleClick(e, id, type)}/></td>
        </tr>
    );
}

export default OperationRecord;

import classNames from "classnames";
import './Balance.scss'

function Balance({balance}) {

    const checkIsPositive = (balance) => balance > 0;
    const checkIsNegative = (balance) => balance < 0;

    const classes = classNames({
        'Balance--positive': checkIsPositive(balance),
        'Balance--negative': checkIsNegative(balance)
    })

    return (
            <p className={`Balance ${classes}`}>
               SALDO: {balance} PLN
            </p>
    );
}

export default Balance;

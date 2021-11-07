import {NavLink} from "react-router-dom";
import './Link.scss';

function Link({label, to}) {
    return (
        <li className="Menu__list-item"><NavLink className={`Menu__link`} to={to}>{label}</NavLink></li>
    );
}

export default Link;

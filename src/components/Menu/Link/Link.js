import { NavLink } from 'react-router-dom';
import './Link.scss';

function Link({ label, to }) {
  return (
    <li className="Menu__list-item">
      <NavLink
        activeClassName="Menu__link--active"
        className={`Menu__link`}
        exact
        to={to}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default Link;

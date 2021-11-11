import './Menu.scss';

function Menu({ children }) {
  return (
    <nav className="Menu">
      <ul className="Menu__list">{children}</ul>
    </nav>
  );
}

export default Menu;

import Menu, {Link} from "../../components/Menu";

function MainTemplate({children}) {
    return (
        <div>
            <h1>Expenses Calculator</h1>
            <Menu>
                <Link label="Home" to="/"/>
                <Link label="Add Form" to="/add-form"/>
            </Menu>
            <div>
                {children}
            </div>
        </div>
    );
}

export default MainTemplate;

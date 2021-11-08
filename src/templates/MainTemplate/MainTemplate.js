import Menu, {Link} from "../../components/Menu";
import Content from "../../components/Content/Contents";

function MainTemplate({children}) {
    return (
        <div>
            <h1>Expenses Calculator</h1>
            <Menu>
                <Link label="Home" to="/"/>
                <Link label="Add Form" to="/add-form"/>
            </Menu>
            <Content>
                {children}
            </Content>
        </div>
    );
}

export default MainTemplate;

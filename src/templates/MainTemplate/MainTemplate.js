import Menu, {Link} from "../../components/Menu";
import Content from "../../components/Content/Contents";
import './MainTemplate.scss';

function MainTemplate({children}) {
    return (
        <div className="MainTemplate">
            <h1 className="MainTemplate__heading">Budget App</h1>
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

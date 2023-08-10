import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';
import App from '../../App';
import Subway from '../../pages/Subway';

const Menu = ({ open }: { open: boolean }) => {
    return (
        <StyledMenu open={open}>
            {/* <Link to="/"> */}
            {/* <App /> */}
            {/* </Link> */}
            {/* <Link to="/subway"> */}
            {/* <Subway /> */}
            {/* </Link> */}
            <a href="/subway" onClick={(e) => e.preventDefault()}>
                <span role="img" arial-label="price">💸</span>
                Subway
            </a>
        </StyledMenu>
    )
}

export default Menu;
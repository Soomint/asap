import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }: { open: boolean, setOpen: Function }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}

export default Burger;
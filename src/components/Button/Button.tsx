import { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
}

export default Button;
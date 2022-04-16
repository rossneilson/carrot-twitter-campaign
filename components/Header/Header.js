import styled from "styled-components"
import Navbar from "./../Navbar/Navbar"

const Header = (props) => {
    return (
        <StyledHeader>
            <Navbar></Navbar>
            {props.children}
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
`;

export default Header;
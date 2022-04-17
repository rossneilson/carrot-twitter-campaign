import styled, { ThemeProvider } from "styled-components";

const Box = (props) => {
  const {
    size,
    padding,
    margin,
    flex,
    flexDirection,
    children,
    className,
    dataAos,
    id,
  } = props;
  return (
    <StyledBox
      className={`${size} ${className}`}
      padding={padding}
      margin={margin}
      flex={flex}
      flexDirection={flexDirection}
      dataAos={dataAos}
      id={id}
    >
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {
  size: "full",
  className: "",
  padding: "0px",
  margin: "0px auto",
  flex: true,
  flexDirection: "row",
};

const StyledBox = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  &.full {
    width: 100%;
    margin: 0 auto;
  }
  &.large {
    width: 1136px;
  }
  &.medium {
    width: 712px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.l}) {
    &.large,
    &.medium {
      max-width: 600px !important;
      width: 100% !important;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    &.large,
    &.medium {
      max-width: calc(100% - (48px * 2)) !important;
      width: 100% !important;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    &.large,
    &.medium {
      max-width: calc(100% - 48px) !important;
      width: 100% !important;
    }
  }
`;

export default Box;

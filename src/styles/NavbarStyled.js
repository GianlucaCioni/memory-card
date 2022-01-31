import styled from 'styled-components';

export const NavBarStyled = styled.nav`
  align-items: center;
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.fontColor};
  display: grid;
  grid-template-areas: 'logo scoreboard' 'description scoreboard';
  padding-bottom: 1.5em;
  position: sticky;
  top: 0.5em;
  @media (max-width: 815px) {
    grid-template-areas: 'logo' 'description' ' scoreboard';
    top: -8.5em;
  }
`;

export const Logo = styled.img`
  grid-area: logo;
  justify-self: center;
  margin: 0.2em 0em;
  width: 35em;
  @media (max-width: 597px) {
    width: 29em;
  }
  @media (max-width: 472px) {
    width: 23em;
  }
`;

export const Description = styled.span`
  grid-area: description;
  justify-self: center;
  @media (max-width: 545px) {
    text-align: center;
  }
`;

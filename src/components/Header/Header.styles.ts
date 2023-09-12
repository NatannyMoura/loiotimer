import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['green-300']};
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['gray-100']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:focus {
      box-shadow: none;
    }

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
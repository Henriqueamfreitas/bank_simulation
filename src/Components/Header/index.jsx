import logo from '../../Assets/Nu Kenzie.svg'
import { StyledHeader } from './header'

export function Header(){
    return(
        <StyledHeader>
            <img src={logo} alt='Logo da Nu kenzie - Nu em rosa e kenzie em cinza escuro' />
        </StyledHeader>
    )
}
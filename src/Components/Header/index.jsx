import logo from '../../Assets/Nu Kenzie.svg'
import { StyledHeader } from './header'
import { StyledSpan, StyledSpan2 } from '../../styles/text'

export function Header(){
    return(
        <StyledHeader>
            <StyledSpan>Bank</StyledSpan><StyledSpan2>Simulation</StyledSpan2>
        </StyledHeader>
    )
}
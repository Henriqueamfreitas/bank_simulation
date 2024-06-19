import styled from 'styled-components'

export const StyledValueSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 1.25rem;
    margin-right: .9375rem;
    margin-bottom: 1.1875rem;
    padding: 1.25rem 1.1875rem 1.125rem 1.5rem;
    border: .0625rem solid #E9ECEF;

    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: .375rem;
    }

    @media (min-width: 43.75rem) {
        margin-left: 0rem;
        margin-right: 0rem;
    }
`

export const StyledP = styled.p`
    color: #FD377E;
    font-size: 1rem;
    font-weight: 700;
    font-family: var(--font-primary);
`

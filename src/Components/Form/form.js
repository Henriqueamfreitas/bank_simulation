import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 1.3125rem;
    margin-right: .875rem;
    margin-bottom: 1.1875rem;
    border: .0625rem solid #868E96;
    padding: 1.875rem 1.2188rem 2.625rem 1.3438rem;

    p{
        margin-bottom: 1.3625rem;
        font-size: .75rem;
        font-weight: 400;
        font-family: Inter;
    }

    select{
        border: .125rem solid var(--color-grey-1);
        background-color: var(--color-grey-1);
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-bottom: 1.625rem;
        font-size: .75rem;
        font-weight: 400;
        font-family: Inter;
    }

    button{
        background-color: #FD377E;
        color: #ffffff;
        border: none;
        font-size: 1rem;
        font-weight: 500;
        font-family: var(--font-secondary);
        border-radius: .5rem;
        height: 3rem;
    }
`
export const StyledLabel = styled.label`
    margin-bottom: .75rem;
    font-size: .75rem;
    font-weight: 400;
    font-family: Inter;
`

export const StyledInput = styled.input`
    height: 3rem;
    border: .125rem solid var(--color-grey-1);
    border-radius: .5rem;

    margin-bottom: .3125rem;

    background-color: var(--color-grey-1);
    color: var(--color-grey-3);

    font-size: 1rem;
    font-weight: 400;
    font-family: Inter;
    padding-left: 1rem;
    padding-right: 1rem;
`


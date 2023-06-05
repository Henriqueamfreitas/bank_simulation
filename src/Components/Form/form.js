import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 1.3125rem;
    margin-right: .875rem;
    margin-bottom: 1.1875rem;
    border: 1px solid #868E96;
    padding: 1.875rem 1.2188rem 2.625rem 1.3438rem;

    p{
        margin-bottom: .5625rem;
    }

    select{
        border: 2px solid var(--color-grey-1);
        background-color: var(--color-grey-1);
        height: 48px;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-bottom: 1.625rem;
    }

    button{
        background-color: #FD377E;
        color: #ffffff;
        border: none;
        border-radius: .5rem;
        height: 48px;
    }
`
export const StyledLabel = styled.label`
    margin-bottom: .75rem;
`

export const StyledInput = styled.input`
    height: 3rem;
    border: 2px solid var(--color-grey-1);
    border-radius: 8px;

    margin-bottom: .3125rem;

    background-color: var(--color-grey-1);
    color: var(--color-grey-3);

    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
`


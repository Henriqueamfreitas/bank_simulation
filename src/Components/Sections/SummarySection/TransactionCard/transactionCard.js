import styled from 'styled-components'

export const StyledTransactionCard = styled.li`
    background-color: #F8F9FA;
    border-left: solid .25rem;
    padding: .5rem .875rem 1.1875rem .875rem;
    margin-top: 1.0625rem;
    border-radius: .5rem;
    display: flex;
    justify-content: space-between;
    p{
        font-size: .75rem;
        font-weight: 400;
        font-family: var(--font-primary);
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    div:nth-child(1){
        justify-content: flex-end;
        align-items: flex-start;
    }

    border-color: ${(props) => (props.transactionType === 'Entrada' ? '#03B898' : '#E9ECEF')};

    button{
        margin-top: .8125rem;
        background-color: #E9ECEF;
        border: none;
        border-radius: .125rem;
        font-size: .625rem;
        font-weight: 400;
        font-family: var(--font-primary);
    }
`
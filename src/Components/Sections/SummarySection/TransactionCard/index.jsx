import { StyledTransactionCard } from "./transactionCard"

export function TransactionCard( {transaction, removeTransactionFromList} ){
    return(
        <StyledTransactionCard>
            <h3>{transaction.description}</h3>
            <p>{transaction.type}</p>
            <p>{transaction.value}</p>
            <button onClick={() => removeTransactionFromList(transaction.id)}>Excluir</button>
        </StyledTransactionCard>
    )
}
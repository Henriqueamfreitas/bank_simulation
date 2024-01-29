import { StyledTransactionCard } from './transactionCard'
import { StyledTitle2 } from '../../../../Styles/text';

export function TransactionCard( {transaction, removeTransactionFromList} ){
    const value = parseFloat(transaction.value)
    const formatedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
        <StyledTransactionCard transactionType={transaction.type}>
            <div>
                <StyledTitle2>{transaction.description}</StyledTitle2>
                <p>{transaction.type}</p>
            </div>
            <div>
                <p>{formatedValue}</p>
                <button onClick={() => removeTransactionFromList(transaction.id)}>Excluir</button>
            </div>
        </StyledTransactionCard>
    )
}
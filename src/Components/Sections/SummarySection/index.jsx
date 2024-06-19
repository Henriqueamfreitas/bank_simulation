import { TransactionCard } from './TransactionCard'
import { v4 as uuidv4 } from 'uuid';
import { StyledSummarySection } from './sumarySection';
import { StyledParagraph1, StyledTitle1 } from '../../../../src/styles/text.js';


export function SummarySection( {transactionList, setTransactionList} ){
    function removeTransactionFromList(transactionId){
        if(confirm('Você deseja mesmo excluir essa transação?')){
        setTransactionList((transactionList) => transactionList.filter(transaction => transaction.id !== transactionId))
        }
    }
    
    return(
        <StyledSummarySection>
            <StyledTitle1>Resumo Financeiro</StyledTitle1>
            {transactionList.length > 0? (
            <ul>
                {transactionList.map((transaction) => <TransactionCard key={transaction.id} transaction={transaction} 
                removeTransactionFromList={removeTransactionFromList}/>)}
            </ul>
            ) : <StyledParagraph1>Você ainda não possui nenhum lançamento</StyledParagraph1> }
        </StyledSummarySection>
    )
}


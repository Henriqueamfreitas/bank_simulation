import { TransactionCard } from "./TransactionCard"
import { v4 as uuidv4 } from "uuid";

export function SummarySection( {transactionList, setTransactionList} ){
    function removeTransactionFromList(transactionId){
        if(confirm("Você deseja mesmo excluir essa transação?")){
        setTransactionList((transactionList) => transactionList.filter(transaction => transaction.id !== transactionId))
        }
    }
    
    return(
        <section>
            <h2>Resumo Financeiro</h2>
            <ul>
                {transactionList.map((transaction) => <TransactionCard key={transaction.id} transaction={transaction} 
                removeTransactionFromList={removeTransactionFromList}/>)}
            </ul>
        </section>
    )
}
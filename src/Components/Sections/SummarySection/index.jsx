import { TransactionCard } from "./TransactionCard"
import { v4 as uuidv4 } from "uuid";

export function SummarySection( {transactionList} ){
    return(
        <section>
            <h2>Resumo Financeiro</h2>
            <ul>
                {transactionList.map((transaction) => <TransactionCard key={transaction.id} transaction={transaction}/>)}
            </ul>
        </section>
    )
}
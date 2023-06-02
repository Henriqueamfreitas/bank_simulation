export function TransactionCard( {transaction} ){
    return(
        <li>
            <h3>{transaction.description}</h3>
            <p>{transaction.type}</p>
            <p>{transaction.value}</p>
            <button>Excluir</button>
        </li>
    )
}
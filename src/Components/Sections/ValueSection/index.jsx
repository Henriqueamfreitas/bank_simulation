export function ValueSection( {transactionList} ){
    const totalBalance = transactionList.reduce((accValue, transaction) => {
        console.log(typeof(transaction.value))
        return accValue + parseInt(transaction.value);
    }, 0);

    return(
        <section>
            <div>
                <p>Valor total:</p>
                <p>{totalBalance}</p>
            </div>
            <p>O valor se refere ao saldo</p>  
        </section>
    )
}
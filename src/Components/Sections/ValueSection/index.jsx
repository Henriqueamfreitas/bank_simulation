import { StyledValueSection } from "./valueSection";
import { StyledP } from "./valueSection";

export function ValueSection( {transactionList} ){
    const totalBalance = transactionList.reduce((accValue, transaction) => {
        console.log(typeof(transaction.value))
        return accValue + parseInt(transaction.value);
    }, 0);

    return(
        <StyledValueSection>
            <div>
                <p>Valor total:</p>
                <StyledP>{totalBalance}</StyledP>
            </div>
            <p>O valor se refere ao saldo</p>  
        </StyledValueSection>
    )
}
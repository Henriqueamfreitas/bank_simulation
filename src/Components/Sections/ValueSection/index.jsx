import { StyledValueSection } from './valueSection';
import { StyledP } from './valueSection';
import { StyledParagraph2, StyledParagraph3 } from '../../../../src/styles/text.js';

export function ValueSection( {transactionList} ){
    let entryValue = 0
    let outflowValue = 0
    if(transactionList.length > 0){
        transactionList.forEach(element => {
            if(element.type === 'Entrada'){
                entryValue+=parseInt(element.value)
            } else{
                outflowValue+=parseInt(element.value)
            }
        });
    }

    const totalBalance = entryValue-outflowValue
    const formatedTotalBalance = totalBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
        <StyledValueSection>
            <div>
                <StyledParagraph2>Valor total:</StyledParagraph2>
                <StyledP>{formatedTotalBalance}</StyledP>
            </div>
            <StyledParagraph3>O valor se refere ao saldo</StyledParagraph3>  
        </StyledValueSection>
    )
}
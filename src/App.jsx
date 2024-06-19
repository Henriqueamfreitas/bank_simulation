import { useState } from 'react'
import { Header } from '../src/Components/Header/index.jsx'
import { Form } from '../src/Components/Form/index.jsx'
import { ValueSection } from '../src/Components/Sections/ValueSection/index.jsx'
import { SummarySection } from '../src/Components/Sections/SummarySection/index.jsx'
import { GlobalReset } from './styles/reset.js'
import { StyledMain } from './styles/main.js'
import { GlobalStyles } from './styles/global.js'

function App() {
  const [transactionList, setTransactionList] = useState([])

  return (
    <>
    <GlobalReset></GlobalReset>
    <GlobalStyles></GlobalStyles>
    <Header></Header>
    <StyledMain>
      <div>
        <Form setTransactionList={setTransactionList}></Form>
        <ValueSection transactionList={transactionList}></ValueSection>
      </div>
      <SummarySection transactionList={transactionList} setTransactionList={setTransactionList}></SummarySection>
    </StyledMain>
    </>
  )
}

export default App

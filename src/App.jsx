import { useState } from "react"
import { Header } from "../src/Components/Header/index.jsx"
import { Form } from "../src/Components/Form/index.jsx"
import { ValueSection } from "../src/Components/Sections/ValueSection/index.jsx"
import { SummarySection } from "../src/Components/Sections/SummarySection/index.jsx"
import { GlobalReset } from "./styles/reset.js"

function App() {
  const [transactionList, setTransactionList] = useState([])
  console.log(transactionList)

  return (
    <>
    <GlobalReset></GlobalReset>
    <Header></Header>
    <main>
      <Form setTransactionList={setTransactionList}></Form>
      <ValueSection transactionList={transactionList}></ValueSection>
      <SummarySection transactionList={transactionList} setTransactionList={setTransactionList}></SummarySection>
    </main>
    </>
  )
}

export default App

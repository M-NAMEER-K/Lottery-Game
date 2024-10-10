import { useState } from 'react'
import {sum} from "./helper.js"
import './App.css'
import Ludo from "./Ludo.jsx"
import Lottery from "./Lottery.jsx"
import TicketNum from "./TicketNum"
import Ticket from "./Ticket.jsx"
import Form from "./Form.jsx"
import CommentsForm from "./CommentsForm"

function App() {
  let winCondition=(ticket)=>{
    return ticket.every((num)=> num===ticket[0]);
  }

  return (
    <>
    <CommentsForm/>
     <Form/>
   <Lottery n={3} winningCondition={winCondition} />
  
    </>
  );
}

export default App

import {useState} from "react";
import "./Lottery.css";
import {sum,genTicket} from "./helper";
import Ticket from "./Ticket"

export default function Lottery({n,winningsum}){
  let[ticket,setTicket]=useState(genTicket(n));
  let iswinning=sum(ticket)===winningsum;
  let buyTicket=()=>{
    setTicket(genTicket(n));
}
           return(
            <div>
                <h1>Lottery Game!</h1>
                <div className="ticket">
                  <Ticket ticket={ticket}/>
                </div>
                <button onClick={buyTicket}>buy new ticket</button>
                <h3>{iswinning && "congratulations, you won"}</h3>
            </div>
           );
}
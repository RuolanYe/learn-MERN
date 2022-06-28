import React,{useRef} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import {useSelector, useDispatch} from 'react-redux'

function Calendar() {

  const {goals} = useSelector((state)=>state.goals)

  let goalsMapped = goals.map(goal => ({title:goal.text, date:goal.updatedAt}))
  let eventJson = JSON.stringify(goalsMapped)

  console.log(eventJson)

  return (
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={
          goalsMapped
        }
      />
  )
}


export default Calendar
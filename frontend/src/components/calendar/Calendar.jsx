import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useSelector, useDispatch } from 'react-redux'
import interactionPlugin from '@fullcalendar/interaction'
import PopUp from './PopUp.jsx'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

function Calendar() {

  const [show, setShow] = useState(false)
  const [eventContent, setEventContent] = useState()
  // var show = false

  const { goals } = useSelector((state) => state.goals)

  let eventsMapped = goals.map(goal => ({
    title: goal.text,
    date: goal.eventDate ? (goal.eventDate) : goal.createdAt,
    id: goal._id,
    allDay: true
  }))

  // const eventsMapped=[{title:'test event', start: new Date(), allDay: true}]

  const handleEventClick = (eventClickInfo) => {
    // console.log(eventClickInfo.event);
    setShow(true);
    setEventContent(eventClickInfo.event)
  }



  return <>
    {show && <PopUp handleClose={()=>setShow(false)} clickedEvent={eventContent} />}
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={eventsMapped.length ? (eventsMapped) : []}
      eventClick={handleEventClick}

    />
  </>
}


export default Calendar
import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useSelector, useDispatch } from 'react-redux'
import interactionPlugin from '@fullcalendar/interaction'
import PopUp from './PopUp.jsx'
import {GrGallery} from 'react-icons/gr'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import imageIconURI from '../../images/Images'


function Calendar() {

  const [show, setShow] = useState(false)
  const [eventContent, setEventContent] = useState()
  // var show = false

  const { goals } = useSelector((state) => state.goals)

  let eventsMapped = goals.map(goal => ({
    title: goal.text,
    date: goal.eventDate ? (goal.eventDate) : goal.createdAt,
    id: goal._id,
    imageurl: goal.articleImage,
    allDay: true,
  }))
  // console.log(eventsMapped)
  // const eventsMapped=[{title:'test event', start: new Date(), allDay: true}]

  const handleEventClick = (eventClickInfo) => {
    // console.log(eventClickInfo.event);
    setShow(true);
    setEventContent(eventClickInfo.event)
  }

  const eventRender = (event, eventElement)=>{
    // console.log(event.event._def.extendedProps.imageurl)
    if (event.event._def.extendedProps.imageurl) {
      eventElement.find('.fc-time').append(GrGallery);
  }}

  function renderEventContent(eventInfo) {
    return (
      <div>
      <p>{eventInfo.event.title}</p>
      <img className="eventimage" src={eventInfo.event._def.extendedProps.imageurl ?  'imageIconURI' : ''} />
      </div>
    )
  }



  return <>
    {show && <PopUp handleClose={()=>setShow(false)} clickedEvent={eventContent} />}
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={eventsMapped.length ? (eventsMapped) : []}
      eventClick={handleEventClick}
      eventContent={renderEventContent}

    />
  </>
}


export default Calendar
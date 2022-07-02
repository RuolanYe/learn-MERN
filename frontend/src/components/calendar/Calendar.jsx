import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import PopUp from './PopUp.jsx'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import imageIconURI from '../../images/Images'
import imageIcon from '../../images/imageIcon.png'
import wateringIcon from '../../images/wateringIcon.jpeg'
import fertilizingIcon from '../../images/fertilizer_17.png'
import blankIcon from '../../images/BLANK_ICON.png'

import './styles.css'


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
    watering:goal.watering,
    fertilizing:goal.fertilizing,
    allDay: true,
  }))
  // console.log(eventsMapped)
  // const eventsMapped=[{title:'test event', start: new Date(), allDay: true}]


  const handleEventClick = (eventClickInfo) => {
    // console.log(eventClickInfo.event);
    setShow(true);
    setEventContent(eventClickInfo.event)
  }

  // const eventRender = (event, eventElement)=>{
  //   // console.log(event.event._def.extendedProps.imageurl)
  //   if (event.event._def.extendedProps.imageurl) {
  //     eventElement.find('.fc-time').append(GrGallery);
  // }}

  function renderEventContent(eventInfo) {
    // console.log(eventInfo)
    return (
      <div>
      <p>{eventInfo.event.title}</p>
      <img className="eventimage" src={eventInfo.event._def.extendedProps.imageurl ? imageIcon: blankIcon} />
      <img className="eventimage" src={eventInfo.event._def.extendedProps.watering ? wateringIcon: blankIcon} />
      <img className="eventimage" src={eventInfo.event._def.extendedProps.fertilizing ? fertilizingIcon: blankIcon} />
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
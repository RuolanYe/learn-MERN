import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import PopUp from './PopUp.jsx'
import imageIcon from '../../images/imageIcon.png'
import wateringIcon from '../../images/wateringIcon.png'
import fertilizingIcon from '../../images/fertilizer_17.png'
import blankIcon from '../../images/BLANK_ICON.png'
import './styles.css'


function Calendar() {

  const [show, setShow] = useState(false)
  const [eventContent, setEventContent] = useState()


  const { goals } = useSelector((state) => state.goals)

  let eventsMapped = goals.map(goal => ({
    title: goal.text,
    date: goal.eventDate ? (goal.eventDate) : goal.createdAt,
    id: goal._id,
    imageurl: goal.articleImage,
    watering: goal.watering,
    fertilizing: goal.fertilizing,
    allDay: true,
  }))



  const handleEventClick = (eventClickInfo) => {
    setShow(true);
    setEventContent(eventClickInfo.event)
  }



  function renderEventContent(eventInfo) {

    return (
      <div>
        <p>{eventInfo.event.title}</p>
        <img className="eventimage" alt="imageIcon" src={eventInfo.event._def.extendedProps.imageurl ? imageIcon : blankIcon} />
        <img className="eventimage" alt="wateringIcon" src={eventInfo.event._def.extendedProps.watering ? wateringIcon : blankIcon} />
        <img className="eventimage" alt="fertilizingIcon" src={eventInfo.event._def.extendedProps.fertilizing ? fertilizingIcon : blankIcon} />
      </div>
    )
  }


  return <>
    {show && <PopUp handleClose={() => setShow(false)} clickedEvent={eventContent} />}
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
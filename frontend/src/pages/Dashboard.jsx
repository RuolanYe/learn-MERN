import React from 'react'
import GoalForm from '../components/GoalForm'
import Calendar from '../components/calendar/Calendar'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getGoals} from '../features/goals/goalSlice'
import imageIcon from '../images/imageIcon.png'
import wateringIcon from '../images/wateringIcon.png'
import fertilizingIcon from '../images/fertilizer_17.png'



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const {isLoading, isError, message} = useSelector((state)=>state.goals)
 

  useEffect(() => {
    if(isError){
      console.log(message)
    }

    if (!user){
      navigate('/login')
    }

    dispatch(getGoals())

  }, [user, navigate, isError,message, dispatch])

  if(isLoading){
    return <Spinner />
  }
  
  return (<>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Notes Form
      </p>
    </section>
    <GoalForm/>

    <section className="heading">
      <p>
        <br/>
        Calendar
      </p>
    </section>
    <p><img src={imageIcon} alt="imageIcon" height="30"/> &nbsp; Photo &nbsp; &nbsp; &nbsp; 
    <img src={wateringIcon} alt="wateringIcon" height="30"/> &nbsp; Watering &nbsp; &nbsp; &nbsp; 
    <img src={fertilizingIcon} alt="fertilizingIcon" height="30"/> &nbsp; Fertilizing &nbsp; &nbsp; &nbsp; </p>
    <Calendar/>
    </>
  )
}

export default Dashboard
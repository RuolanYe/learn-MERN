import React from 'react'
import GoalForm from '../components/GoalForm'
import Calendar from '../components/calendar/Calendar'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state)=>state.goals)

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
    <div>Dashboard</div>
    <GoalForm/>
    <Calendar/>
    </>
  )
}

export default Dashboard
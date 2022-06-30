import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteGoal} from'../features/goals/goalSlice'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

// function GoalItem({goal}) {
const GoalItem = ({goal}) =>{
  const dispatch = useDispatch()
  console.log(goal)
  return (
    <div className='goal'>
        <div>
            {new Date(goal.eventDate?goal.eventDate:goal.createdAt).toLocaleString
            ('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <Card>
          <CardMedia component="img" image={goal.articleImage}/>
        </Card>
        
        <button onClick={() => dispatch (deleteGoal(goal._id))} className="close">X</button>
        
    </div>
  )
}

export default GoalItem
import React, {FC} from 'react'
import {Dialog, DialogTitle, TextField, Button, DialogContent, DialogActions,Typography,CardMedia} from '@material-ui/core'
import {useDispatch, useEffect} from 'react-redux'
import {deleteGoal} from'../../features/goals/goalSlice'


// interface Props{
//     handleClose:()=>any;
//     clickedEvent
// }

function PopUp (Props) {
  const dispatch = useDispatch()
  // console.log(Props.clickedEvent)
  // console.log(Props.clickedEvent.id)

  return <Dialog open={true} onClose={Props.handleClose}>
    <DialogTitle>{Props.clickedEvent.title}</DialogTitle>
    <DialogContent>{Props.clickedEvent.start.toLocaleString('en-US')}</DialogContent>
    <Button onClick={() => dispatch (deleteGoal(Props.clickedEvent.id)) }>Delete</Button>
    <Button onClick={Props.handleClose}>Close</Button>
    {/* <CardMedia component="img" image={Props.clickedEvent.articleImage}/> */}
  </Dialog> 
}

export default PopUp;
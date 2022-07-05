import React, {FC} from 'react'
import {  } from '@material-ui/core/Dialog';
import {Dialog, DialogTitle, TextField, Button, DialogContent, DialogContentText,Typography,Card,CardMedia} from '@material-ui/core'
import {useDispatch, useEffect} from 'react-redux'
import {deleteGoal} from'../../features/goals/goalSlice'
import './styles.css'


// interface Props{
//     handleClose:()=>any;
//     clickedEvent
// }
// const [scroll, setScroll] = React.useState <DialogProps['scroll']> ('body');
// setScroll(DialogProps['scroll']);

function PopUp (Props) {
  const dispatch = useDispatch()
  // console.log(Props.clickedEvent.extendedProps.imageurl)
  // console.log(Props.clickedEvent.id)

  return <Dialog open={true} onClose={Props.handleClose} scroll={'body'}>
    <DialogTitle>{Props.clickedEvent.title}</DialogTitle>
    <DialogContent>{Props.clickedEvent.start.toLocaleString('en-US')}</DialogContent>
    <CardMedia className="popUpImage" component="img" image={Props.clickedEvent.extendedProps.imageurl}/>
    <Button onClick={() => dispatch (deleteGoal(Props.clickedEvent.id)) }>Delete</Button>
    <Button onClick={Props.handleClose}>Close</Button>
    {/* <CardMedia component="img" image={Props.clickedEvent.articleImage}/> */}
  </Dialog> 
}

export default PopUp;
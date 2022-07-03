import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
import FileBase from 'react-file-base64';
import { Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'



function GoalForm() {
    const [postData, setPostData] = useState({
        text: '',
        articleImage: '',
        eventDate: new Date(),
        watering: false,
        fertilizing: false,
    });

    const dispatch = useDispatch()


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createGoal(postData));
    }


  return (
    <section className='from'>
        <form onSubmit = {onSubmit} encType="multipart/form-data">
            <div className='form-group'>
                <label htmlFor = 'text'>Notes</label>
                <input
                type='text'
                name='text'
                id='text'
                value={postData.text}
                onChange={(e) => setPostData({...postData,text: e.target.value})}
                />
            </div>
            <div className='form-group'>
                <FormControlLabel style={{display: 'inline'}} control={
                    <Checkbox  
                        checked={postData.watering}
                        onChange={(e) => setPostData({...postData,watering: e.target.checked})}
                    />}
                    label="Watering"
                />
                <FormControlLabel style={{display: 'inline'}} control={
                    <Checkbox  
                        checked={postData.fertilizing}
                        onChange={(e) => setPostData({...postData,fertilizing: e.target.checked})}
                    />}
                    label="Fertilizing"
                />
            </div>
            <div className='form-group'>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container justifyContent='space-around'>
                        <KeyboardDatePicker
                            variant = 'dialog'
                            format = 'MM/DD/yyyy'
                            margin = 'normal'
                            id = 'date-picker'
                            label = 'Date Picker'
                            value = {postData.eventDate}
                            onChange={(e) => setPostData({...postData, eventDate: e})}
                            KeyboardButtonProps={{
                                'aria-label':'change date'
                            }}
                        />
                        <KeyboardTimePicker
                            margin = 'normal'
                            id = 'time-picker'
                            label = 'Time Picker'
                            value = {postData.eventDate}
                            onChange={(e) => setPostData({...postData, eventDate: e})}
                            KeyboardButtonProps={{
                                'aria-label':'change time'
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider> 
            </div>
            <div className="form-group">
            <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setPostData({...postData, articleImage: base64})}
                    />
            </div>
            <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                    Add Notes
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm
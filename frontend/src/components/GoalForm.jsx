import axios from 'axios'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
import FileBase from 'react-file-base64';

const API_URL = '/api/users/'


function GoalForm() {
    const [postData, setPostData] = useState({
        text: '',
        articleImage: '',
    });

    const dispatch = useDispatch()


    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createGoal(postData));
        // setPostData('')
        // setFileName('')
    }

  return (
    <section className='from'>
        <form onSubmit = {onSubmit} encType="multipart/form-data">
            <div className='form-group'>
                <label htmlFor = 'text'>Goal</label>
                <input
                type='text'
                name='text'
                id='text'
                value={postData.text}
                onChange={(e) => setPostData({...postData,text: e.target.value})}
                />
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
                    Add Goal 
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm
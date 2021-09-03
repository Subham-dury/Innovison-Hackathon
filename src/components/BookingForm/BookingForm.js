import { useState } from 'react'
import "./bookingform.css"

const BookingForm = ({  }) => {

  
  const [text, setText] = useState('')
  const [cause, setCause] = useState('')
  const [info, setInfo] = useState(false)



  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please fill up the form')
      return
    }
    else {
      alert('Request send')
      setText('')
    setCause('')
    setInfo(false)
      return
    }
    

    

    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Enter Name'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Cause</label>
        <input
          type='text'
          placeholder='Add Cause'
          value={cause}
          onChange={(e) => setCause(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Oxygen or Blood</label>
        <input
          type='checkbox'
          checked={info}
          value={info}
          onChange={(e) => setInfo(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Book Bed' className='btn btn-block' />
    </form>
  )
}

export default BookingForm
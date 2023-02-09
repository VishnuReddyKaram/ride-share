import { useRef, useState, useEffect } from 'react'
import './RideSearchBar.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function RideSearchBar() {
  const todayDate = new Date()
  const[fromLocation, setFromLocation] = useState()
  const[toLocation, setToLocation] = useState()
  const[date, setDate] = useState(todayDate)
  const[seatSelector, setSeatSelector] = useState(false)
  const [seat, setSeat] = useState(1)
  const seatSelectorRef = useRef(null);
  const seatSelectorButtonRef = useRef(null);

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    const handleClick = (e) => {
      if (!seatSelectorRef.current.contains(e.target) && seatSelector && (!seatSelectorButtonRef.current.contains(e.target))) {
        setSeatSelector(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [seatSelector]);

  function changeEvent(value) {
    console.log(value)
  }

  return (
    <div>
      <div className='main-container'>
        <div className="container border-radius">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <input className="input-form border-radius" type="text" value={fromLocation} onChange={event => changeEvent(event.target.value)} placeholder='Leaving from..'/>
          <div className="vl"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt icon" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <input className="input-form" type="text" value={toLocation} onChange={event => changeEvent(event.target.value)}placeholder='Going to..'/>
          <div className="vl"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 icon" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          <div>
          <DatePicker className="button" selected={date} onChange={(date) => setDate(date)} minDate={todayDate} dateFormat="MM/dd/yyyy"/>
          </div>
          <div className="vl"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle icon" viewBox="0 0 16 16" onClick={() => setSeatSelector(seatSelector ? false : true)}>
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <div className="seat-button button" ref={seatSelectorButtonRef} onClick={() => setSeatSelector(seatSelector ? false : true)}>{seat}</div>
          <div className="vl"></div>
          <div className="search-button">Search</div>
        </div>
        <div class={`display${seatSelector ? "wrapper scale-in-top" : "false"}`} ref={seatSelectorRef}> 
          <span class="minus" onClick={() => seat !== 1 ? setSeat(seat - 1) : 1}>-</span> 
          <span class="num">{seat}</span>
          <span class="plus" onClick={() => seat !== 6 ? setSeat(seat + 1) : 1}>+</span>
      </div>
      </div>
</div>
  )
}

export default RideSearchBar
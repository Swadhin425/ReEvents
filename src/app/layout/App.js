import { Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from '../../features/events/eventDashboard/eventDashboard';
import NavBar from '../../features/events/eventDashboard/nav/NavBar';
import React,{useState} from 'react'


function App() {
  const [formOpen,setFormOpen]=useState(false);
  const [selectedEvent,setSelectedEvent]=useState(null);

  function handleSelectEvent(event){
    console.log(event)
    setSelectedEvent(event);
    setFormOpen(true);
}

function handleCreateFormOpen(){
  setSelectedEvent(null);
    setFormOpen(true);
}
  return (
    <div>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent}/>
      </Container>
      
    </div>
  );
}

export default App;

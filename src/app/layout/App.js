import { Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from '../../features/events/eventDashboard/eventDashboard';
import NavBar from '../../features/events/eventDashboard/nav/NavBar';
import React,{useState} from 'react'


function App() {
  const [formOpen,setFormOpen]=useState(false);
  return (
    <div>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
      
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData'

const EventDashboard = () => {

    const [events, setEvents] = useState(sampleData);


    //     function handleCreateEvent(event){

    //         setEvents([...events,event])
    //         console.log(events)
    //     }

    //    function handleUpdateEvent(updatedEvent){
    //        setEvents(events.map(evt=>evt.id===updatedEvent.id?updatedEvent:evt));


    //    }

    function handleDeleteEvent(eventId) {
        setEvents(events.filter(evt => evt.id !== eventId));
    }


    return (
        <div>
            <Grid>
                <GridColumn width={10}>
                    <EventList events={events} deleteEvent={handleDeleteEvent} />
                </GridColumn>
                <GridColumn width={6}>
                    <h2>Event Filter</h2>
                </GridColumn>
            </Grid>
        </div>
    )
}

export default EventDashboard
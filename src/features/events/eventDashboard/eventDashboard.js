import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventList from './EventList'
import { useSelector } from 'react-redux'

const EventDashboard = () => {

   const {events}=useSelector(state=>state.event)

    return (
        <div>
            <Grid>
                <GridColumn width={10}>
                    <EventList events={events}  />
                </GridColumn>
                <GridColumn width={6}>
                    <h2>Event Filter</h2>
                </GridColumn>
            </Grid>
        </div>
    )
}

export default EventDashboard
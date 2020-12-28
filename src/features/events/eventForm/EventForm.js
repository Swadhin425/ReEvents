import cuid from 'cuid';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const EventForm = ({ setFormOpen, setEvents ,createEvent,selectedEvent,updateEvent}) => {
    console.log(selectedEvent )
    console.log("form value" )

    const initialValues =selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''

    }
    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        selectedEvent ? updateEvent({...selectedEvent,...values})
        :createEvent({...values,id:cuid(),hostedBy:'Bob',attendees:[],hostPhotoURL:'/assets/user.png'});
        setFormOpen(false)
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    return (
        <Segment clearing>
            <Header content={selectedEvent?"Edit the event":"Create new Events"} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder='Event title' name='title' value={values.title} onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category' name='category' value={values.category} onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description' name='description' value={values.description} onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City' name='city' value={values.city} onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Vanue' name='venue' value={values.venue} onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Date' name='date' value={values.date} onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button as={Link} to='/events' type='submit' floated='right' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default EventForm
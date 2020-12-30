import React from 'react'
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
       <Segment inverted textAlign='center' vertical className='masthead'>
       <Container>
           <Header as='h1' inverted>
            <Image size='massive' src='/assets/logo.png' style={{marginBottom:12}}/>
            Fakebook
           </Header>
           <Button onClick={()=>history.push('/events')} size='huge' inverted>
            Get started
            <Icon name='right arrow'/>
           </Button>
       </Container>
       </Segment>
    )
}

export default HomePage

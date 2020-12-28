import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar = ({setFormOpen}) => {
    return (
        <div>
            <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src="/assets/logo.png" alt="logo"/>
                </Menu.Item>
                <Menu.Item name='Fakebook'/>
                <Menu.Item>
                    <Button onClick={()=>setFormOpen(true)} positive inverted content="Create Event" />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Register" style={{marginLeft:'0.5em'}} />
                </Menu.Item>
            </Container>
            </Menu>
        </div>
    )
}

export default NavBar

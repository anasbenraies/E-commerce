import React from 'react'
import { useState } from 'react'
import './Comp.css'
import {Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import Accueil_Cont from './Acceuil.jsx'


let SideBar = ({list}) => {
   const [visible, setVisible] = React.useState(false)
  



  const create=(el)=>{
      let On="" ;
      if(el !== "Jeans")
      On="a" ; 
      return (
           <Menu.Item as={On}>
                { el !== "Jeans"  && el }
                { el === "Jeans"  && <div><p className='jeans'>Jeans <Icon color='white' size=' small' name='long arrow alternate down'   onMouseEnter={()=>setVisible(true)} /></p>
              <ul  >
                <Menu.Item as='a'>
              <li>Slim</li>
                </Menu.Item>
              <Menu.Item as='a'>
              <li>Skinny</li>
                </Menu.Item>
              <Menu.Item as='a'>
              <li>Droit</li>
                </Menu.Item>
              </ul> </div>}
           </Menu.Item>       
      )

  }






  return (

    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar  onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}
            as={Menu}
            animation='scale down'
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='wide'
          >
            <h2 as='a'className='bar-title' >
              Shopping Site
            </h2>
            {list.map((el)=>create(el))}
          </Sidebar>

          <Sidebar.Pusher  className='' >
            <Segment basic >
              
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}


export default SideBar


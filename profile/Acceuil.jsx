import React from 'react'
import { useState } from 'react'
import './Comp.css'
import {Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import {Link} from "react-router-dom"



let Acceuil = ({list}) => {
   const [visible, setVisible] = useState(false)
  



  const create=(el)=>{
      return (
           <Menu.Item as="a">
                { el !== "Jeans"  && el }
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
              <div>
  <div className='title-ham'>
                <div>
                  <Icon color='black' size='large' name='bars'   onMouseEnter={()=>setVisible(true)} />
                </div>
                <div  className='title'>
                <h2>Shopping Site</h2>
                </div>    
             </div>
              <div  className='main' >
                <div className='box-left'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6veeXH6_3-0WAh9ZGr0QYgHaKU%26pid%3DApi&f=1" alt="femme" />
                <Link to="/Femme">
                <h2>Femme</h2>
                </Link>
                </div>
                <div className='box-right'>
                  <Link to="/homme">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.albertzips.com%2Ffileadmin%2F_processed_%2Fcsm_Fashion_Men_e98c871163.jpg&f=1&nofb=1" alt="homme" />
                </Link>
                <h2>Homme</h2>
                </div>
              </div>
              
</div>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}


















export default Acceuil


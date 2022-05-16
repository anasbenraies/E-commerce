import React from 'react'
import { useState } from 'react'
import {Grid, Icon, Menu, Segment, Sidebar,Image,Button,Dropdown,Input,Form,Checkbox,Popup } from 'semantic-ui-react'

export default function Produit({produit,list}) {
const [visible, setVisible] =useState(false)
console.log(produit);
const [selected_img,setimg]=useState(produit.image[0])
const [couleurR,setcouleurR]=useState(true)
const [couleurN,setcouleurN]=useState(true)
const [couleurB,setcouleurB]=useState(true)
const [taille,setaille]=useState("S")
const [quantite,setquantite]=useState(0)


   const create=(el)=>{
      return (
           <Menu.Item as="a">
                {el}
           </Menu.Item>       
      )

  }

const TaillesOptions=[
  {
    key: 1,
    text: 'Taille S',
    value: ' S',
  },{
    key: 2,
    text: 'Taille M',
    value: ' M',
  },{
    key: 3,
    text: 'Taille L',
    value: ' L',
  },
]


const handleChange =(e,data)=>{

    setaille(data.value);
    console.log(taille)
}


const handleChange2 =(e)=>{

    setquantite(e.target.value);
    console.log(quantite)
}




  return (

    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar  onMouseLeave={()=>setVisible(false)}
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
              <div className='title-ham'>
                <div>
                  <Icon color='black' size='large' name='bars'   onMouseEnter={()=>setVisible(true)} />
                </div>
                
             </div>
                <div style={{display:"flex",marginTop:"5em",justifyContent:"space-around"}}>
                  <div style={{marginLeft:"5%",height:"40em",width:"50em"}}>
                    <Image rounded="true"  src={selected_img} fluid />
                  </div>
                  <div style={{border:"2px solid rgb(255,144,33)",borderRadius:"2.5%",padding:"5%", width:"30em"}}>
                  <Form>
                    <Form.Field>
                      <h2 style={{textAlign:"center"}}>{produit.titre}</h2>
                    </Form.Field>
                    <Form.Field> 
                      <h3 style={{textAlign:"center"}}>{produit.prix}</h3>
                    </Form.Field>
                    <Form.Field>
                      <div style={{marginTop:"5em"}}>
                      <h3>Choisir la couleur</h3>
                      <div>
                        <Button inverted={couleurB} onClick={()=>{setcouleurB(false);setcouleurR(true);setcouleurN(true)}} color='blue'><p>blue</p> </Button>
                        <Button inverted={couleurN} onClick={()=>{setcouleurB(true);setcouleurR(true);setcouleurN(false)}}   color='black'><p style={{color:"gray"}}>noir</p></Button>
                        <Button inverted={couleurR}onClick={()=>{setcouleurB(true);setcouleurR(false);setcouleurN(true)}} color='red'><p>rouge</p></Button>
                      </div>
                      <Form.Field> 
                        <div style={{marginTop:"2em",display:"flex",gap:"1em",flexDirection:"column"}}>
                        <label><h3>Taille : {taille}</h3></label>
                         <Dropdown
                          value={taille}
                          onChange={handleChange}
                          placeholder='Taille S'
                          fluid
                          selection
                          options={TaillesOptions}
                         />
                         
                         
                         
                        </div>
                    </Form.Field>

                    <Form.Field> 
                        <div style={{marginTop:"2em",display:"flex",gap:"1em",flexDirection:"column"}}>
                        <label><h3>Quantite : {quantite}</h3></label>
                         <input type="number" onChange={handleChange2}/>
                        </div>
                    </Form.Field>


                      </div>
                    </Form.Field>
                    <Button  style={{margin:"3em"}}content='Ajouter au panier' icon='cart' color="orange" labelPosition='left' />
                  </Form>
                  </div>
                  
                  
    
   

                </div>

              

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

import React from 'react'
import { useState } from 'react'
import './Comp.css'
import {Grid, Icon, Menu, Segment, Sidebar,Button,Card,Input,Form,Checkbox,Popup } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import './Homme_Cont.css'



let Homme_Cont = ({list}) => {
   const [visible, setVisible] =useState(false)
   const [jeansV,setjeansV]=useState("none")
   const [selected,set_selc]=useState("Jeans")
   const [big_pic,set_big_p]=useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dhresource.com%2F0x0s%2Ff2-albu-g8-M01-9A-30-rBVaV1ws3s2ACg3XAATtGTWKfh4067.jpg%2Fpure-color-men-039-s-suits-size-s-m-l-xl.jpg&f=1&nofb=1")
   const jean_p="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dhresource.com%2F0x0s%2Ff2-albu-g8-M01-9A-30-rBVaV1ws3s2ACg3XAATtGTWKfh4067.jpg%2Fpure-color-men-039-s-suits-size-s-m-l-xl.jpg&f=1&nofb=1"
   const [liste,set_liste_pr]=useState([{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'}])
   const jeans=[{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'}]
   const Jackets=[{image:jean_p,header:'Jacket',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jacket',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'}]
   const Montres=[{image:jean_p,header:'Montres',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'}]
   const Tshirts=[{image:jean_p,header:'T-shirts',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'},{image:jean_p,header:'Jean',meta:'Disponible',description:'Jean Description ici'}]
   const [search , setSearch]=useState("");
   const e_mailBox={display:"flex" , flexDirection:'column',height:"20em" ,marginTop:"7em",marginBottom:"10em", padding:"2em 15em" , backgroundColor:"#121315"}
   const list_edition=["edition limité","nouvelle collection","edition limité","nouvelle collection","edition limité","nouvelle collection","edition limité","nouvelle collection"]
   const [ind,set_ind]=useState(0) ;


  const ind_edition=(a)=>{
    if(a ===0 ){
      set_ind(1);
      return a ;
    }
    else{
      set_ind(0);
      return a ;
    }

  }
  



   const create=(el)=>{
      let On="" ;
      if(el !== "Jeans")
      On="a" ; 
      return (
           <Menu.Item as={On}>
                { el !== "Jeans"  && <p  onClick={()=>{set_selc(el); 
                 {{el === "Jackets" &&  set_liste_pr(Jackets)}}
                 {el === "Montres" &&  set_liste_pr(Montres)}
                 {el === "T-shirts" &&  set_liste_pr(Tshirts)}
                 {el === "Jeans" &&  set_liste_pr(jeans)}

                  }}>{el}</p> }
                { el === "Jeans"  && <div><p onMouseEnter={()=>setjeansV("block")}  className='jeans' onClick={()=>set_selc("Jeans")}>Jeans <Icon color='white' size=' small' name='long arrow alternate down'    /></p>
              <ul style={{display:jeansV}} onMouseLeave={()=>setjeansV("none")}>
                <Menu.Item as='a'>
              <li    onMouseEnter={()=>setjeansV("block")}>Slim</li>
                </Menu.Item>
              <Menu.Item as='a'>
              <li onMouseEnter={()=>setjeansV("block")}>Skinny</li>
                </Menu.Item>
              <Menu.Item as='a'>
              <li onMouseEnter={()=>setjeansV("block")}>Droit</li>
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
              <div>
               <div className='title-ham'>
                <div>
                  <Icon color='black' size='large' name='bars'   onMouseEnter={()=>setVisible(true)} />
                </div>
                <div  className='title'>
                    <div style={{display:"flex",justifyContent:"space-betweeen",alignItems:"baseline",gap:"10%",marginLeft:"80em"}}>
                        <h2 style={{paddingRight:"20%"}}>{selected}</h2>
                        <Icon name='search'/>
                   </div>
                </div>

                  
             </div>
              <div style={{marginTop:'-2%'}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                      <img src={big_pic} className="big_pic"/>
                      <div style={{marginRight:'7em'}}>
                      <h3 style={{fontFamily:'Roboto'}}>Jettez un coup d'oeil sur la nouvelle collection <br/>Disponible aujourd'hui</h3>
                      <Button  style={{marginTop:'3%'}}content='Decouvrir' secondary />
                      </div>
                  </div> 
               </div>

              <div >
                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5em",gap:"23em"}}>
                  <p style={{margin:"5em 20em 1em13.2em" ,display:"flex",gap:"1em"}}><h5>{liste.filter(el=>el.header.toLowerCase().includes(search.toLowerCase())).length+" "}</h5> produits</p>
                  <Input icon='search' size='mini' placeholder='Chercher...' onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>

              <div style={{margin:"0em 13em",gap:"2em",display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}   name="jean Box">
                  {liste.filter(el=>el.header.toLowerCase().includes(search.toLowerCase())).map((el,key)=><Popup  content={list_edition[key]} trigger={<Card key={key} color='orange' link image={el.image} header={el.header} meta={el.meta} description={el.description} />}/>)} 

              </div>

            </div>


            <div style={e_mailBox}>
              <h2 style={{color:"white"}}>Subscribe</h2>
              <h4 style={{color:"white"}}>pour des offres specials et des traitements VIP </h4>
              <Input size='large'fluid="true" placeholder="Camille@gmailcom" />
              <Button inverted color='orange' style={{margin:"1em 20vw"}}>S'abonner</Button>
            </div>

            <div name="footer" style={{display:"flex",justifyContent:"space-around",margin:"5em"}}>

              <div>
                <h3>Contactez-nous</h3>
                  <Form>
                      <Form.Field>
                          <label>First Name</label>
                          <input placeholder='First Name' />
                      </Form.Field>
                      <Form.Field>
                          <label>Last Name</label>
                          <input placeholder='Last Name' />
                      </Form.Field>
                      <Form.Field>
                     <textarea placeholder='Commentaire'/>
                     </Form.Field>
                      <Button type='submit'>Submit</Button>
                      <Form.Field>
                          <Checkbox style={{marginTop:"1em"}} label='I agree to the Terms and Conditions' />
                     </Form.Field>
                  </Form>

              </div>
              
              <div>
                <h3>A propos</h3>
                <h5>A propos de nous</h5>
                <h5>Support</h5>
                <h5>payment</h5>

              </div>


              <div>
                <h3>Boutique</h3>
                  <div style={{display:"flex" ,alignItems:"baseline",gap:"1em"}}>
                  <Icon name='shopping bag' />
                  <h5>ShoppyNet</h5>
                </div>
                 <div  style={{marginTop:"1em",marginBottom:"1em",display:"flex" , gap:"1em",alignItems:"baseline"}}>
                  <Icon name=' phone' />
                  <h5 >+21627776417</h5>             
                </div>
                 <div style={{display:"flex" ,alignItems:"baseline",gap:"1em"}}>
                  <Icon name='mail' />
                  <h5>a.benraies19038@pi.tn</h5>
                </div>

                <h3>On accepte</h3>
                <div style={{display:"flex" , gap:"1em",alignItems:"baseline",paddingRight:"2em"}}>
                  <Icon name='credit card outline' />
                  <h5 style={{margin:"1em 0em"}}>Paypal</h5>
                </div>
                 <div style={{display:"flex" , gap:"1em",alignItems:"baseline"}}>
                  <Icon name='credit card alternative' />
                  <h5>Master Card</h5> 
                </div>
                


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


















export default Homme_Cont


  

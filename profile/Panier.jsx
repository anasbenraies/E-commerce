import React from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {Grid ,Icon,Menu,Segment,Sidebar,Button } from 'semantic-ui-react'

export default function Panier({list}) {
    const [etat, setEtat] =useState("en attente")
    const [visible, setVisible] =useState(false)
    const listePanier=useSelector((state)=>state.panier)
    //console.log(listePanier);
    const dispatch=useDispatch()

    const create=(el)=>{

      if(el==="Homme"){
       return (
        <Link to='/homme'>
        <Menu.Item as="a">
            {el}
           </Menu.Item>
            </Link>
       )
     }
     else{
        return (
          <Menu.Item as="a">
              {el}
            </Menu.Item>
        )
     }

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

              <div>
              <h1 style={{fontFamily:'Roboto',textAlign:"center"}}>Mon Panier</h1>  
              </div>


          <div style={{margin:"15em"}}>
            <Item.Group >
            {listePanier?.map((el,i)=>
            <Item style={{boxShadow:"1px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}>
            <Item.Image size='tiny' src={el.imageProduit} />
            <Item.Content>
            <div>
            <Item.Header as='a'>{el.titreProduit}</Item.Header>
            <Item.Meta>Detaille</Item.Meta>
            <Item.Description>
            <div style={{display:"flex", alignItems:"baseline",marginTop:"-1em"}} >
            <h4>taille : {" "+el.tailleProduit}</h4>
            <h4 style={{paddingLeft:"2em",paddingRight:"2em"}}>quantite : {" "+el.QuantiteProduit}</h4>
            <h4>totale :  {(parseFloat(el.QuantiteProduit)*parseFloat(el.prixProduit)).toString().substring(0,6)}</h4>
            </div>
            </Item.Description>
         </div>
      </Item.Content>
          <h4 style={{paddingRight:"2%",cursor:"pointer"}} onClick={()=>{dispatch({type:"Delete_From_Panier",payload:{indice:el.indice}});console.log(listePanier)}}>❌</h4>
    </Item>)
     } 

</Item.Group>
<div>
{(listePanier?.length>0)?<Button  inverted color='orange' style={{marginTop:"4em",marginLeft:"28em"}} onClick={()=>{setEtat("acheté");dispatch({type:"clear"})}}>Acheter</Button>:<h1 style={{marginTop:"5em",marginLeft:"12em"}}>Votre panier est vide</h1>}
</div>
{(etat==="acheté")?<h1 style={{marginTop:"5em",marginLeft:"9em"}}>Merci d'avoir acheté de ShoppyNet</h1>:null}
     </div>
  
  
     
    


               

              

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>













  )
}

/*
<Feed>
           {listePanier.map((el,i)=><Feed.Event key={i}>
                <Feed.Label image={el.imageProduit} />
                <Feed.Content content={el.titreProduit+"Taille : "+el.tailleProduit+"    Quantite : "+el.QuantiteProduit+"  Total : "+(parseFloat(el.QuantiteProduit)*parseFloat(el.prixProduit)).toString()}/>
           </Feed.Event>)}
        </Feed>
*/
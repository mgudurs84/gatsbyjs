import React from 'react';
import {graphql, StaticQuery , Link} from 'gatsby';
import styled from 'styled-components'

const MainMenuWrapper = styled.div `
display: flex;
background-color: #5bc6cf;
font-color: white;

`
const MenuItem = styled(Link) `
color: white;
display: block;
padding: 10px 16px;
text-decoration: none;
margin-top: 5px;
margin-bottom: 5px;
`

const MainMenu =() => (
<div>
   <StaticQuery query={graphql `
   query MyQuery {
    allWordpressMenusMenusItems (filter: {
      name:{
        eq: "GwsMed"
      }
    })  {
      edges {
        node {
          name
          items {
            title
            slug
          }
        }
      }
    }
  }
  
  

   `}  render={props => (
       <MainMenuWrapper>
           {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
               < MenuItem to={item.slug} key={item.slug}>
                   {item.title}
               </MenuItem>
           ))}
       </MainMenuWrapper>
   )} />
</div>

);

export default MainMenu;
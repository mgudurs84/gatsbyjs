
import React from "react"
import MainMenu from "./MainMenu"
import Header from './header'
import styled , {createGlobalStyle} from 'styled-components'

const GlobalStyles =createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body {
  font-family : 'Open Sans', sans-serif;
  margin: 0 !important;
  padding: 0 !important;
}
div.rightimg img{
  float : right !important;
  margin-left: 10px !important; 
}

figure.rightimg img{
  float : right !important;
  margin-left: 10px !important; 
}
.SectionBanner{
  position: relative;
  margin-top: 28px;
  overflow: hidden;
  z-index: -100;
}

.SectionBanner > img{
  min-width: 1200px;
  height: 101px;
  width: 100%
}

.SectionBannerTitle{
  position: absolute;
  top: 98px;
  left: 80px;
  z-index: -100;
  font-family: "Fakt Pro Light", arial;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  font-size: 30px;
  color: #ffffff;
}

.wp-block-button__link{
	padding: 0px;
	font-size:18px;
	color: #FFFFFF;
	height:48px;
	line-height: 30px;
	width:auto;
	padding: 10px 30px 10px 30px; text-decoration:none; 
	text-align:center;
	border:0px solid #43bdc6;
	-webkit-box-shadow: -0px 2px 5px 0px rgba(0,0,0,0.2); 
	-moz-box-shadow: -0px 2px 5px 0px rgba(0,0,0,.2) ; 
	box-shadow: -0px 2px 5px 0px rgba(0,0,0,.2); 
	-webkit-border-radius: 8px; -moz-border-radius: 8px; border-radius: 8px;
	font-family:Fakt Pro Normal, arial, helvetica, sans-serif; 
	display:inline-block;
	text-shadow: 0px 0px 0 rgba(0,0,0,0.3); 
	background-color: #6ECCD3; 
	-webkit-gradient(linear, left top, left bottom, from(#6ECCD3), to(#009FAE));
	background-image: -webkit-linear-gradient(top, #6ECCD3, #009FAE);
	background-image: -moz-linear-gradient(top, #6ECCD3, #009FAE);
	background-image: -ms-linear-gradient(top, #6ECCD3, #009FAE);
	background-image: -o-linear-gradient(top, #6ECCD3, #009FAE);
	background-image: linear-gradient(to bottom, #6ECCD3, #009FAE);
	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#6ECCD3, endColorstr=#009FAE);
}

.wp-block-button__link:hover{
	border: 0px solid #33a0a8;
	background-color: #009FAE; background-image: 
	-webkit-gradient(linear, left top, left bottom, from(#5BC6CF), to(#009FAE));
	background-image: -webkit-linear-gradient(top, #5BC6CF, #009FAE);
	background-image: -moz-linear-gradient(top, #5BC6CF, #009FAE);
	background-image: -ms-linear-gradient(top, #5BC6CF, #009FAE);
	background-image: -o-linear-gradient(top, #5BC6CF, #009FAE);
	background-image: linear-gradient(to bottom, #5BC6CF, #009FAE);
	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#5BC6CF, endColorstr=#009FAE);
}

.wp-block-button__link:active{
	background-color: ##009FB1; background-image: 
}
`
const LayoutWrapper =  styled.div `
margin-left : 10px;
`
const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
     <MainMenu />
     <LayoutWrapper>
    {children}
    </LayoutWrapper>
  </div>
);

export default Layout

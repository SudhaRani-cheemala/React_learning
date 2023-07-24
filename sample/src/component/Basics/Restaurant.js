import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuAPI.js";
import MenuCrad from './MenuCrad';
import NavBar from './NavBar';
// TO CONVERT OBJECT INTO ARRAY ADD SQUARE BRACKETS
const uniqueList=[
  // spread operator
  ...new Set(
  Menu.map((curElem)=>{
   return curElem.category;
})
),
"All",
];
const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList)
  const filterItem=(category)=>{
   if(category==="All"){
     setMenuData(Menu);
     return;
   }
   

    const updatedList=Menu.filter((curElem)=>{
          return curElem.category===category;

    });
    setMenuData(updatedList)
  };
  // data management we use useState hook
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      {/* here we are using props(data flow from parent to child) passing attributes */}
     <MenuCrad menuData={menuData}/>
    </>
  )
}

export default Restaurant

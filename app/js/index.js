const { Tabs } = require ('./src/tabsrouter.js');
//setting tabs here
let mytab = document.querySelector('#favourite');
mytab.onclick=event=>{
  new Tabs(event,'nav-group-item','./mainview/photon.htm');
}

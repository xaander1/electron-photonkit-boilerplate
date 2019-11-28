const { Tabs } = require ('./src/tabsrouter.js');
//setting tabs here
// let mytab = document.querySelector('#favourite');
// mytab.onclick=event=>{
//   new Tabs(event,'nav-group-item','./mainview/photon.htm');
// }


//Nested Routing
// let hometab = document.querySelector('#home');
// hometab.onclick=event=>{
//   new Tabs(event,'header-tab','sidebar','./sidebar/home.htm');
//   let mytab = document.querySelector('#home_home');
//   mytab.onclick=event=>{
//     new Tabs(event,'nav-group-item','main','./mainview/home.htm');
//   }
// }

const route = new Promise(
  (resolve,reject)=>{
    const homeTab = new Tabs(event,'header-tab','sidebar','./sidebar/home.htm');
    resolve(homeTab);
  }
)
const route2=()=>{
  return new Promise(
    (resolve,reject)=>{
      const myTab=new Tabs(event,'nav-group-item','main','./mainview/home.htm');
      resolve(mytab);
    }
  )
}

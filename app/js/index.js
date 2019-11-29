const { Tabs } = require ('./src/tabsrouter.js');
//start scripts
//new Tabs(null,'header-tab','sidebar','./sidebar/home.htm');
//new Tabs(null,'nav-group-item','main','./mainview/home.htm');
//set routing events
const default_headroute = new Promise(
  //default sidebar
  (resolve,reject)=>{
let res = new Tabs(null,'header-tab','sidebar','./sidebar/default.htm');
console.log(res.status);
    resolve(res.status);
  }
);
const default_mainroute =async() =>{
  return new Promise(
    (resolve,reject)=>{
      //default mainbar
      resolve(new Tabs(null,'nav-group-item','main','./mainview/default.htm'));
    }
  )};



(async()=>{
  // default_headroute
  // .then(default_mainroute)
  // .then(()=>{
  // //set routes
  // let all_header_tabs = document.querySelectorAll('.nav-group-item');
  // all_header_tabs.forEach(header_tab=>{
  //   console.log(header_tab.id);
  // })
  let checkSidebar=await default_headroute;
  let checkMain = await default_mainroute();
  if (checkSidebar=="success"){
    console.log('success buddy');
    let all_header_tabs = document.querySelectorAll('bike');
    console.log(all_header_tabs);
    all_header_tabs.forEach(header_tab=>{
      console.log(header_tab.id);})


  }

})();


// function setTabsClickEvents(){
//   let all_header_tabs = document.querySelectorAll('.header_tab');
//   all_header_tabs.forEach(header_tab=>{
//     console.log(header_tab.id);
//   })
//
//
// }

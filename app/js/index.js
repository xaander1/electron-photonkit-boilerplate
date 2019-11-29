const { Tabs } = require ('./src/tabsrouter.js');
//start scripts
//new Tabs(null,'header-tab','sidebar','./sidebar/home.htm');
//new Tabs(null,'nav-group-item','main','./mainview/home.htm');
//set routing events
const default_headroute = new Promise(
  (resolve,reject)=>{resolve(new Tabs(null,'header-tab','sidebar','./sidebar/default.htm'));}
);
const default_mainroute = () =>{
  return new Promise(
    (resolve,reject)=>{
      resolve(new Tabs(null,'nav-group-item','main','./mainview/default.htm'));
    }
  )};
(()=>{
  default_headroute
  .then(default_mainroute)
  .then(
    //set routes




  )
  .catch(error=>console.log(error))
}
)();

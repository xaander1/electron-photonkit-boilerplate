//ES6 javascript promises
const { Tabs } = require ('./src/tabsrouter.js');
new Tabs(null,'header-tab','sidebar','./sidebar/default.htm')
.then(()=>{
	new Tabs(null,'nav-group-item','main','./mainview/default.htm');
})
.then(()=>{

})
.catch(error=>console.log(error));

function listenForClicks() {
	

}

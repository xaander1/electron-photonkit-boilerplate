//ES6 javascript promises

//nested default tab
const { Tabs,listenForClicks,listenForNestedClicks } = require ('./src/tabsrouter.js');
 Tabs(null,'sidebar','./sidebar/home.htm')
.then((reply)=>{
	if(reply=='Success'){
	Tabs(null,'main','./mainview/home/alexander.htm');
	}
})
.then(()=>{
	listenForNestedClicks('.header-tab','alexander.htm','.fav');
	//listen for click events on sidebar
	listenForClicks('.fav','home');
})
.catch(error=>console.log(error));

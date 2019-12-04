//ES6 javascript promises

//nested default tab
const { Tabs,listenForClicks,listenForNestedClicks } = require ('./src/tabsrouter.js');
 Tabs(null,'sidebar','./sidebar/home.htm')
.then((reply)=>{
	if(reply=='Success'){
	Tabs(null,'main','./mainview/home/default.htm');
	}
})
.then(()=>{
	//listen for click events on sidebar
  //common class,the name of folder
	listenForClicks('.nav','home');
  //Listen for nested rendering clicks
  listenForNestedClicks('.header-tab','default.htm','.nav');
})
.catch(error=>console.log(error));

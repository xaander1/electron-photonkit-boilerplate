//ES7 asynchronous functions
const { Tabs } = require ('./src/tabsrouter.js');
async function renderTab() {
	try{
		let defaultTab = await new Tabs(null,'header-tab','sidebar','./sidebar/default.htm');
	}
	catch(err){
		console.log(err);
	}
}
(async function render() {
	renderTab();
	//default route
	new Tabs(null,'nav-group-item','main','./mainview/default.htm');

})();
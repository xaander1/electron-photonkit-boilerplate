class Tabs{
    constructor(evt,tabslinks,section,page_to_load,){
    return new Promise(
      (res,rej)=>{
        this.page_to_load = page_to_load;
        this.tabslinks = tabslinks;
        this.evt=evt;
        this.section=section;
        let status_log = this.tabsHandler();
        res(status_log);
      }
    )

    }
//handle the routing between pages
    tabsHandler(){
        fetch(this.page_to_load)
        .then(data => data.text())
        .then(html=> {
        document.getElementById(this.section).innerHTML = html;
        var scripts = document.getElementById(this.section).querySelectorAll("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].innerText) {
                eval(scripts[i].innerText);
            } else {
            fetch(scripts[i].src)
            .then(data => { data.text()
            .then(r=> eval(r))});

    }
    // To not repeat the element
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  if(this.event){
  let state = this.classChanger();
  return state;
  }else{
    return "success";
  }  
});

    }

//Change class  to active
  classChanger(){
    let i,tablinks;
     tablinks = document.getElementsByClassName(this.tabslinks);
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
      this.evt.currentTarget.className += " active";
      return "success";
  }




}
module.exports = {
  Tabs
}

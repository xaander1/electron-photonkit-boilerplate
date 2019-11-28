class Tabs{
    constructor(evt,tabslinks,section,page_to_load,){
        this.page_to_load = page_to_load;
        this.tabslinks = tabslinks;
        this.evt=evt;
        this.section=section;
        this.tabsHandler();
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
});
this.classChanger()
    }

//Change class  to active
  classChanger(){
    let i,tablinks;
     tablinks = document.getElementsByClassName(this.tabslinks);
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
      this.evt.currentTarget.className += " active";
  }




}
module.exports = {
  Tabs
}

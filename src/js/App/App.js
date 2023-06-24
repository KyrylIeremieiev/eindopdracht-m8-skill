class App{
    switcher;
   
    constructor(){
       this.api = new Api();
       this.api.getData().then(()=>{
           this.switcher = new Switcher(this);
           this.switch(0);
       });
       
    }
   
    switch(index){
       this.switcher.switch(this.api.data.videos, this, index)
    }
   }
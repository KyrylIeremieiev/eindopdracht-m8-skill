class Switcher{
    constructor(App){
        this.app = App
        this.cleaner = new Cleaner();
    }

    switch(data, app, index){
        this.clean("body");
        this.yubtub = new Yubtub(data, app, index, this);
    }

    clean(whereToClean){
        this.cleaner.clean(whereToClean);
    }
}
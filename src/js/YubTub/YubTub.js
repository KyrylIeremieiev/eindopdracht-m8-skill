class Yubtub{
    constructor(data, app, index, switcher){
        this.data = data;
        this.app = app;
        this.switcher = switcher;
        this.renderer = new Renderer();
        this.main = new Main(data, index, this);
        this.header = new Header(data);
        this.aside = new Aside(data, index, this);
    }

}
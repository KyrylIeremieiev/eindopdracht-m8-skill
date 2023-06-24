class Api{
    async getData(){
        await fetch("../../src/json/data.json").then(response =>{
            return response.json();
            }).then(data =>{
                this.data = data;
            });
    }
}

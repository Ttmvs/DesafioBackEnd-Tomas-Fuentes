const fs = require('fs');

class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
    }
    save (Object) {
        const id = Math.floor(Math.random()*100);
        Object.id = id;
        console.log(Object)
        Object = JSON.stringify(Object, null, 2);
        fs.writeFile(this.fileName, Object, (err)=>{
            if(err){
                console.log(err);
            }
        })
        return id;
    }

    getAll() {
        const data = fs.readFileSync(this.fileName, 'utf8', (err) => {
            
            if (err) {
                console.log(err);
            }
        })
        //data = JSON.parse(data);
        console.log(`getAll: ${data}`)
        return data;
        }
}

const file = new Contenedor("Pets.json");
const dogs = {id: 0, nombre: "Pepe", raza: "doberman"};
//console.log(file.save(dogs))
console.log(JSON.stringify(file.getAll()))

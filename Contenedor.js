const fs = require('fs');

class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
    }
     save (Object) {
        const data = this.getAll();
        //console.log(`data: ${data}`)
        let pets = JSON.parse(data);
        //console.log(pets)
        const id = Math.floor(Math.random()*100);
        Object.id = id;
        pets.mascotas.push(Object);
        //console.log(Object)
        pets = JSON.stringify(pets, null, 2);
         fs.writeFile(this.fileName, pets, (err)=>{
            if(err){
                console.log(err);
            }
        })
        return id;
    }

    getAll() {
        const data = fs.readFileSync(this.fileName, 'utf8',);
        //data = JSON.parse(data);
        //console.log(`getAll: ${data}`)
        return data;
        }

    getById(id){
        const data = this.getAll();
        const pets = JSON.parse(data);
        const {mascotas} = pets;
        const pet = mascotas.find((x) => x.id==id);
        if (pet){
            return pet;
        }else{
            return null
        }
    }
    deleteById(id){
        const data = this.getAll();
        const pets = JSON.parse(data);
        const {mascotas} = pets;
        const pet = mascotas.filter((x) => x.id!==id);
        const x = {
            mascotas: pet
        };
        fs.writeFile(this.fileName, JSON.stringify(x, null, 2), (err)=>{
            if (err){
                console.log(err);
            }
            
        })
        console.log(pet)
    } 
    deleteAll(){
        const x = {
            mascotas: []
            
        };
        fs.writeFile(this.fileName, JSON.stringify(x, null, 2), (err)=>{
            if (err){
                console.log(err);
            }
            
        })
    }

}

const file = new Contenedor("Pets.json");
const Pet = {id: 0, nombre:"aa", raza:"Doberman"};

 /* file.save(Pet);
setTimeout(function() {const listObject = JSON.stringify(file.getAll());
    console.log(`listado: ${JSON.parse(listObject)}`)}, 1000); */
 
 /* setTimeout(function() {const listObject = JSON.stringify(file.getById(8));
        console.log(`listado a: ${listObject}`)}, 1500);  */
 //console.log(file.getById(36)) 
 //file.deleteById(8)
 file.deleteAll()

class userData {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        console.log(`El nombre completo del usuario es ${this.nombre} ${this.apellido}`);
    }
    addMascota() {
        this.mascotas.push('loro');
        console.log(`Se agrego ${this.mascotas.at(-1)} a la lista`)
    }
    countMascotas() {
        console.log(`El usuario tiene ${this.mascotas.length} mascotas`);
    }
    getBooks() {
        console.log(`El libro se llama ${this.libros.at(0)} y su autor es ${this.libros.at(1)}`)
    }
    addBook(){
        this.libros.push('El Hobbit');
        this.libros.push('Tolkien');
        console.log(`Se agrego ${this.libros.at(-2)} a la lista y su autor es ${this.libros.at(-1)}`)
    }
}
let usuario1 = new userData('Jorge', 'Lopez', ['El Señor de los Anillos', 'Tolkien'], ['perro', 'gato'])

usuario1.getFullName()
usuario1.addMascota()
usuario1.countMascotas()
usuario1.getBooks()
usuario1.addBook()
/* console.log(usuario1) */
class userData {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return`El nombre completo del usuario es ${this.nombre} ${this.apellido}`;
    }
    addMascota(mascotas) {
        this.mascotas.push(mascotas);
        return `Se agrego ${this.mascotas.at(-1)} a la lista`;
    }
    countMascotas() {
        return `El usuario tiene ${this.mascotas.length} mascotas`;
    }
    addBook(titulo,autor){
        this.libros.push({titulo: titulo,autor: autor });
        return `Se agrego ${this.libros.at(-2)} a la lista y su autor es ${this.libros.at(-1)}`
    }
    getBooks() {
    const bookData = this.libros.map(item => {
        let autor = item.autor;
        let titulo = item.titulo;
        return `El autor del libro es ${autor} y su titulo es ${titulo}`;
    })
    return bookData;
    }
}
let usuario1 = new userData('Jorge', 'Lopez',[{titulo: 'El hobbit',autor: 'Tolkien'}], ['perro', 'gato'])

usuario1.getFullName()
usuario1.addMascota('loro')
usuario1.countMascotas()
usuario1.getBooks()
usuario1.addBook('El señor de los Anillos','Tolkien')

/* console.log(usuario1) */

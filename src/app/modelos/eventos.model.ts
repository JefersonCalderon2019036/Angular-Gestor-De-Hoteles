export class Eventos{
    constructor(
       public _id: String,
       public nombre: String,
       public iddelhotel: String,
       public tipodeevento: String,
       public cantidadepersonas: Number,
       public detalles: String,
       public imagen: String,
       public valor: Number,
       public listaComentarios: [{
            textoComentario: String,
            calificacionhabitacion: Number,
            calificacionservicio: Number,
            idUsuarioComentario: String
        }],
        public calificacionstandarhabitaciones: Number,
        public calificacionstandarservicio: Number,
        public calificacionstand:Number,
        public contador: Number
    ){}
}
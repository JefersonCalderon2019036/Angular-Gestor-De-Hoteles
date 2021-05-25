export class Habitacion{
    constructor(
        public _id: String,
        public IdHotel: String,
        public TipoHabitacion: String,
        public nombre: String,
        public Cuartos: Number,
        public cantidaddepersonas: Number,
        public detalles: String,
        public img: String,
        public valor: Number,
        public listaComentarios: [{
            textoComentario: String,
            calificacionhabitacion: Number,
            calificacionservicio: Number,
            idUsuarioComentario: String
        }],
        public calificacionstandarhabitaciones: Number,
        public calificacionstandarservicio: Number,
        public calificacionstandar: Number,
        public contador: Number
    ){}
}
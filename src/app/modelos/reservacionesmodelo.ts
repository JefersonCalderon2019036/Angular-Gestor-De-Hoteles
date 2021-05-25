export class Reservaciones{
    constructor(
        public _id: String,
        public FechaDeReservacion: Date,
        public FechaInicio: Date,
        public FechaSalida: Date,
        public cantidaddedias: Number,
        public IdHotel: String,
        public IdHabitacion: String,
        public IdEvento: String,
        public IdUsuario: String,
        public valor: Number,
        public cancelado: String
    ){}
}
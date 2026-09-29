// Datos de ejemplo del dashboard AuraSense.
// Los nombres de los campos siguen la tabla "mediciones" de la base de datos
// (fecha_hora, temperatura, humedad, presion, viento_velocidad,
// viento_direccion, lluvia) más los campos opcionales de la sonda de agua.
// Cuando exista la API, este archivo se reemplaza por un fetch("/api/mediciones").

const nodo = {
    id: 1,
    nombre: "Nodo 01",
    ubicacion: "Valle Central",
    cuenca: "Cuenca Río Verde"
};

const mediciones = [
    { id: 6, fecha_hora: "2026-09-28T14:28:02", temperatura: 23.4, humedad: 68, presion: 1013.2, viento_velocidad: 14.8, viento_direccion: "NE",  lluvia: 2.4, ph: 7.21, conductividad: 415, estado: "Normal" },
    { id: 5, fecha_hora: "2026-09-28T14:15:00", temperatura: 23.6, humedad: 67, presion: 1013.1, viento_velocidad: 15.2, viento_direccion: "NE",  lluvia: 2.4, ph: 7.20, conductividad: 416, estado: "OK" },
    { id: 4, fecha_hora: "2026-09-28T14:00:00", temperatura: 24.1, humedad: 65, presion: 1013.0, viento_velocidad: 16.0, viento_direccion: "ENE", lluvia: 2.4, ph: 7.19, conductividad: 414, estado: "OK" },
    { id: 3, fecha_hora: "2026-09-28T13:45:00", temperatura: 24.8, humedad: 63, presion: 1012.9, viento_velocidad: 18.4, viento_direccion: "E",   lluvia: 2.4, ph: 7.18, conductividad: 412, estado: "Normal" },
    { id: 2, fecha_hora: "2026-09-28T13:30:00", temperatura: 25.3, humedad: 61, presion: 1012.8, viento_velocidad: 19.1, viento_direccion: "E",   lluvia: 2.4, ph: 7.18, conductividad: 411, estado: "OK" },
    { id: 1, fecha_hora: "2026-09-28T13:15:00", temperatura: 25.8, humedad: 59, presion: 1012.7, viento_velocidad: 17.6, viento_direccion: "ENE", lluvia: 2.4, ph: 7.17, conductividad: 410, estado: "Normal" }
];
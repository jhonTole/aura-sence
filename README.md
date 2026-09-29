# AuraSense

Estación de monitoreo ambiental basada en Raspberry Pi, desarrollada en conjunto entre Ingeniería Electrónica (hardware y sensores) e Ingeniería de Sistemas (software, base de datos y página web).

> **Estado del proyecto:** en desarrollo. La interfaz web es un prototipo estático con datos de ejemplo y el programa de la Raspberry Pi aún es un esqueleto. Ver [Estado actual](#estado-actual) y [Hoja de ruta](#hoja-de-ruta).

---

## Descripción

La estación mide variables atmosféricas y, si es posible, calidad de agua. Los datos se toman con una Raspberry Pi 3B+, se guardan localmente y se envían a un servidor para visualizarlos en una página web.

**Variables monitoreadas**

| Variable | Sensor de referencia |
|---|---|
| Temperatura | DHT22 |
| Humedad | DHT22 |
| Presión atmosférica | BMP280 |
| Velocidad y dirección del viento | Anemómetro / veleta |
| Lluvia | Pluviómetro |
| Calidad de agua (opcional) | Sondas de pH y conductividad |

Los sensores exactos dependen de lo que esté disponible en el hardware.

---

## Arquitectura

```
[Sensores] → [Raspberry Pi 3B+] → [Base de datos local (SQLite)]
                                          │
                                          ▼  (opcional)
                                 [API / Servidor]
                                          │
                                          ▼
                                 [Dashboard web]
```

---

## Estructura del repositorio

```
aura-sence/
├── README.md
├── Requerimientos_proyecto_monitoreo.pdf   # Requerimientos originales
├── ProyectoRasperry/
│   └── Main.py                             # Programa de lectura de sensores
└── resources/
    ├── html/
    │   └── index.html                      # Dashboard
    ├── css/
    │   └── style.css                       # Estilos base
    └── javascript/
        └── tailiwind.js                    # Configuración de Tailwind (tema)
```

---

## Tecnologías

- **Hardware:** Raspberry Pi 3B+, sensores ambientales, energía solar con batería
- **Backend / adquisición:** Python 3
- **Base de datos:** SQLite (o MySQL)
- **Frontend:** HTML, CSS, JavaScript y [Tailwind CSS](https://tailwindcss.com/) vía CDN
- **Tipografías e íconos:** Google Fonts (Geist, Manrope) y Material Symbols

---

## Cómo ejecutar el dashboard

No requiere instalación. Abre el archivo en el navegador:

```
resources/html/index.html
```

O con un servidor local:

```bash
# Desde la carpeta resources/
python -m http.server 8000
# Luego abre http://localhost:8000/html/index.html
```

Requiere conexión a internet para cargar Tailwind, las fuentes y los íconos desde CDN.

### Rutas en `index.html`

Como el HTML está en `resources/html/`, los recursos se enlazan con `../`:

```html
<link rel="stylesheet" href="../css/style.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="../javascript/tailiwind.js"></script>
```

El CDN de Tailwind debe cargarse **antes** de `tailiwind.js`, porque este último asigna `tailwind.config`.

---

## Programa de la Raspberry Pi

Ubicado en `ProyectoRasperry/Main.py`. Objetivo:

1. Leer los sensores cada 2 a 5 minutos.
2. Guardar cada medición en la base de datos local.
3. Manejar errores cuando un sensor no responde.
4. (Opcional) Enviar los datos a un servidor.

### Esquema de la base de datos

Tabla `mediciones`:

| Campo | Descripción |
|---|---|
| `id` | Número de la medición |
| `fecha_hora` | Día y hora de la medición |
| `temperatura` | Valor de temperatura |
| `humedad` | Valor de humedad |
| `presion` | Valor de presión |
| `viento_velocidad` | Velocidad del viento |
| `viento_direccion` | Dirección del viento |
| `lluvia` | Cantidad de lluvia |

Si se incorporan las sondas de agua, se pueden añadir `ph` y `conductividad`, que el dashboard ya contempla.

### Configuración de la Raspberry Pi

- Instalar Raspberry Pi OS y configurar usuario, contraseña, red y hora.
- Habilitar I2C, UART y USB.
- Configurar el inicio automático del programa al encender.

---

## Estado actual

| Componente | Estado |
|---|---|
| Dashboard (maqueta visual) | Hecho, con datos de ejemplo fijos |
| Interacción del dashboard (filtros, pestañas, botones) | Solo cambia el estilo, no filtra datos |
| Gráfica de serie temporal | SVG estático |
| Lectura de sensores (`Main.py`) | Pendiente (solo esqueleto) |
| Base de datos SQLite | Pendiente |
| API / servidor | Pendiente (opcional) |
| Diagrama de conexión de sensores | Pendiente |

---

## Hoja de ruta

- [ ] Configurar la Raspberry Pi e iniciar el programa al encender
- [ ] Leer sensores con manejo de errores
- [ ] Crear la base de datos y guardar las mediciones
- [ ] Conectar el dashboard a datos reales (tabla, tarjetas y gráfica)
- [ ] Implementar los filtros: 24 horas, semana, 30 días y rango personalizado
- [ ] Implementar la exportación a CSV
- [ ] (Opcional) API y envío de datos al servidor
- [ ] Diagrama de conexión de sensores
- [ ] Guía de instalación completa

---

## Flujo de trabajo con Git

```bash
git pull                              # Traer cambios
git add .
git commit -m "Descripción del cambio"
git push
```

---

## Equipo

Proyecto desarrollado por estudiantes de Ingeniería Electrónica e Ingeniería de Sistemas de la Universidad Santo Tomás.

- Jhon Tole (Ingeniería de Sistemas)

## Licencia

Por definir.# AuraSense

Estación de monitoreo ambiental basada en Raspberry Pi, desarrollada en conjunto entre Ingeniería Electrónica (hardware y sensores) e Ingeniería de Sistemas (software, base de datos y página web).

> **Estado del proyecto:** en desarrollo. La interfaz web es un prototipo estático con datos de ejemplo y el programa de la Raspberry Pi aún es un esqueleto. Ver [Estado actual](#estado-actual) y [Hoja de ruta](#hoja-de-ruta).

---

## Descripción

La estación mide variables atmosféricas y, si es posible, calidad de agua. Los datos se toman con una Raspberry Pi 3B+, se guardan localmente y se envían a un servidor para visualizarlos en una página web.

**Variables monitoreadas**

| Variable | Sensor de referencia |
|---|---|
| Temperatura | DHT22 |
| Humedad | DHT22 |
| Presión atmosférica | BMP280 |
| Velocidad y dirección del viento | Anemómetro / veleta |
| Lluvia | Pluviómetro |
| Calidad de agua (opcional) | Sondas de pH y conductividad |

Los sensores exactos dependen de lo que esté disponible en el hardware.

---

## Arquitectura

```
[Sensores] → [Raspberry Pi 3B+] → [Base de datos local (SQLite)]
                                          │
                                          ▼  (opcional)
                                 [API / Servidor]
                                          │
                                          ▼
                                 [Dashboard web]
```

---

## Estructura del repositorio

```
aura-sence/
├── README.md
├── Requerimientos_proyecto_monitoreo.pdf   # Requerimientos originales
├── ProyectoRasperry/
│   └── Main.py                             # Programa de lectura de sensores
└── resources/
    ├── html/
    │   └── index.html                      # Dashboard
    ├── css/
    │   └── style.css                       # Estilos base
    └── javascript/
        └── tailiwind.js                    # Configuración de Tailwind (tema)
```

---

## Tecnologías

- **Hardware:** Raspberry Pi 3B+, sensores ambientales, energía solar con batería
- **Backend / adquisición:** Python 3
- **Base de datos:** SQLite (o MySQL)
- **Frontend:** HTML, CSS, JavaScript y [Tailwind CSS](https://tailwindcss.com/) vía CDN
- **Tipografías e íconos:** Google Fonts (Geist, Manrope) y Material Symbols

---

## Cómo ejecutar el dashboard

No requiere instalación. Abre el archivo en el navegador:

```
resources/html/index.html
```

O con un servidor local:

```bash
# Desde la carpeta resources/
python -m http.server 8000
# Luego abre http://localhost:8000/html/index.html
```

Requiere conexión a internet para cargar Tailwind, las fuentes y los íconos desde CDN.

### Rutas en `index.html`

Como el HTML está en `resources/html/`, los recursos se enlazan con `../`:

```html
<link rel="stylesheet" href="../css/style.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="../javascript/tailiwind.js"></script>
```

El CDN de Tailwind debe cargarse **antes** de `tailiwind.js`, porque este último asigna `tailwind.config`.

---

## Programa de la Raspberry Pi

Ubicado en `ProyectoRasperry/Main.py`. Objetivo:

1. Leer los sensores cada 2 a 5 minutos.
2. Guardar cada medición en la base de datos local.
3. Manejar errores cuando un sensor no responde.
4. (Opcional) Enviar los datos a un servidor.

### Esquema de la base de datos

Tabla `mediciones`:

| Campo | Descripción |
|---|---|
| `id` | Número de la medición |
| `fecha_hora` | Día y hora de la medición |
| `temperatura` | Valor de temperatura |
| `humedad` | Valor de humedad |
| `presion` | Valor de presión |
| `viento_velocidad` | Velocidad del viento |
| `viento_direccion` | Dirección del viento |
| `lluvia` | Cantidad de lluvia |

Si se incorporan las sondas de agua, se pueden añadir `ph` y `conductividad`, que el dashboard ya contempla.

### Configuración de la Raspberry Pi

- Instalar Raspberry Pi OS y configurar usuario, contraseña, red y hora.
- Habilitar I2C, UART y USB.
- Configurar el inicio automático del programa al encender.

---

## Estado actual

| Componente | Estado |
|---|---|
| Dashboard (maqueta visual) | Hecho, con datos de ejemplo fijos |
| Interacción del dashboard (filtros, pestañas, botones) | Solo cambia el estilo, no filtra datos |
| Gráfica de serie temporal | SVG estático |
| Lectura de sensores (`Main.py`) | Pendiente (solo esqueleto) |
| Base de datos SQLite | Pendiente |
| API / servidor | Pendiente (opcional) |
| Diagrama de conexión de sensores | Pendiente |

---

## Hoja de ruta

- [ ] Configurar la Raspberry Pi e iniciar el programa al encender
- [ ] Leer sensores con manejo de errores
- [ ] Crear la base de datos y guardar las mediciones
- [ ] Conectar el dashboard a datos reales (tabla, tarjetas y gráfica)
- [ ] Implementar los filtros: 24 horas, semana, 30 días y rango personalizado
- [ ] Implementar la exportación a CSV
- [ ] (Opcional) API y envío de datos al servidor
- [ ] Diagrama de conexión de sensores
- [ ] Guía de instalación completa

---

## Flujo de trabajo con Git

```bash
git pull                              # Traer cambios
git add .
git commit -m "Descripción del cambio"
git push
```

---

## Equipo

Proyecto desarrollado por estudiantes de Ingeniería Electrónica e Ingeniería de Sistemas de la Universidad Santo Tomás.

- Jhon Tole (Ingeniería de Sistemas)

## Licencia

Por definir.
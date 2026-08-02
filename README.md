# Chatbot Clínica HealthyVal

Plugin de WordPress desarrollado para HealthyVal que incorpora un asistente guiado, multilingüe y adaptado a los servicios de la clínica.

El chatbot permite orientar al usuario mediante categorías, mostrar información práctica, personalizar algunos mensajes con su nombre y facilitar el contacto con la clínica a través de Doctoralia, WhatsApp, teléfono, correo electrónico, mapas y redes sociales.

---

# Estado actual

El proyecto dispone actualmente de una estructura funcional para la navegación general del chatbot.

Las categorías principales ya funcionan y sus pantallas están preparadas. Algunas de las pantallas específicas de tratamientos todavía están pendientes de incorporar su contenido definitivo.

Actualmente el chatbot ya dispone de:

- Navegación completa entre pantallas.
- Sistema de traducciones.
- Gestión del estado del usuario.
- Personalización mediante nombre.
- Persistencia temporal mediante Session Storage.
- Integración con Doctoralia.
- Integración con WhatsApp contextual.
- Accesibilidad mejorada.
- Diseño responsive.

---

# Funciones actuales

## Idiomas

- Valenciano
- Castellano
- Inglés

---

## Usuario

- Nombre opcional.
- Continuar sin indicar el nombre.
- Personalización de mensajes.
- Validación del nombre.
- Recuperación automática durante la sesión.

---

## Navegación

- Pantalla de idioma.
- Pantalla de nombre.
- Menú principal.
- Pantalla de Medicina estética.
- Pantalla de Recuperación y movimiento.
- Pantalla de Salud y bienestar.
- Pantalla de Precios.
- Pantalla de Horarios.
- Pantalla de Ubicación.
- Pantalla de Contacto.

---

## Medicina estética

Categoría preparada con:

- Facial y armonización.
- Piel y luminosidad.
- Tratamientos corporales.
- Medicina capilar.
- Láser de plasma.

---

## Recuperación y movimiento

Categoría preparada con:

- Fisioterapia.
- Traumatología.
- Medicina regenerativa.
- Pilates terapéutico.
- Entrenamiento terapéutico.

---

## Salud y bienestar

Categoría preparada con:

- Podología.
- Pérdida de peso.
- Psicología.
- Valoración integral.
- Prevención y seguimiento.

---

## Información práctica

- Horarios.
- Ubicación.
- Google Maps.
- Apple Maps.
- Teléfono.
- WhatsApp.
- Correo electrónico.
- Redes sociales.
- Doctoralia.
- Información de precios.
- Solicitud de valoración.

---

## Estado temporal del usuario

Durante la sesión se conserva automáticamente:

- Idioma.
- Nombre.
- Categoría seleccionada.
- Tratamiento seleccionado.

No se guarda información en la base de datos de WordPress.

---

# WhatsApp contextual

Los enlaces de WhatsApp ya están preparados para generar mensajes diferentes según el contexto desde el que se pulse.

Actualmente pueden diferenciar:

- Contacto
- Medicina estética
- Recuperación y movimiento
- Salud y bienestar
- Horarios
- Ubicación
- Precios

El mensaje puede incluir automáticamente:

- nombre del usuario
- categoría
- tratamiento
- idioma

Ejemplo:

```
Hola, soy Alejandro.

Me interesa Fisioterapia y me gustaría recibir más información o solicitar una cita.
```

---

# Tecnologías

- PHP 8.1+
- JavaScript (Vanilla JS)
- CSS3
- HTML5
- SVG
- WordPress 6.5+
- sessionStorage

---

# Arquitectura del proyecto

```
chatbot-clinica/
│
├── chatbot-clinica.php
├── README.md
│
├── public/
│   │
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   │
│   └── js/
│       ├── core.js
│       ├── state.js
│       ├── navigation.js
│       ├── translations.js
│       └── layout.js
│
└── views/
    ├── pantalla-idioma.php
    ├── pantalla-nombre.php
    ├── pantalla-menu.php
    ├── pantalla-contacto.php
    ├── pantalla-horarios.php
    ├── pantalla-ubicacion.php
    ├── pantalla-precios.php
    ├── pantalla-medicina-estetica.php
    ├── pantalla-recuperacion.php
    ├── pantalla-salud.php
    │
    ├── pantalla-facial-armonizacion.php
    ├── pantalla-piel-luminosidad.php
    ├── pantalla-corporales.php
    ├── pantalla-capilar.php
    └── pantalla-laser-plasma.php
```

---

# Organización del JavaScript

## core.js

Responsable del funcionamiento general.

Gestiona:

- apertura del chatbot
- cierre
- cambio de pantallas
- control del foco
- accesibilidad
- elementos principales

---

## state.js

Gestiona el estado temporal del usuario.

Incluye:

- idioma
- nombre
- categoría
- tratamiento
- Session Storage
- limpieza de sesión

---

## navigation.js

Gestiona toda la navegación.

Incluye:

- botones
- formularios
- cambio entre pantallas
- Doctoralia
- WhatsApp
- categorías
- tratamientos
- validaciones

---

## translations.js

Contiene toda la traducción del chatbot.

Actualmente traduce:

- interfaz
- botones
- preguntas
- menús
- horarios
- ubicación
- contacto
- medicina estética
- recuperación
- salud
- precios

Además personaliza automáticamente determinados textos con el nombre del usuario.

---

## layout.js

Controla:

- apertura
- cierre
- overlay
- animaciones
- comportamiento visual del chatbot

---

# Organización de las vistas

Cada pantalla del chatbot está completamente separada.

Esto permite:

- modificar una pantalla sin afectar a las demás
- reutilizar componentes
- mantener el código limpio
- facilitar futuras ampliaciones

---

# Accesibilidad

Actualmente el chatbot incorpora:

- botones HTML nativos
- navegación mediante teclado
- foco visible
- etiquetas ARIA
- role="alert"
- aria-hidden
- aria-labelledby
- aria-label
- texto oculto para lectores de pantalla
- compatibilidad con prefers-reduced-motion

---

# Integraciones

## Doctoralia

Los botones de cita y valoración ya abren Doctoralia.

En futuras versiones podrán abrir la especialidad correspondiente.

---

## WhatsApp

Los mensajes se generan automáticamente según:

- pantalla
- categoría
- tratamiento
- nombre
- idioma

---

## Mapas

Compatibilidad con:

- Google Maps
- Apple Maps

---

## Redes sociales

Integradas:

- Instagram
- Facebook
- LinkedIn
- TikTok
- YouTube

---

# Información pendiente

Todavía queda incorporar la información clínica definitiva de cada tratamiento.

Cada tratamiento incluirá:

- descripción
- objetivo
- indicaciones
- duración
- sesiones
- recuperación
- resultados
- contraindicaciones
- recomendaciones
- precio
- profesional responsable
- imágenes
- botón de cita

---

# Próximas funcionalidades

## Tratamientos

- Pantallas completas para cada tratamiento.
- Información médica detallada.
- Fotografías.
- FAQs.
- Botón específico de cita.
- WhatsApp específico.

---

## Panel de administración

Configuración desde WordPress de:

- tratamientos
- horarios
- teléfonos
- correo
- WhatsApp
- Google Maps
- Apple Maps
- redes sociales
- Doctoralia
- colores
- textos
- traducciones

---

## Reservas

- Doctoralia por tratamiento.
- WhatsApp Business.
- Reserva online.
- Formularios personalizados.

---

## Estadísticas

- consultas más realizadas
- categorías más visitadas
- tratamientos más consultados
- clics en Doctoralia
- clics en WhatsApp

---

## Configuración

- Exportación.
- Importación.
- Copias de seguridad.
- Roles y permisos.

---

# Privacidad

Actualmente:

- no se guarda información en WordPress.
- no existe base de datos propia.
- únicamente se utiliza Session Storage.
- toda la información desaparece al finalizar la sesión.

---

# Estado del proyecto

El chatbot dispone actualmente de una base sólida y completamente modular.

Ya están implementados:

- arquitectura completa
- navegación
- traducciones
- accesibilidad
- persistencia temporal
- categorías
- integración con Doctoralia
- integración con WhatsApp
- horarios
- ubicación
- contacto
- precios

La siguiente fase consistirá en desarrollar todas las pantallas individuales de tratamientos para convertir el chatbot en un asistente completo de HealthyVal.
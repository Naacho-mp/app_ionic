# CGE - Aplicación Móvil 
Aplicación móvil desarrollada en Ionic + Angular para que los clientes de CGE puedan visualizar sus medidores, lecturas de consumo, y boletas desde sus dispositivos móviles.

## Descripción
CGE App permite a los clientes registrados en la plataforma web de CGE acceder a su información de sus medidores, el consumo de los mismos, y las boletas de forma rápida y sencilla desde cualquier dispositivo móvil.

## Instrucciones para la puesta en funcionamiento del Proyecto Móvil CGE
- Descargar o clonar el proyecto via GitHub a través del siguiente Link: https://github.com/Naacho-mp/app_ionic
- Abrir el proyecto en el IDE a elección
- Ubicarse en la raiz del proyecto, e ingresar la instruccion "npm install" para instalar dependencias necesarias.
- Configurar la url de la api a consumir
- Configurar los archivos service para conectar con la api. 
- Correr el proyecto mediante la instruccion "ionic serve"


## Funcionalidades Principales
- Inicio de Sesión: Autenticación de clientes registrados en la plataforma web de CGE.
- Primer Login Seguro: Al iniciar sesión por primera vez, se asigna una contraseña por defecto (0000) y se redirige automáticamente al cambio de contraseña.
- Cambio de Contraseña: Permite actualizar la contraseña de forma segura.
- Visualización de Medidores: Consulta de todos los medidores asociados al cliente logueado.
- Lecturas de Consumo: Visualización del historial de lecturas de cada medidor asociado al cliente.
- Visualización de Boletas: Los clientes podrán visualizar sus boletas filtradas por mes y año, y descargarlas de igual forma. 


## Tecnologías Utilizadas
- Framework: Ionic Framework
- Frontend: Angular
- Backend API: FastAPI (Python)

## Requisitos Previos
A instalar antes de iniciar:

- Node.js 
- npm (v8 o superior)
- Ionic CLI (npm install -g @ionic/cli)
- Angular CLI 

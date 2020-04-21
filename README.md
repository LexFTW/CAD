---
# Control y Automatización de la Diabetes (CAD)
<img src="https://github.com/LexFTW/CAD/blob/master/images/CAD_Logo.svg" width="50%"/>

<p align="center">
  <a href="https://travis-ci.com/LexFTW/Proyecto-de-Sintesis" alt="Build">
    <img src="https://travis-ci.com/LexFTW/Proyecto-de-Sintesis.svg?token=MqDraeHyBKs8z6NLK61F&branch=master" />
  </a>
  <a href="#" alt="GitHub Followers">
    <img src="https://img.shields.io/github/followers/LexFTW?style=social" />
  </a>
  <a href="#" alt="NPM Versión">
    <img src="https://img.shields.io/badge/npm-6.4.1-blue" />
  </a>
  <a href="#" alt="React Native Versión">
    <img src="https://img.shields.io/badge/react--native-0.61.4-green" />
  </a>
  <a href="#" alt="React Native CLI Versión">
    <img src="https://img.shields.io/badge/react--native--cli-2.0.1-green" />
  </a>
  <a href='https://coveralls.io/github/LexFTW/Proyecto-de-Sintesis?branch=master'>
    <img src='https://coveralls.io/repos/github/LexFTW/Proyecto-de-Sintesis/badge.svg?branch=master' alt='Coverage Status' />
  </a>
</p>

## Tabla de Contenidos
En está sección podrás usarla como referencia de destino.

- [Descripción](#descripción)
- [Herramientas](#herramientas)
- [Objetivos](#objetivos)
- [Como utilizar](#how-to-use)
- [Referencias](#references)

---

## Descripción
CAD (Control y Automatización de la Diabetes) es un proyecto que busca establecer un sistema que permita al usuario tener un control más exacto y automatico sobre su nivel de glucosa en sangre en el día a día. En este proyecto constará la parte de *software*, la idea es que en un futuro añadir la parte *hardware* donde a partir de la configuración establecida y una serie de reglas establecidas por el usuario, el *hardware* permita regular la glucosa automaticamente.

---

## Herramientas
- Lenguaje de Programación: React Nativo.
- Base de datos NoSQL: Firebase.
- API/s y Framework/s: 
  - Expo CLI.
	- NFC Manage.
	- Chart Kit.
	- Firebase Mailing / SMS.
- Tarjetas de NFC.

- Opcionales:
	- Login con Huella Dactilar SHA1.

---
## Wireframes
<img src="https://github.com/LexFTW/CAD/blob/master/images/Wireframe.png" />

## Objetivos
- [ ] Módulo de Login con Google Account.
> Este módulo permitirá acceder al aplicación con una cuenta de Google.

- [ ] Módulo de MultiPerfil.
> Este módulo permitirá a un usuario tener más de un perfil para gestionar a diferentes personas. Este módulo será muy útil para familias que tengan a más de una persona diabetica.

- [ ] Módulo de Lectura por NFC.
> Este módulo gestionará la lectura de la parte *hardware* y obtendrá la información del nivel de glucosa.

- [ ] Módulo de Estadistica e Historial.
> Este módulo servirá para poder tener un control e historial de los niveles de glucosa.

- [ ] Módulo de Automatización y configuración de reglas.
> Este módulo consiste en una serie de configuraciones y reglas establecidas por el propio usuario con la finalidad de que la aplicación pueda, a partir del dato leído por NFC, indicar que cantidad de insulina se debe de añadir la persona.

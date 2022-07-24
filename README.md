# zinli tech lead

1. [“Houston, we have a problem!”](https://github.com/WilliamsMaldonado/zinli/blob/main/lambda_houston/README.md)
2. [“Necesitamos esta data? No lo sé, guárdala y luego decidimos”](https://github.com/WilliamsMaldonado/zinli/blob/main/lambda_backup/README.md)
3. [“Aló! Yo aquí, allá quién?”](https://github.com/WilliamsMaldonado/zinli/blob/main/ms_mutual/README.md)



[![node](https://img.shields.io/badge/node-v12.X-yellow.svg)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-v6.13.X-red.svg)](https://www.npmjs.com/)
[![typescript](https://img.shields.io/npm/types/typescript)](https://www.typescriptlang.org/)

>Proyeccto en typescript
>

## Prerequisitos

Necesitas tener instaldo en el computador

* [Git](http://git-scm.com/)
* [Node](https://nodejs.org)
* [NPM](https://www.npmjs.com/)

## Instalación

* `git clone git@github.com/WilliamsMaldonado/zinli.git` 
* Ingresar al proyecto `cd zinli`

## Dependencias

correr `npm install` para instalar las dependencicas del proyeccto
* [inversify](http://inversify.io/)
* [reflect-metadata](https://rbuckton.github.io/reflect-metadata/)
* [aws-sdk](https://aws.amazon.com/es/tools/)

## Build

correr `npm run build` para construir el proyecto. El archivo .zip contiene el proyecto con sus dependencias necesarias en la carpeta `dist/` de cada lambda .

## Correr pruebas unitarias

correr `npm run test` para ejecutar las pruebas con [Jasmine](https://jasmine.github.io/).

correr `npm run coverage` para ejecutar las pruebas con cobertura, la cobertura se encuentra en la carpeta `coverage/lcov-report/index.html`


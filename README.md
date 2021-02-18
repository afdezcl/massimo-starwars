# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

## Stack
* Angular 11
* NGRxStore (as Redux pattern)
* NodeJS (Authentication API)
* Swapi Starwars (https://swapi.dev/)
* Docker (with a MongoDB image)
* Bootstrap (as CSS framework)
* Husky (as hooks pre-commit & pre-push)
* TSLint
* Jest (for unit tests)
* Cypress (for acceptance tests)

## How to run project in local
1. Go to `massimo-backend` and run `docker-compose up` to launch MongoDB docker.

2. Go to `massimo-backend` and run `npm run start` to launch backend authentication API.

2. Go to `massimo-frontend` and run `ng serve -o` to launch frontend application in `http://localhost:4200`

:warning: NOTE: It is advisable run `npm install` in `massimo-backend` and `massimo-frontend` folder to install all dependencies at each project.

## How to launch unit tests in frontend project
* Go to `massimo-frontend` and run `npm run test` to launch frontend unit tests.

## Acceptance tests
Acceptance tests have been made with Cypress. There are simple tests to testing each feature of the application. There are not exhautive acceptance tests (due to time).

* Go to `massimo-acceptance-tests` and run `npm run test` to launch acceptance tests in headless mode.

* Go to `massimo-acceptance-tests` and run `npm run test-watch` to launch acceptance tests in window mode.

:warning: NOTE: It is advisable run `npm install` in `massimo-acceptance-tests` folder to install all dependencies in this project.

## Commit naming convention
A commit must be named following this convention:

* Start with emoji from (https://gitmoji.dev/) as TAG, follow of  MASS-[ISSUE_NUMBER]:   [DESCRIPTION]
* For example: `:bug: MASS-9: Show alert when login is wrong`

## Branch naming convention

A branch must be named following this convention:

* Start with MASS-[ISSUE_NUMBER]_[SHORT_DESCRIPTION]
* For example: `MASS-9_login_page`

## NOTES
All this project has been divide in specific issues. Each issue is a BRANCH. Each branch is a PULL REQUEST to development branch. If all is correct, appear a new pull request from development to master branch.


## Improve Performance (Task 7)
It has been implement a cache in frontend, but it would be interesting implement another cache in backend (to avoid request to DB, although in this case we are using a free API to this request). 

I think that the problem in frontend cache is 'When we invalidate this cache?'. For example, if a image has been changed. We would need for example an event from backend to tell the frontend that something has been changed (and update frontend cache). We could use SSE (Server Sent Events).

On the other hand, implement a CDN it would be interesting too (between frontend and backend).

In resume, there are different ways to resolve this problem.


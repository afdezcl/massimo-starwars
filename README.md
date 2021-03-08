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


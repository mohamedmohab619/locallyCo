# Locallyco Frontend

## Quick Start (development)
- make sure you have `node` installed on you machine.
- run `npm install`
- run the application on your machine:
    - run `npm run dev`
- run the this application (frontend) with backend and database using docker:
    - make sure you have `docker` installed
    - make sure you're following the recommended file structure
    - change directory to `backend`
    - run `docker compose --profile frontend up -d --build`
    - for more details and useful instruction, read the `README.md` file in the [backend repository](https://github.com/dev1joe/locallyco-api/blob/main/README.md)

## Recommended File Structure
```
ozyra
├── backend/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   └── ...
└── frontend/
    ├── Dockerfile
    ├── package.json
    └── ...
```
**where the backend directory is a clone of the [backend repository](https://github.com/dev1joe/locallyco-api.git) and the frontend directory is a clone of this repository**
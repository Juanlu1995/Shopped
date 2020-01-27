# Shopped
Shopped is the tool for small (or not than small) shops of your neighborhood.

- [About](#about)
- [Installation](#installation)
- [Use](#use)

## About
The project is composed with MERN stack and doesn't need high resources to work well.

## Installation
The project is compose with a back, front and database. The database is in MongoDB and the frontend and backend in Node.js.
To install it is needed those submodules ([frontend](https://github.com/Juanlu1995/Shopped-frontend) and [backend](https://github.com/Juanlu1995/Shopped-backend)).
With the project is provided the configuration to use with docker-compose, who create the database and the images with the frontend and backend. Is provided too mongo-express in this docker-compose to make easier view the data of the database.

#### Configuration

#### Installation
So, to install
1. Clone the repository:`git clone https://github.com/Juanlu1995/Shopped`
2. Clone the submodule: `git submodule update --remote --recursive`
3. Build and up docker-compose: `docker-compose build && docker-compose up -d`
3.1. *If you want to see the logs of the docker-compose you can use `docker-compose logs -f`* 
4. Go to the ip who you choose for the frontend and... ***Évoilà!***
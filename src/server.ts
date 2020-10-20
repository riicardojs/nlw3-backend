import express from 'express';
import './database/connection'

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
//Rota = conjunto
//Recursp = usuario

//Métodos HTTP = GET, POST, PUT, DELETE

//GET = Buscar uma informação (Lista, item)
//Post = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Parânmetros

// Query Parms: http://localhost:3333/user?search=ricardo
// Route Parms: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

//Driver nativo, Query Builder (Knext mais conhecido), ORM (Object Relational Mapping)




//localhost:3333
app.listen(3333);

import express from 'express';
import {PORT} from './config.js';

import pacientesRoutes from './routes/pacientes.routes.js'
import turnosRoutes from './routes/turnoPaciente.routes.js'

const app = express();



app.listen(PORT)
console.log('Server is running')

// middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(pacientesRoutes)

app.use(turnosRoutes)

export default app

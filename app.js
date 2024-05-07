import express, { json } from 'express'
import { createProjectRouter } from './routes/project.js'

export const createApp = ({ projectModel }) => {
    const app = express()
    app.use(json())
    app.disable('x-powered-by')

    app.use('/projects', createProjectRouter({ projectModel }))

    const PORT = process.env.PORT ?? 1234

    app.listen(PORT, () => {
        console.log(`Server listening on port http://localhost:${PORT}`)
    })
}
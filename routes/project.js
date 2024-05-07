import { Router } from 'express'
import { ProjectController } from '../controllers/projects.js'

export const createProjectRouter = ({ projectModel }) => {
    const projectsRouter = Router()

    const projectController = new ProjectController({ projectModel })

    projectsRouter.get('/', projectController.getAll)

    return projectsRouter
}
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const projects = require('../projects.json')

export class ProjectModel {
    static getAll = async () => {
        return projects
    }
}
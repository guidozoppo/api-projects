export class ProjectController {
    constructor ({ projectModel }) {
      this.projectModel = projectModel
    }

    getAll = async (req, res) => {
        const projects = await this.projectModel.getAll()
        res.json(projects)
    }
}
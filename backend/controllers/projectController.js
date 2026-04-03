import Project from "../models/projectModel.js";

export const createProject = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Project title is required" });
    }

    const project = await Project.create({
      title,
      createdBy: req.user.userId
    });

    return res.json({ success: true, message: "Project created successfully", projectId: project._id });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to create project", error: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user.userId }).sort({ createdAt: -1 });
    return res.json({ success: true, message: "Projects fetched successfully", projects });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch projects", error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { projId, progId } = req.body;
    const projectId = projId || progId;

    if (!projectId) {
      return res.status(400).json({ success: false, message: "Project id is required" });
    }

    const deleted = await Project.findOneAndDelete({ _id: projectId, createdBy: req.user.userId });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found!" });
    }

    return res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to delete project", error: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { projId } = req.body;

    if (!projId) {
      return res.status(400).json({ success: false, message: "Project id is required" });
    }

    const project = await Project.findOne({ _id: projId, createdBy: req.user.userId });

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found!" });
    }

    return res.json({ success: true, message: "Project fetched successfully", project });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch project", error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { htmlCode, cssCode, jsCode, projId } = req.body;

    if (!projId) {
      return res.status(400).json({ success: false, message: "Project id is required" });
    }

    const project = await Project.findOneAndUpdate(
      { _id: projId, createdBy: req.user.userId },
      { htmlCode, cssCode, jsCode },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found!" });
    }

    return res.json({ success: true, message: "Project updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to update project", error: error.message });
  }
};

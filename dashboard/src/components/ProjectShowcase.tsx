import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProjectShowcase.css"; 

import notesApp from "../assets/notes-app.png";
import textStyler from "../assets/text-styler.png";

interface Project {
  id: number;
  name: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, name: "Notes App", image: notesApp },
  { id: 2, name: "Text Styler", image: textStyler },
//   { id: 2, name: "Text Styler", image: textStyler },
];

const ProjectShowcase: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="project-showcase-container">
      <h2 className="text-center mb-4">My React Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="project-card"
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                setSelected(selected === project.id ? null : project.id)
              }
            >
              <h4 className="mb-0">{project.name}</h4>
              {selected === project.id && (
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="mt-3 w-100 rounded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

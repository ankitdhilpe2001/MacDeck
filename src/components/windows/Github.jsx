import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const Gitcard = ({data = {id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "",}}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />

      <h1>{data.title}</h1>

      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noreferrer">
          Repository
        </a>

        <a href={data.demoLink} target="_blank" rel="noreferrer">
          Demo Link
        </a>
      </div>
    </div>
  );
};

const Github = ({ onClose}) => {
  return (
    <MacWindow onClose={onClose} >
      <div className="cards">
        {githubData.map((project) => (
          <Gitcard key={project.id} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;


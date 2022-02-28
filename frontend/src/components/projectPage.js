import axios from 'axios';
import * as React from 'react';
import '../css/style.css';
import '../css/projects.css';
import {useParams} from "react-router";

export function ProjectPage(){
    let { id } = useParams();

    React.useEffect(() => {

        axios.get(`http://0.0.0.0/projects/` + id)
            .then(res => {
                const project = res.data;
                setProject(project);
            })
    },[]);

    const [project, setProject] = React.useState(null);

    if (!project) {
        return (
            <p>Loading ...</p>
        )
    }
    return(
        <div className="metadata-container2">
            <h1 className="metadata-text">
                <span>Проект "{project.name}"</span>
            </h1>
            <span>
                {project.description}
            </span>
            <span></span>
            <br/>
            <span></span>
            <br/>
            <span></span>
            <br/>
            <div className="metadata-container3">
            <span className="metadata-text07">
              <span>Количество изображений</span>
              <br/>
              <span></span>
            </span>
                <span className="metadata-text10">{project.images_count}</span>
            </div>
            <div className="metadata-container4">
                <span></span>
                <br/>
                <span></span>
                <br/>
            <span className="metadata-text11">
              <span>Размер мета-данных</span>
              <br/>
              <span></span>
            </span>
                <span>{project.metadata_size} символов</span>
            </div>
            <h1 className="metadata-text15">
                <span className="metadata-text17">Метаданные</span>
            </h1>
            <table>
                <thead>
                <tr>
                    <th>Поле</th>
                    <th>Содержание</th>
                </tr>
                </thead>
                <tbody>
                    {Object.entries(project.metadata).map((pair) => (
                        <tr>
                            <td>{pair[0]}</td>
                            <td>{pair[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

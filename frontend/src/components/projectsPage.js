import axios from 'axios';
import * as React from 'react';
import '../css/style.css';
import '../css/projects.css';
import {Link} from "react-router-dom";

export function ProjectsPage(){
    React.useEffect(() => {
        axios.get(`http://0.0.0.0/projects`)
            .then(res => {
                const projects = res.data.data;
                setProjects(projects);
            })
    },[]);

    const [projects, setProjects] = React.useState([]);

    function getProjects() {
        axios.get(`http://0.0.0.0/projects`)
            .then(res => {
                const projects = res.data.data;
                setProjects(projects);
            })
    }

    function deleteProject(id) {
        axios.delete(`http://0.0.0.0/projects/` + id).then(res => {
            getProjects();
        });
    }

    return(
        <div className="projects-container2">
            <h1>Проекты</h1>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Количество изображений</th>
                        <th>Размер мета-данных</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {projects?.map(project => (
                        <tr>
                            <td><a href={'/projects/' + project.id}>{project.name}</a></td>
                            <td>{project.description}</td>
                            <td>{project.images_count}</td>
                            <td>{project.metadata_size}</td>
                            <td style={{cursor: 'pointer'}}><Link to={'/projects/' + project.id + '/edit'}>Редактировать</Link></td>
                            <td style={{cursor: 'pointer', color: 'red'}} onClick={() => deleteProject(project.id)}>Удалить</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

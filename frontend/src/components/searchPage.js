import axios from 'axios';
import '../css/style.css';
import '../css/search.css';
import * as React from "react";


export function SearchPage() {
    React.useEffect(() => {
        searchProjects('')
        searchMetas('')
    },[]);

    const [projects, setProjects] = React.useState([]);
    const [metas, setMetas] = React.useState([]);

    function searchProjects(query) {
        axios.post(`http://0.0.0.0/projects/search`, {query: query})
        .then(res => {
            const projects = res.data.data;
            setProjects(projects);
        })
    }

    function searchMetas(query) {
        axios.post(`http://0.0.0.0/metadata/search`, {query: query})
            .then(res => {
                const metas = res.data.data;
                setMetas(metas);
            })
    }


    return(
        <div className="search-container2">
            <h1>
                <span>Поиск по проектам</span>
                <br/>
                <span></span>
            </h1>
            <div className="search-container3">
                <input type="text" placeholder="Название проекта" className="input" onChange={evt => searchProjects(evt.target.value)}/>
                <span>
                  <span>Найдено - {projects.length}</span>
                  <br/>
                  <span></span>
                </span>
            </div>

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
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{project.images_count}</td>
                            <td>{project.metadata_size}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="search-text24">
                <span>Поиск по метаданным</span>
                <br/>
                <span></span>
            </h1>
            <div className="search-container6">
                <input type="text" placeholder="Метаданные" className="input" onChange={evt => searchMetas(evt.target.value)}/>
                <span>
                  <span>Найдено - {metas.length}</span>
                  <br/>
                  <span></span>
                </span>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Поле</th>
                    <th>Содержание</th>
                </tr>
                </thead>
                <tbody>
                    {metas?.map(meta => (
                        <tr>
                            <td>{Object.keys(meta)[0]}</td>
                            <td>{Object.values(meta)[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
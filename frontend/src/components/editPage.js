import '../css/style.css'
import '../css/create.css'
import axios from "axios";
import * as React from "react";
import {useParams} from "react-router";

export function EditPage() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [metadata, setMetadata] = React.useState('');

    let { id } = useParams();

    React.useEffect(() => {
        axios.get(`http://0.0.0.0/projects/` + id)
            .then(res => {
                const project = res.data;

                setName(project.name);
                setDescription(project.description);
                setMetadata(JSON.stringify(project.metadata));
            })
    },[]);

    function editProject(event) {
        event.preventDefault();
        axios.post(`http://0.0.0.0/projects/` + id + '/edit', {
            name: name,
            description: description,
            metadata: metadata,
        }).then(res => {
           alert('Успешно отредактировано!')
        })
    }

    return(
        <div className="upload-container2">
        <form className="upload-form" onSubmit={editProject}>
            <input type="text" placeholder="Название" className="input" name="name" value={name} onChange={evt => setName(evt.target.value)}/>
            <input type="text" placeholder="Описание" className="input" name="description" value={description} onChange={evt => setDescription(evt.target.value)}/>
            <br />
            <span className="upload-text">
                Вставьте содержимое файла с метаданными (в формате json)
            </span>
            <textarea
                rows={30}
                cols={40}
                placeholder="Метаданные"
                className="input"
                name="metadata"
                value={metadata}
                onChange={evt => setMetadata(evt.target.value)}
            />
            <button className="upload-button2 button" type="submit">Редактировать</button>
        </form>
        </div>
    );
}
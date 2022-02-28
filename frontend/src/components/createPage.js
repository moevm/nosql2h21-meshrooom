import '../css/style.css'
import '../css/create.css'
import axios from "axios";
import * as React from "react";

export function CreatePage() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [metadata, setMetadata] = React.useState('');

    function createProject(event) {
        event.preventDefault();
        axios.post(`http://0.0.0.0/projects`, {
            name: name,
            description: description,
            metadata: metadata,
        }).then(res => {
           alert('Успешно создано!')
        })
    }

    return(
        <div className="upload-container2">
        <form className="upload-form" onSubmit={createProject}>
            <input type="text" placeholder="Название" className="input" name="name" onChange={evt => setName(evt.target.value)}/>
            <input type="text" placeholder="Описание" className="input" name="description" onChange={evt => setDescription(evt.target.value)}/>
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
                onChange={evt => setMetadata(evt.target.value)}
            />
            <button className="upload-button2 button" type="submit">Создать</button>
        </form>
        </div>
    );
}
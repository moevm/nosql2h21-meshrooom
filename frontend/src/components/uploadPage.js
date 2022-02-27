
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

export function uploadPage(){
    
    function createProject(){
        const project = {
            name: this.state.name,
            description: this.state.description
          };

      axios.post(`http://0.0.0.0/projects/`, {project})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    }

    return(
            <html lang="en">
            <head>
                <title>upload - New Project</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="utf-8" />
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                />
                <link rel="stylesheet" href="./style.css" />
            </head>
            <body>
                <div>
                <link href="./upload.css" rel="stylesheet" />

                <div class="upload-container">
                    <header data-role="Header" class="upload-header">
                    <div class="upload-container1">
                        <div class="upload-nav">
                        <nav
                            class="navigation-links-nav navigation-links-root-class-name9"
                        >
                            <span class="navigation-links-text"><span>Meshroom</span></span>
                            <span class="navigation-links-text1"><span>Проекты</span></span>
                            <span class="navigation-links-text2">
                            <span>Создать проект</span>
                            <button class="upload-button1 button" onClick={createProject()}>Create project</button>
                            </span>
                            <span class="navigation-links-text3">
                            <span>Администрирование</span>
                            </span>
                        </nav>
                        </div>
                    </div>
                    <div class="upload-btn-group">
                        <Button variant='light' as={Link} to={`/searchPage`}>Поиск</Button>
                    </div>
                    </header>
                    <div class="upload-container2">
                    <form class="upload-form">
                        <input type="text" placeholder="название" class="input" name="name"/>
                        <input
                        type="text"
                        placeholder="описание"
                        class="upload-textinput1 input"
                        />
                    </form>
                    <span class="upload-text">
                        <span>Мета-данные</span>
                        <br />
                        <span></span>
                    </span>
                    <button class="upload-button1 button" >Upload file</button>
                    <button class="upload-button2 button">
                        <span>
                        <span>Create</span>
                        <br />
                        <span></span>
                        </span>
                    </button>
                    </div>
                </div>
                </div>
            </body>
            </html>
    );
}
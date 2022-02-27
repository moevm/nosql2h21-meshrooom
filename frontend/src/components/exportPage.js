import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

export function exportPage(){
    
    function download(context){
      axios.get(`http://0.0.0.0/projects/${context}`)
      .then(res => {
        const project = res.data;
        this.setState({ project });
      })
    }

    function upload(context){
        axios.get(`http://0.0.0.0/projects/${context}`)
        .then(res => {
          const project = res.data;
          this.setState({ project });
        })
      }

    return(
            <html lang="en">
            <head>
                <title>export_import - MeshRoom</title>
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
                <link href="./export_import.css" rel="stylesheet" />

                <div class="export_import-container">
                    <header data-role="Header" class="export_import-header">
                    <div class="export_import-container1">
                        <div class="export_import-nav">
                        <nav
                            class="navigation-links-nav navigation-links-root-class-name11"
                        >
                            <span class="navigation-links-text"><span>Meshroom</span></span>
                            <span class="navigation-links-text1"><span>Проекты</span></span>
                            <span class="navigation-links-text2">
                            <span>Создать проект</span>
                            </span>
                            <span class="navigation-links-text3">
                            <span>Администрирование</span>
                            </span>
                        </nav>
                        </div>
                    </div>
                    <div class="export_import-btn-group">
                        <Button variant='success' as={Link} to={`/searchPage`}>Показать все проекты</Button>
                        <button class="button">Поиск</button>
                    </div>
                    </header>
                    <div class="export_import-container2">
                    <span class="export_import-text">
                        <span>Экспортировать базу данных</span>
                        <br />
                        <span></span>
                        <br />
                        <span></span>
                    </span>
                    <button class="export_import-button1 button" onClick={download()}>Download</button>
                    <span class="export_import-text04">
                        <span>Импортировать базу данных</span>
                        <br />
                        <span></span>
                        <br />
                        <span></span>
                        <br />
                        <span></span>
                    </span>
                    <button class="export_import-button2 button" onClick={upload()}>
                        <span>
                        <span>Upload</span>
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
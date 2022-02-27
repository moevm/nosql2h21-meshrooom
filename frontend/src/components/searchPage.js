import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

export function searchPage(){
    const project = {
        name: this.state.name,
        description: this.state.description
      };

    function searchOne(context){
      axios.get(`http://0.0.0.0/projects/${context}`)
      .then(res => {
        const project = res.data;
        this.setState({ project });
      })
    }

    return(
        <html lang="en">
        <head>
            <title>search - MeshRoom</title>
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
            <link href="./search.css" rel="stylesheet" />

            <div class="search-container">
                <header data-role="Header" class="search-header">
                <div class="search-container1">
                    <div class="search-nav">
                    <nav
                        class="navigation-links-nav navigation-links-root-class-name13"
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
                <div class="search-btn-group">
                    <button class="button" onClick={searchOne()}>Найти проект</button>
                    <Button variant='success' as={Link} to={`/searchPage`}>Поиск</Button>
                    <ul>
                        { this.state.project.map(project => <li>{project.name}</li>)}
                        { this.state.project.map(project => <li>{project.description}</li>)}
                    </ul>
                </div>
                </header>
                <div class="search-container2">
                <h1>
                    <span>Поиск по проектам</span>
                    <br />
                    <span></span>
                </h1>
                <div class="search-container3">
                    <input type="text" placeholder="Название проекта" class="input" />
                    <span>
                    <span>Найдено - 1</span>
                    <br />
                    <span></span>
                    </span>
                </div>
                <div class="search-container4">
                    <span>Название</span>
                    <span>Описание</span>
                    <span>
                    <span>Количество изображений</span>
                    <br />
                    <span></span>
                    </span>
                    <span>
                    <span>Размер мета-данных</span>
                    <br />
                    <span></span>
                    </span>
                </div>
                <div class="search-container5">
                    <span>Проект</span>
                    <span>
                    <span>длинное оп...</span>
                    <br />
                    <span></span>
                    </span>
                    <span><span>56</span></span>
                    <span>0.3MB</span>
                    <span>Редактировать</span>
                    <button className="deleteButton" onClick={deleteProject}>Удалить</button>
                    <span>Скачать</span>
                </div>
                <h1 class="search-text24">
                    <span>Поиск по метаданным</span>
                    <br />
                    <span></span>
                </h1>
                <div class="search-container6">
                    <input type="text" placeholder="Метаданные" class="input" />
                    <span>
                    <span>Найдено - 1</span>
                    <br />
                    <span></span>
                    </span>
                </div>
                <div class="search-container7">
                    <span>Поле</span>
                    <span>Содержание</span>
                </div>
                <div class="search-container8">
                    <span>key</span>
                    <span>Value</span>
                </div>
                </div>
            </div>
            </div>
        </body>
        </html>

        
    );
}
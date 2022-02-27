import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

export function projects(){
    
    function search(){
      axios.get(`http://0.0.0.0/projects`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
    }

    return(
        <div>
          <div>
            <title>New Project</title>
            <meta property="og:title" content="New Project" />
        
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta property="twitter:card" content="summary_large_image" />

            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            />
            <link rel="stylesheet" href="./style.css" />
          </div>
          <div>
            <div>
              <link href="./metadata.css" rel="stylesheet" />
        
              <div className="metadata-container">
                <header data-role="Header" className="metadata-header">
                  <div className="metadata-container1">
                    <div className="metadata-nav">
                      <nav
                        className="navigation-links-nav navigation-links-root-className-name12"
                      >
                        <span className="navigation-links-text"><span>Meshroom</span></span>
                        <span className="navigation-links-text1"><span>Проекты</span></span>
                        <span className="navigation-links-text2">
                          <span>Создать проект</span>
                        </span>
                        <span className="navigation-links-text3">
                          <span>Администрирование</span>
                        </span>
                      </nav>
                    </div>
                  </div>
                  <div className="metadata-btn-group">
                    <Button variant='success' as={Link} to={`/searchPage`} onClick={search()}>Поиск</Button>
                      <ul>
                        { this.state.projects.map(projects => <li>{projects.name}</li>)}
                      </ul>
                  </div>
                </header>
                <div className="metadata-container2">
                  <h1 className="metadata-text">
                    <span>Проект “Проект&quot;</span>
                    <br />
                    <span></span>
                    <br />
                    <span></span>
                  </h1>
                  <span>
                    <span>Длинное описание проекта, которое содержит всю</span>
                    <br />
                    <span>неободимую информацию о проекте</span>
                  </span>
                  <div className="metadata-container3">
                    <span className="metadata-text07">
                      <span>Количество изображений</span>
                      <br />
                      <span></span>
                    </span>
                    <span className="metadata-text10">56</span>
                  </div>
                  <div className="metadata-container4">
                    <span className="metadata-text11">
                      <span>Размер мета-данных</span>
                      <br />
                      <span></span>
                    </span>
                    <span>0.3MB</span>
                  </div>
                  <h1 className="metadata-text15">
                    <span className="metadata-text17">Метаданные</span>
                  </h1>
                  <div className="metadata-container5">
                    <span className="metadata-text18">
                      <span>Value</span>
                      <br />
                      <span></span>
                    </span>
                    <span>
                      <span>Data</span>
                      <br />
                      <span></span>
                    </span>
                  </div>
                  <div className="metadata-container6">
                    <span className="metadata-text26">
                      <span>Value1</span>
                      <br />
                      <span></span>
                    </span>
                    <span>
                      <span>Data1</span>
                      <br />
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    );
}
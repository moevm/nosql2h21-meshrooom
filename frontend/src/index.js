import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Button} from "react-bootstrap";
import {ProjectsPage} from "./components/projectsPage";
import {SearchPage} from "./components/searchPage";
import {CreatePage} from "./components/createPage";
import {ProjectPage} from "./components/projectPage"
import {EditPage} from "./components/editPage"

const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}
html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}
html {
    font-family: Inter;
    font-size: 16px;
}

body {
    font-weight: 400;
    font-style:normal;
    text-decoration: none;
    text-transform: none;
    letter-spacing: normal;
    line-height: 1.15;
    color: var(--dl-color-gray-black);
    background-color: var(--dl-color-gray-white);
}
`

class NotFound extends Component {
    render() {
        return <h1>not found</h1>
    }
}

ReactDOM.render(
    <>
        <GlobalStyles />
        <div>
            <div className="projects-container">
                <Router>
                    <header data-role="Header" className="projects-header">
                        <div className="projects-container1">
                            <div className="projects-nav">
                                <nav
                                    className="navigation-links-nav navigation-links-root-class-name10"
                                >
                                    <Link className="navigation-links-text" to={'/'}><span>Meshroom</span></Link>
                                    <Link className="navigation-links-text1" to={'/'}><span>Проекты</span></Link>
                                    <Link className="navigation-links-text2" to={'/projects/create'}><span>Создать проект</span></Link>
                                    <span className="navigation-links-text3">
                                      <span>Администрирование</span>
                                    </span>
                                </nav>
                            </div>
                        </div>
                        <div className="projects-btn-group">
                            <Button className="button" as={Link} to={'/search'}>Поиск</Button>
                        </div>
                    </header>
                    <Switch>
                        <Route exact path={"/"} name={"Projects"} component={ProjectsPage}/>
                        <Route exact path={"/search"} name={"searchPage"} component={SearchPage}/>
                        <Route exact path={"/projects/create"} name={"createPage"} component={CreatePage}/>
                        <Route exact path={"/projects/:id"} name={"projectPage"} component={ProjectPage}/>
                        <Route exact path={"/projects/:id/edit"} name={"editPage"} component={EditPage}/>
                        {/*<Route exact path={"/exportPage"} name={"exportPage"} component={exportPage}/>*/}
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
                {/*<App />*/}
            </div>
        </div>
    </>,
    document.getElementById('root')
);
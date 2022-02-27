import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {projects} from "./components/projects.js";
import {searchPage} from "./components/searchPage.js";
import {uploadPage} from "./components/uploadPage.js";
import {exportPage} from "./components/exportPage.js";
import {Container} from "react-bootstrap";

class NotFound extends Component {
    render() {
        return <h1>not found</h1>
    }
}

class App extends Component {
    render() {
        return (
            <Container style={{maxWidth: '512px'}}>
                <h1 className='mt-2 text-center'>Projects Meshroom</h1>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} name={"projects"} component={projects}/>
                        <Route path={"/searchPage"} name={"searchPage"} component={searchPage}/>
                        <Route path={"/uploadPage"} name={"uploadPage"} component={uploadPage}/>
                        <Route path={"/exportPage"} name={"exportPage"} component={exportPage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Container>
        )
    }
}

export default App;
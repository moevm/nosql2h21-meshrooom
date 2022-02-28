import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
import * as React from "react";

export function AdminPage() {
    const [downloaded, setDownloaded] = React.useState(false);
    const [exportDump, setExportDump] = React.useState('');
    const [importDump, setImportDump] = React.useState('');

    function download(){
      axios.get(`http://0.0.0.0/export`)
      .then(res => {
        setDownloaded(true);
        setExportDump(JSON.stringify(res.data.data));
      })
    }

    function upload(){
        axios.post(`http://0.0.0.0/import`, {dump: importDump})
        .then(res => {
          alert('Дамп загружен')
        })
      }

    function DownloadResult() {
        if (downloaded) {
            return <><b>Скопируйте ваш dump:</b><br/><textarea cols="60" rows="30" value={exportDump}></textarea><br/><br/></>
        } else {
            return ''
        }
    }

    return(
        <div className="export_import-container2">
        <span className="export_import-text">
            <span>Экспортировать базу данных</span>
            <br />
            <span></span>
            <br />
            <span></span>
        </span>
        <button className="export_import-button1 button" onClick={() => download()}>Экспорт</button>
        <br />
        <span></span>
        <br />
        <span></span>
        <br />
        <span></span>
        <DownloadResult></DownloadResult>
        <span className="export_import-text04">
            <span>Импортировать базу данных</span>
            <br />
            <span></span>
            <br />
            <span></span>
        </span>
        <textarea cols="60" rows="30" onChange={evt => setImportDump(evt.target.value)}></textarea><br/>
        <button className="export_import-button2 button" onClick={() => upload()}>
            <span>
            <span>Импорт</span>
            <br />
            <span></span>
            </span>
        </button>
        </div>
    );
}
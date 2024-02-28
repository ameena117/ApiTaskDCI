import React from 'react'
import { useFile } from './useFile'

const File = () => {
    const { files, onSubmitFiles } = useFile();
    return (
        <div className='files'>
            <input type="file" onChange={(e) => onSubmitFiles(e.target.files)} multiple />
            {files.length > 0 && <div className="files">
                <h2>Files count = {files.length}</h2>
                {files.map((file, i) => {
                    return (
                        <div key={i} className="file">
                            <h2>File #{i+1} {file.name}</h2>
                        </div>
                    );
                })}
            </div>}
        </div>
    )
}

export default File

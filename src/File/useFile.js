import { useState } from "react";

export const useFile = () => {
    const [files, setFiles] = useState([]);
    const onSubmitFiles = (e) => {
        setFiles([...files, ...e]); 
        // console.log(files);
        // console.log(e);
    }
    
    return {
        files,
        onSubmitFiles
    }
}

import fs from "fs/promises";
export const fetchDir = (path)=>{
    return fs.readdir(path);
}

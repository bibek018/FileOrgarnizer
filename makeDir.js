import fs from "fs/promises";
export const makeDir=(dirname)=>{
    fs.makeDir(dirname);
}